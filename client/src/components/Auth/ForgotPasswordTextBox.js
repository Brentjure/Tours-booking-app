import { useRef } from 'react';

import classes from './ForgotPasswordTextBox.module.css';

const ForgotPasswordTextBox = ({
  onClose,
  onToggle,
  status,
  data,
  error,
  forgotPassword,
}) => {
  const emailInputRef = useRef();

  const submitFormHandler = async (e) => {
    e.preventDefault();

    const data = {
      email: emailInputRef.current.value,
    };

    forgotPassword(data);
  };

  return (
    <div className={classes.cta_text_box}>
      <h2 className="heading-secondary">Your adventure starts here!</h2>
      <span className="subheading">Forgot your Password?</span>
      <p className={classes.cta_text}>
        Don't worry, we'll send you an email to help you reset your Password!
      </p>
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
        <button className="button btn--form">
          {status === 'pending' ? 'Loading' : 'Send Email'}
        </button>
      </form>
      {error && <p className={classes.error}>{error}</p>}
      <em className={classes.have_account}>
        <span className="toggle" onClick={onToggle}>
          Return to Log in
        </span>
      </em>
    </div>
  );
};

export default ForgotPasswordTextBox;
