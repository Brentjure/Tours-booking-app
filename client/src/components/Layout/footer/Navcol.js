import classes from './NavCol.module.css';

const NavCol = (props) => {
  return (
    <nav className={classes.nav_col}>
      <p className={classes.footer_heading}>Account</p>
      <ul className={classes.footer_nav}>
        <li>
          <a className={classes.footer_link} href="#">
            Create account
          </a>
        </li>
        <li>
          <a className={classes.footer_link} href="#">
            Sign in
          </a>
        </li>
        <li>
          <a className={classes.footer_link} class="footer-link" href="#">
            iOS app
          </a>
        </li>
        <li>
          <a className={classes.footer_link} href="#">
            Android app
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavCol;
