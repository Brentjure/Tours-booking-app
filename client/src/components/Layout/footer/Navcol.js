import { Link } from 'react-router-dom';
import classes from './NavCol.module.css';

const NavCol = ({ title, navList1, navList2, navList3, navList4 }) => {
  return (
    <nav className={classes.nav_col}>
      <p className={classes.footer_heading}>{title}</p>
      <ul className={classes.footer_nav}>
        <li>
          <Link to="#" className={classes.footer_link}>
            {navList1}
          </Link>
        </li>
        <li>
          <Link to="#" className={classes.footer_link}>
            {navList2}
          </Link>
        </li>
        <li>
          <Link to="#" className={classes.footer_link}>
            {navList3}
          </Link>
        </li>
        <li>
          <Link to="#" className={classes.footer_link}>
            {navList4}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavCol;
