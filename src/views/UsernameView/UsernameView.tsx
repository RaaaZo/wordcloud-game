import { CenteringWrapper } from 'components/atoms/CenteringWrapper/CenteringWrapper';
import { Header } from 'components/atoms/Header/Header';
import Form from 'components/organisms/Form/Form';
import { UsernameContext } from 'providers/UsernameProvider';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const UsernameView = () => {
  const [value, setValue] = useState('');

  const { push } = useHistory();

  const { setUsername } = useContext(UsernameContext);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    setUsername(value.trim());
    push('/game');
  };

  return (
    <CenteringWrapper>
      <Header>WordCloud Game</Header>
      <Form
        formHandler={formHandler}
        inputHandler={inputHandler}
        value={value}
      />
    </CenteringWrapper>
  );
};

export default UsernameView;
