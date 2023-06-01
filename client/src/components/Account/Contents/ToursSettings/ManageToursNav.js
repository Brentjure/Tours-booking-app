import { NavLink } from 'react-router-dom';
import classes from './ManageToursNav.module.css';

const ManageToursNav = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="all-tours"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Tours
            </NavLink>
          </li>
          <li>
            <NavLink
              to="new-tour"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              New Tour
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ManageToursNav;
