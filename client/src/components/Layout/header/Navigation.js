import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.module.css';
import userImg from '../../../images/user-14.jpg';
import AuthContext from '../../../store/auth-context';
// a.main-nav-link.loggedin(href='/me')
//             img(class="nav-user-photo" src=`img/users/${user.photo}`, alt=`Photo of ${user.name}`)
//             span=`Hi ${user.name.split(' ')[0]}.`

const Navigation = (props) => {
  const authCtx = useContext(AuthContext);
  let user;

  if (authCtx.isLoggedIn) {
    user = authCtx.user.data.user;
    // const userPhoto = `http://127.0.0.1:8000/images/users/${user.photo}`;
  }

  const styles = `${classes['main-nav-link']} ${classes['nav-cta']}`;
  const account = `${classes['main-nav-link']} ${classes['nav-acc']}`;
  return (
    <nav>
      <ul className={classes['main-nav-list']}>
        {/* if logged in */}

        {authCtx.isLoggedIn && (
          <li>
            <Link className={classes['main-nav-link']} onClick={authCtx.logout}>
              Log Out
            </Link>
          </li>
        )}
        <li>
          <Link className={classes['main-nav-link']}>Tours</Link>
        </li>
        {authCtx.isLoggedIn && (
          <li>
            <Link to="/account/settings" className={account}>
              <img
                className={classes['user-img']}
                src={`http://127.0.0.1:8000/images/users/${user.photo}`}
                alt="user"
              />
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
