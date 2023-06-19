import { useState } from 'react';

import classes from './Cta.module.css';
import SignUpTextBox from '../Auth/SignUpTextBox';
import LoginTextBox from '../Auth/LoginTextBox';

const Cta = (props) => {
  const [isLogin, setIsLoggin] = useState(false);
  const toggle = () => {
    setIsLoggin((prevState) => !prevState);
  };

  return (
    <div className={classes.cta}>
      {!isLogin && <SignUpTextBox onClose={props.onClose} onToggle={toggle} />}
      {isLogin && <LoginTextBox onClose={props.onClose} onToggle={toggle} />}
      <div
        className={classes.cta_img_box}
        role="img"
        aria-label="lady swing on a rope"
      ></div>
    </div>
  );
};

export default Cta;
