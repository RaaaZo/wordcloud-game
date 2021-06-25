import { Button } from 'components/atoms/Button/Button';
import { FormWrapper } from 'components/atoms/FormWrapper/FormWrapper';
import { InputTip } from 'components/atoms/InputTip/InputTip';
import Input from 'components/molecules/Input/Input';

interface Props {
  formHandler: React.FormEventHandler<HTMLFormElement>;
  value: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<Props> = ({ formHandler, inputHandler, value }) => {
  return (
    <FormWrapper onSubmit={formHandler}>
      <Input
        type='text'
        placeholder='Enter your nickname there...'
        value={value}
        inputHandler={inputHandler}
      />
      {!value ? <InputTip>You have to provide your nickname</InputTip> : null}
      <Button type='submit' disabled={!value ? true : false}>
        Play
      </Button>
    </FormWrapper>
  );
};

export default Form;
