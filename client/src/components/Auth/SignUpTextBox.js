import { useRef } from 'react';
import classes from './SignUpTextBox.module.css';

const SignUpTextBox = ({ onClose, onToggle, signUp, status, user, error }) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const passwordConfirm = confirmPasswordInputRef.current.value;

    signUp({ name, email, password, passwordConfirm });
  };

  return (
    <div className={classes.cta_text_box}>
      <h2 className="heading-secondary">Your adventure starts here!</h2>
      <span className="subheading">Create an Account</span>
      <p className={classes.cta_text}>
        Create an Account now to book your dream tour!
      </p>
      {error && <p className={classes.error}>{error}</p>}

      <form className={classes.cta_form} onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            placeholder="Brent Otieno"
            required
            ref={nameInputRef}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="me@example.com"
            required
            ref={emailInputRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="••••••••"
            required
            ref={passwordInputRef}
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            type="password"
            name=""
            id="confirm-password"
            placeholder="••••••••"
            required
            ref={confirmPasswordInputRef}
          />
        </div>

        <button class="button btn--form">
          {status === 'pending' ? 'Processing' : 'Sign up now!'}
        </button>
      </form>
      {error && <p className={classes.error}>{error}</p>}

      <em className={classes.have_account}>
        Already have an account?{' '}
        <span className="toggle" onClick={onToggle}>
          Login to Tours
        </span>
      </em>
    </div>
  );
};

export default SignUpTextBox;
