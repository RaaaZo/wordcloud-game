import { CenteringWrapper } from 'components/atoms/CenteringWrapper/CenteringWrapper';
import { Header } from 'components/atoms/Header/Header';
import ListItem from 'components/molecules/ListItem/ListItem';
import { useFetchQuestions } from 'hooks/useFetchQuestions';
import { ScoreContext } from 'providers/ScoreProvider';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { GameWrapper, List, StyledButton } from './GameView.styles';

const GameView = () => {
  const { push } = useHistory();
  const { handleScore } = useContext(ScoreContext);
  const { data, error, fetchData, isLoading } = useFetchQuestions();

  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<string[]>([]);
  const [goodAnswers, setGoodAnswers] = useState<string[]>([]);
  const [answersChecked, setAnswersChecked] = useState(false);

  const isChecked = (clickedItem: string) => {
    return checkedItems.find((name) => name === clickedItem);
  };

  const clickListItemHandler = (item: string) => {
    const isCheckedAnswer = isChecked(item);

    if (!!isCheckedAnswer) {
      const newCheckedItems = checkedItems.filter((word) => word !== item);
      const newGoodAnswers = goodAnswers.filter((word) => word !== item);
      const newWrongAnswers = wrongAnswers.filter((word) => word !== item);
      setCheckedItems(newCheckedItems);
      setGoodAnswers(newGoodAnswers);
      setWrongAnswers(newWrongAnswers);
    } else {
      setCheckedItems([...checkedItems, item]);
    }

    const correctAnswer = data!.good_words.find((word) => word === item);

    if (correctAnswer && !isCheckedAnswer) {
      setGoodAnswers([...goodAnswers, correctAnswer]);
    } else if (!isCheckedAnswer) {
      setWrongAnswers([...wrongAnswers, item]);
    }
  };

  const isGoodAnswer = (item: string) => {
    return goodAnswers.find((word) => word === item);
  };

  const isWrongAnswer = (item: string) => {
    return wrongAnswers.find((word) => word === item);
  };

  const checkAnswersHandler = () => {
    handleScore(wrongAnswers.length, goodAnswers.length);
    setAnswersChecked(true);
  };

  useEffect(() => {
    fetchData('/questions');
  }, [fetchData]);

  if (error) {
    return (
      <CenteringWrapper>
        <Header>{error}</Header>
      </CenteringWrapper>
    );
  }

  return (
    <CenteringWrapper>
      {isLoading ? <h3>loading</h3> : null}
      {!isLoading && data ? (
        <>
          <Header>{data.question}</Header>
          <GameWrapper>
            <List>
              {data.all_words.map((word) => (
                <ListItem
                  key={word}
                  clickHandler={clickListItemHandler}
                  isChecked={isChecked}
                  isGoodAnswer={isGoodAnswer(word)}
                  isWrongAnswer={isWrongAnswer(word)}
                  answersChecked={answersChecked}
                  word={word}
                />
              ))}
            </List>
          </GameWrapper>
          {answersChecked ? (
            <StyledButton onClick={() => push('/score')}>
              Finish Game
            </StyledButton>
          ) : (
            <StyledButton onClick={checkAnswersHandler}>
              Check answers
            </StyledButton>
          )}
        </>
      ) : null}
    </CenteringWrapper>
  );
};

export default GameView;
