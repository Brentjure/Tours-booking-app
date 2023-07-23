import { useContext } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

import classes from './Navigation.module.css';
import AuthContext from '../../../store/auth-context';

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  let user;

  if (authCtx.isLoggedIn) {
    user = authCtx.user.data.user;
  }

  const logoutHandler = () => {
    authCtx.logout();
  };

  const styles = `${classes['main-nav-link']} ${classes['nav-cta']}`;
  const account = `${classes['main-nav-link']} ${classes['nav-acc']}`;
  return (
    <nav className={classes.nav}>
      <ul className={classes['main-nav-list']}>
        {/* if logged in */}

        {authCtx.isLoggedIn && (
          <li>
            <Link
              to="/"
              className={classes['main-nav-link']}
              onClick={logoutHandler}
            >
              Log Out
            </Link>
          </li>
        )}
        {/* <li>
          <Link className={classes['main-nav-link']}>Tours</Link>
        </li> */}
        {authCtx.isLoggedIn && (
          <li>
            <Link to="/account/settings" className={account}>
              <span>{`Hi, ${user.name.split(' ')[0]}`}</span>
            </Link>
          </li>
        )}
        {/* <li>
          <Link className={classes['main-nav-link']} onClick={props.onShowAuth}>
            Log in
          </Link>
        </li> */}
        {!authCtx.isLoggedIn && (
          <li>
            <Link className={styles} onClick={props.onShowAuth}>
              Sign up / Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
