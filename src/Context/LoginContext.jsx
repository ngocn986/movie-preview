import { createContext, useEffect, useState } from 'react';
import LoginService from '../Services/LoginService';
export const LoginContext = createContext({});
export const LoginProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [accountData, setAccountData] = useState([]);
  const [accountId, setAccountId] = useState('');
  const service = new LoginService();
  useEffect(() => {
    service.login(accountId).then((data) => {
      setAccountData(data);
    });
  }, [accountId]);
  const contextValue = {
    setPassword: setPassword,
    setUsername: setUsername,
    username: username,
    password: password,
    setAccountId: setAccountId,
    accountId: accountId,
    accountData: accountData,
  };
  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};
