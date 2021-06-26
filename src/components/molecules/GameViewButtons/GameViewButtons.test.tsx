import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from 'test-utils';

import userEvent from '@testing-library/user-event';

import GameViewButtons from './GameViewButtons';

describe('GameViewButtons', () => {
  test('should renders the component without errors', () => {
    render(
      <GameViewButtons answersChecked={false} checkAnswersHandler={() => {}} />
    );

    screen.getByText(/check/i);
  });

  test('should the button go to /score if answersChecked is true', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <GameViewButtons answersChecked={true} checkAnswersHandler={() => {}} />
      </Router>
    );

    const button = screen.getByText(/finish/i);

    expect(history.location.pathname).toBe('/');
    userEvent.click(button);
    expect(history.location.pathname).toBe('/score');
  });

  test('should the button handle checkAnswersHandler once if answersChecked is false', () => {
    const fn = jest.fn();

    render(<GameViewButtons answersChecked={false} checkAnswersHandler={fn} />);

    const button = screen.getByText(/check/i);

    userEvent.click(button);
    expect(fn).toBeCalledTimes(1);
  });
});
