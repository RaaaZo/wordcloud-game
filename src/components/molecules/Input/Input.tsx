import { StyledInput } from './Input.styles';

interface Props {
  type: string;
  placeholder: string;
  value: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
  inputHandler,
  placeholder,
  type = 'text',
  value,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={inputHandler}
    />
  );
};

export default Input;
