import { createContext, useState } from 'react';

const UserAuthContext = createContext();

const UserAuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      if (username === 'admin' && password === 'password') {
        setIsLoggedIn(true);
        resolve(true);
      } else {
        setIsLoggedIn(false);
        resolve(false);
      }
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserAuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export { UserAuthProvider, UserAuthContext };