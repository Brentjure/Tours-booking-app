import { useState } from 'react';
import classes from './ResetPassword.module.css';

const ResetPassword = ({ resetPassword, status, error }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();

    const data = {
      password: newPassword,
      passwordConfirm: confirmPassword,
    };
    resetPassword(data);
  };

  const form = `${classes['acc-setting-form']} ${classes['log-in']}`;
  const btn = `button ${classes['form-btn']}`;

  return (
    <>
      <section className="container">
        <div className={classes['log-in-form']}>
          <spam className="subheading">Reset your Password</spam>
          <div>
            <form className={form} onSubmit={submitFormHandler}>
              <div className={classes['form-container']}>
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
                <button className={btn}>
                  {status === 'pending' ? 'Loading' : 'save password'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
