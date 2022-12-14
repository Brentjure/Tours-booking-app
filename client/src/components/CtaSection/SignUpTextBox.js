import classes from './SignUpTextBox.module.css';

const SignUpTextBox = (props) => {
  return (
    <div className={classes.cta_text_box}>
      <h2 className="heading-secondary">Your adventure starts here!</h2>
      <span className="subheading">Create an Account</span>
      <p className={classes.cta_text}>
        Create an Account now to book your dream tour!
      </p>
      <form className={classes.cta_form} action="">
        <div>
          <label for="full-name">Full Name</label>
          <input
            type="text"
            id="full-name"
            placeholder="Brent Otieno"
            required
          />
        </div>
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
        <div>
          <label for="confirm-password">Confirm password</label>
          <input
            type="password"
            name=""
            id="confirm-password"
            placeholder="••••••••"
            required
          />
        </div>

        <button class="button btn--form">Sign up now</button>
      </form>
      <em className={classes.have_account}>
        Already have an account? <span>Login to Tours</span>
      </em>
    </div>
  );
};

export default SignUpTextBox;
