import React, { useState } from 'react';
import { UsernameContextInterface } from 'types';

export const UsernameContext = React.createContext<UsernameContextInterface>({
  username: '',
  setUsername: () => {},
});

export const UsernameProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState('');

  return (
    <UsernameContext.Provider value={{ username, setUsername }}>
      {children}
    </UsernameContext.Provider>
  );
};
