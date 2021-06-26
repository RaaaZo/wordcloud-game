import { randomNumber } from 'helpers/randomNumber';
import { useEffect, useState } from 'react';

import { ListItem, ListItemButton, Wrapper } from './ListItem.styles';

interface Props {
  word: string;
  clickHandler: (word: string) => void;
  isChecked: (clickedItem: string) => string | undefined;
  isGoodAnswer: string | undefined;
  isWrongAnswer: string | undefined;
  answersChecked: boolean;
}

const ListItemComponent: React.FC<Props> = ({
  clickHandler,
  isChecked,
  word,
  isGoodAnswer,
  isWrongAnswer,
  answersChecked,
}) => {
  const [gridColumn, setGridColumn] = useState<number>(0);
  const [gridRow, setGridRow] = useState<number>(0);

  useEffect(() => {
    setGridColumn(randomNumber(12));
    setGridRow(randomNumber(12));
  }, []);

  return (
    <Wrapper
      randomGridRow={gridColumn}
      randomGridColumn={gridRow}
      answersChecked={answersChecked}
      isGoodAnswer={!!isGoodAnswer}
      isWrongAnswer={!!isWrongAnswer}
    >
      {(answersChecked && isWrongAnswer) || (answersChecked && isGoodAnswer) ? (
        <p>{isGoodAnswer ? 'Good' : 'Bad'}</p>
      ) : null}
      <ListItem>
        <ListItemButton
          isChecked={isChecked(word) ? true : false}
          disabled={answersChecked ? true : false}
          onClick={() => clickHandler(word)}
        >
          {word}
        </ListItemButton>
      </ListItem>
    </Wrapper>
  );
};

export default ListItemComponent;
