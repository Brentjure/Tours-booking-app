import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: {},
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('user');
  const [user, setUser] = useState(JSON.parse(initialToken));

  const userIsLoggedIn = !!user;

  const loginHandler = (user) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logoutHandler = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const contextValue = {
    user,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
