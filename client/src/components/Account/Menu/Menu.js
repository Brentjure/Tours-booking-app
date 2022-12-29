import { NavLink } from 'react-router-dom';
import { IonIcon } from 'react-ion-icon';

import classes from './Menu.module.css';
import { menuData } from './MenuData';

const Menu = (props) => {
  const menu = menuData.map((el) => (
    <li>
      <NavLink
        to={el.link}
        className={(navData) =>
          navData.isActive
            ? `${classes.active} ${classes.side_el}`
            : `${classes.side_el}`
        }
      >
        <IonIcon className={classes.side_menu_icon} name={el.icon} />
        <span>{el.title}</span>
      </NavLink>
    </li>
  ));

  return (
    <nav className={classes.side_menu}>
      <ul className={classes.side_menu_list}>{menu}</ul>
    </nav>
  );
};

export default Menu;
