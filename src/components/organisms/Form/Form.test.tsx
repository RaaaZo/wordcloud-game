import { render, screen } from 'test-utils';
import Form from './Form';

describe('Form', () => {
  test('should renders the component without errors', () => {
    const formHandler = jest.fn();
    const inputHandler = jest.fn();

    render(
      <Form value='' formHandler={formHandler} inputHandler={inputHandler} />
    );

    screen.getByPlaceholderText(/enter your nickname/i);
    screen.getByText(/you have to provide/i);
    screen.getByText(/play/i);
  });

  test('should tip paragraph won`t be in the document if the value is not empty', () => {
    const formHandler = jest.fn();
    const inputHandler = jest.fn();

    render(
      <Form
        value='Value'
        formHandler={formHandler}
        inputHandler={inputHandler}
      />
    );

    const paragraph = screen.queryByText(/you have to provide/i);
    expect(paragraph).not.toBeInTheDocument();
  });

  test('should button be disabled if value is empty', () => {
    const formHandler = jest.fn();
    const inputHandler = jest.fn();

    render(
      <Form value='' formHandler={formHandler} inputHandler={inputHandler} />
    );

    const button = screen.getByText(/play/i);
    expect(button).toBeDisabled();
  });

  test('should button be not disabled if value is not empty', () => {
    const formHandler = jest.fn();
    const inputHandler = jest.fn();

    render(
      <Form
        value='value'
        formHandler={formHandler}
        inputHandler={inputHandler}
      />
    );

    const button = screen.getByText(/play/i);
    expect(button).not.toBeDisabled();
  });
});
