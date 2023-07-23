import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.css';
import AuthContext from '../../../store/auth-context';

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
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
          <Link to="/account/settings" className={account}>
            <img
              className={classes['user-img']}
              src={`https://tours-booking-app-api.onrender.com/images/users/${user.photo}`}
              alt="user"
            />
            <span>{`Hi, ${user.name.split(' ')[0]}`}</span>
          </Link>
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
