import { render, screen } from 'test-utils';
import Input from './Input';
import userEvent from '@testing-library/user-event';

describe('Input', () => {
  test('should renders the component without errors', () => {
    const fn = jest.fn();

    render(
      <Input type='text' placeholder='placeholder' value='' inputHandler={fn} />
    );

    screen.getByPlaceholderText(/placeholder/i);
  });

  test('should handle proper value', () => {
    const fn = jest.fn();

    render(
      <Input type='text' placeholder='placeholder' value='' inputHandler={fn} />
    );

    const input = screen.getByPlaceholderText(
      /placeholder/i
    ) as HTMLInputElement;

    userEvent.type(input, 'Mateusz');
    expect(fn).toBeCalledTimes(7);
  });
});

export {};
