import { useState, useContext, useReducer } from 'react';

import classes from './Cta.module.css';
import SignUpTextBox from '../Auth/SignUpTextBox';
import LoginTextBox from '../Auth/LoginTextBox';
import useHttps from '../../hooks/use-https';
import { signUp, login } from '../../lib/api';
import AuthContext from '../../store/auth-context';
import UIContext from '../../store/ui-context';
import ForgotPasswordTextBox from '../Auth/ForgotPasswordTextBox';
import { forgotPassword } from '../../lib/api';

const Cta = (props) => {
  const { sendRequest, status, data: user, error } = useHttps(signUp, false);
  const {
    sendRequest: SendloginRqst,
    status: loginStatus,
    data: loginUser,
    error: loginError,
  } = useHttps(login, false);
  const {
    sendRequest: SendForgotPaswordRqst,
    status: ForgotPasswordStatus,
    data,
    error: ForgotPasswordError,
  } = useHttps(forgotPassword, false);

  const authCtx = useContext(AuthContext);
  const uiCtx = useContext(UIContext);
  const [auth, setAuth] = useState('signUp');

  if (status === 'completed' && user) {
    authCtx.login(user);
    uiCtx.showNotification({
      status: 'success',
      message: 'Your account has been created!',
    });
    uiCtx.closeModal();
  }

  if (loginStatus === 'completed' && loginUser) {
    authCtx.login(loginUser);
    uiCtx.closeModal();
  }

  if (ForgotPasswordStatus === 'completed' && data) {
    uiCtx.closeModal();
    uiCtx.showNotification({
      status: 'success',
      message: data.message,
    });
  }

  const signUpHandler = (data) => {
    sendRequest(data);
  };

  const loginHandler = (data) => {
    SendloginRqst(data);
  };

  const forgotPasswordHandler = (data) => {
    SendForgotPaswordRqst(data);
  };

  const setToLogin = () => setAuth('login');
  const setToSignUp = () => setAuth('signUp');
  const setToForgotPassword = () => setAuth('forgotPassword');

  return (
    <div className={classes.cta}>
      {auth === 'signUp' && (
        <SignUpTextBox
          onClose={props.onClose}
          onToggle={setToLogin}
          signUp={signUpHandler}
          status={status}
          user={user}
          error={error}
        />
      )}
      {auth === 'login' && (
        <LoginTextBox
          onClose={props.onClose}
          onToggle={setToSignUp}
          login={loginHandler}
          forgotPassword={setToForgotPassword}
          status={loginStatus}
          user={loginUser}
          error={loginError}
        />
      )}
      {auth === 'forgotPassword' && (
        <ForgotPasswordTextBox
          onClose={props.onClose}
          onToggle={setToLogin}
          status={ForgotPasswordStatus}
          data={data}
          error={ForgotPasswordError}
          forgotPassword={forgotPasswordHandler}
        />
      )}
      <div
        className={classes.cta_img_box}
        role="img"
        aria-label="lady swing on a rope"
      ></div>
    </div>
  );
};

export default Cta;
