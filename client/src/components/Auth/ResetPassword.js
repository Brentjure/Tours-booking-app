import { useState } from 'react';
import classes from './PasswordChangeForm.module.css';

const ResetPassword = ({ resetPassword }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredData = {
      password: newPassword,
      passwordConfirm: confirmPassword,
    };
    console.log(enteredData);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          placeholder="••••••••"
          required
          minLength="8"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="••••••••"
          required
          minLength="8"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
      </div>
      <div className={classes.btn_form}>
        <button className="btn form-btn">save password</button>
      </div>
    </form>
  );
};

export default ResetPassword;
