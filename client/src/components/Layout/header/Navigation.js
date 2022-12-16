import { useReducer } from 'react';
import classes from './Navigation.module.css';
// a.main-nav-link.loggedin(href='/me')
//             img(class="nav-user-photo" src=`img/users/${user.photo}`, alt=`Photo of ${user.name}`)
//             span=`Hi ${user.name.split(' ')[0]}.`

const Navigation = () => {
  const styles = `${classes['main-nav-link']} ${classes['nav-cta']}`;
  return (
    <nav>
      <ul className={classes['main-nav-list']}>
        {/* if logged in */}
        <li>
          <a className={classes['main-nav-link']} href="#pricing">
            Log out
          </a>
        </li>
        <li>
          <a className={classes['main-nav-link']} href="#cta">
            <img className={classes['user-img']} src={''} alt="beach party" />
            <span>Hi Brent</span>
          </a>
        </li>
        {/* else */}
        <li>
          <a className={classes['main-nav-link']} href="#pricing">
            Log in
          </a>
        </li>
        <li>
          <a className={styles} href="#cta">
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
