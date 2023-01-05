import classes from './LoginTextBox.module.css';

const LoginTextBox = (props) => {
  return (
    <div className={classes.cta_text_box}>
      <h2 className="heading-secondary">Your adventure starts here!</h2>
      <span className="subheading">Already have an Account?</span>
      <p className={classes.cta_text}>Login now to book your dream tour!</p>
      <form className={classes.cta_form} action="">
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="me@example.com"
            required
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            name=""
            id="password"
            placeholder="••••••••"
            required
          />
        </div>
        <button class="button btn--form">Login to your Account</button>
        <div className={classes.forgot_password}>
          <p>Forgot your password?</p>
        </div>
      </form>
      <em className={classes.have_account}>
        Don't have an account? <span>Sign up to Tours</span>
      </em>
    </div>
  );
};

export default LoginTextBox;
