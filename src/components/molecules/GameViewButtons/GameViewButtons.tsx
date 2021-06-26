import { useHistory } from 'react-router-dom';

import { StyledButton } from './GameViewButtons.styles';

interface Props {
  answersChecked: boolean;
  checkAnswersHandler: () => void;
}

const GameViewButtons: React.FC<Props> = ({
  answersChecked,
  checkAnswersHandler,
}) => {
  const { push } = useHistory();

  return (
    <>
      {answersChecked ? (
        <StyledButton onClick={() => push('/score')}>Finish Game</StyledButton>
      ) : (
        <StyledButton onClick={checkAnswersHandler}>Check answers</StyledButton>
      )}
    </>
  );
};

export default GameViewButtons;
