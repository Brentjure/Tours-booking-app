import classes from './Cta.module.css';

import SignUpTextBox from './SignUpTextBox';
import LoginTextBox from './LoginTextBox';

const Cta = (props) => {
  return (
    <div className={classes.cta}>
      <SignUpTextBox />
      {/* <LoginTextBox /> */}
      <div
        className={classes.cta_img_box}
        role="img"
        aria-label="lady swing on a rope"
      ></div>
    </div>
  );
};

export default Cta;
