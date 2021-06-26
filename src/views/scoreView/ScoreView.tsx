import { CenteringWrapper } from 'components/atoms/CenteringWrapper/CenteringWrapper';
import { Header } from 'components/atoms/Header/Header';
import { ScoreContext } from 'providers/ScoreProvider';
import { UsernameContext } from 'providers/UsernameProvider';
import { useContext } from 'react';
import styled from 'styled-components';

const ScoreView = () => {
  const { username } = useContext(UsernameContext);
  const { score } = useContext(ScoreContext);

  return (
    <CenteringWrapper>
      <Header>
        Congratulations, <Span>{username}</Span>!
      </Header>
      <Header as='h2'>Your score is:</Header>
      <Span>{score}</Span>
    </CenteringWrapper>
  );
};

export const Span = styled.span`
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export default ScoreView;
