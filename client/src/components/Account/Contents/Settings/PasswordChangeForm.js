import classes from './PasswordChangeForm.module.css';

const PasswordChangeForm = (props) => {
  return (
    <form className={classes.form}>
      <div>
        <label for="current-password">Current Password</label>
        <input
          type="password"
          id="current-password"
          placeholder="••••••••"
          required
          minlength="8"
        />
      </div>
      <div>
        <label for="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          placeholder="••••••••"
          required
          minlength="8"
        />
      </div>
      <div>
        <label for="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="••••••••"
          required
          minlength="8"
        />
      </div>
      <div className={classes.btn_form}>
        <button class="btn form-btn">save password</button>
      </div>
    </form>
  );
};

export default PasswordChangeForm;
