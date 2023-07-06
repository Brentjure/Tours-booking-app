import { useState } from 'react';
import classes from './PasswordChangeForm.module.css';

const PasswordChangeForm = ({ editPassword }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredData = {
      currentPassword: currentPassword,
      password: newPassword,
      passwordConfirm: confirmPassword,
    };

    editPassword(JSON.stringify(enteredData));
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="current-password">Current Password</label>
        <input
          type="password"
          id="current-password"
          placeholder="••••••••"
          required
          minLength="8"
          onChange={(e) => {
            setCurrentPassword(e.target.value);
          }}
        />
      </div>
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
        <button className="button form-btn" disabled={true}>
          save password
        </button>
      </div>
    </form>
  );
};

export default PasswordChangeForm;
