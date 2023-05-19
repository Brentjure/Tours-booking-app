import { useState } from 'react';

import classes from './Cta.module.css';
import SignUpTextBox from '../Auth/SignUpTextBox';
import LoginTextBox from '../Auth/LoginTextBox';

const Cta = (props) => {
  const [isLogin, setIsLoggin] = useState(false);
  const toggle = () => {
    setIsLoggin((prevState) => !prevState);
  };

  const authHandler = async (data) => {
    let url;
    if (isLogin) {
      url = `http://127.0.0.1:8000/api/v1/users/login`;
    } else {
      url = `http://127.0.0.1:8000/api/v1/users/signup`;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: data.enteredEmail,
          password: data.enteredPassword,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {}
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
