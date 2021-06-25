import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { Theme } from 'assets/styles/Theme';
import { QuestionsProvider } from 'hooks/useFetchQuestions';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { ScoreProvider } from './ScoreProvider';
import { UsernameProvider } from './UsernameProvider';

const AllProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <UsernameProvider>
          <QuestionsProvider>
            <ScoreProvider>{children}</ScoreProvider>
          </QuestionsProvider>
        </UsernameProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AllProviders;
