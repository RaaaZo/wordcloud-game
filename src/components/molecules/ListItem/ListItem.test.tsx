import userEvent from '@testing-library/user-event';
import { render, screen } from 'test-utils';
import ListItem from './ListItem';

describe('ListItem', () => {
  test('should renders the component without errors', () => {
    const fn = jest.fn();

    render(
      <ListItem
        word='dog'
        clickHandler={fn}
        isChecked={(clickedItem: string) => undefined}
        isGoodAnswer={undefined}
        isWrongAnswer={undefined}
        answersChecked={false}
      />
    );

    screen.getByText(/dog/i);
  });

  test('should renders paragraph with `Good` content if answersChecked is true and isGoodAnswer is also true', () => {
    const fn = jest.fn();
    render(
      <ListItem
        word='dog'
        clickHandler={fn}
        isChecked={(clickedItem: string) => undefined}
        isGoodAnswer='true'
        isWrongAnswer={undefined}
        answersChecked={true}
      />
    );

    screen.getByText(/good/i);
  });

  test('should renders paragraph with `Bad` content if answersChecked is true and isWrongAnswer is also true', () => {
    const fn = jest.fn();
    render(
      <ListItem
        word='dog'
        clickHandler={fn}
        isChecked={(clickedItem: string) => undefined}
        isGoodAnswer={undefined}
        isWrongAnswer='true'
        answersChecked={true}
      />
    );

    screen.getByText(/bad/i);
  });

  test('should clickHandler works on button click', () => {
    const fn = jest.fn();
    render(
      <ListItem
        word='dog'
        clickHandler={fn}
        isChecked={(clickedItem: string) => undefined}
        isGoodAnswer={undefined}
        isWrongAnswer={undefined}
        answersChecked={false}
      />
    );

    const button = screen.getByText(/dog/i);
    userEvent.click(button);
    expect(fn).toBeCalledTimes(1);
  });

  test('should button be disabled when answersChecked is true', () => {
    const fn = jest.fn();
    render(
      <ListItem
        word='dog'
        clickHandler={fn}
        isChecked={(clickedItem: string) => undefined}
        isGoodAnswer={undefined}
        isWrongAnswer={undefined}
        answersChecked={true}
      />
    );

    const button = screen.getByText(/dog/i);
    expect(button).toBeDisabled();
  });
});
