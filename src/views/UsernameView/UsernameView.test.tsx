import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from 'test-utils';

import userEvent from '@testing-library/user-event';

import UsernameView from './UsernameView';

describe('UsernameView', () => {
  test('should renders the component without errors', () => {
    render(<UsernameView />);

    screen.getByText(/wordcloud/i);
    screen.getByText(/play/i);
  });

  test('should input element works', () => {
    render(<UsernameView />);

    const input = screen.getByPlaceholderText(
      /enter your nickname/i
    ) as HTMLInputElement;
    expect(input.value).toBe('');
    userEvent.type(input, 'Mateusz');
    expect(input.value).toMatch(/mateusz/i);
  });

  test('should button be disabled if input value is empty and able to click when input value is not empty', () => {
    render(<UsernameView />);

    const input = screen.getByPlaceholderText(
      /enter your nickname/i
    ) as HTMLInputElement;
    const button = screen.getByText(/play/i);

    expect(button).toBeDisabled();
    userEvent.type(input, 'Mateusz');
    expect(button).not.toBeDisabled();
  });

  test('should change the url to /game after clicking the button', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <UsernameView />
      </Router>
    );

    const input = screen.getByPlaceholderText(
      /enter your nickname/i
    ) as HTMLInputElement;
    const button = screen.getByText(/play/i);

    expect(history.location.pathname).toBe('/');

    userEvent.type(input, 'Mateusz');
    userEvent.click(button);

    expect(history.location.pathname).toBe('/game');
  });
});
