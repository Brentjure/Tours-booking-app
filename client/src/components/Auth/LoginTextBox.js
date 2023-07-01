import { useState, useRef, useContext } from 'react';

import useHttps from '../../hooks/use-https';
import AuthContext from '../../store/auth-context';
import { login } from '../../lib/api';
import classes from './LoginTextBox.module.css';

const LoginTextBox = ({
  onClose,
  onToggle,
  login,
  status,
  user,
  error,
  forgotPassword,
}) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    login({ email: enteredEmail, password: enteredPassword });
  };

  return (
    <div className={classes.cta_text_box}>
      <h2 className="heading-secondary">Your adventure starts here!</h2>
      <span className="subheading">Already have an Account?</span>
      <p className={classes.cta_text}>Login now to book your dream tour!</p>
      <form className={classes.cta_form} onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            ref={emailInputRef}
            type="email"
            name=""
            id="email"
            placeholder="me@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            name=""
            id="password"
            placeholder="••••••••"
            required
          />
        </div>
        <button className="button btn--form">
          {status === 'pending' ? 'Loading' : 'Login to your Account'}
        </button>
        <div className={classes.forgot_password} onClick={forgotPassword}>
          <p>Forgot your password?</p>
        </div>
      </form>
      {error && <p className={classes.error}>{error}</p>}
      <em className={classes.have_account}>
        Don't have an account?{' '}
        <span className="toggle" onClick={onToggle}>
          Sign up to Tours
        </span>
      </em>
    </div>
  );
};

export default LoginTextBox;
