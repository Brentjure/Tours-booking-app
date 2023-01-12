import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './LoginTextBox.module.css';

const LoginTextBox = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    const url = `http://127.0.0.1:8000/api/v1/users/login`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      setIsLoading(false);

      if (response.ok) {
        const data = await response.json();
        console.log(JSON.stringify(data));
        authCtx.login(data);
      } else {
        const data = await response.json();

        let errorMessage = 'Authentication Failed';
        if (data && data.error && data.message) errorMessage = data.message;

        throw new Error(errorMessage);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
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
          {isLoading ? 'Loading' : 'Login to your Account'}
        </button>
        <div className={classes.forgot_password}>
          <p>Forgot your password?</p>
        </div>
      </form>
      {error && <p>{error.message}</p>}
      <em className={classes.have_account}>
        Don't have an account?{' '}
        <span onClick={props.onToggle}>Sign up to Tours</span>
      </em>
    </div>
  );
};

export default LoginTextBox;
