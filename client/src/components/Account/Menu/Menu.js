import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { IonIcon } from 'react-ion-icon';

import classes from './Menu.module.css';
import { menuData, menuDataAdmin } from './MenuData';
import AuthContext from '../../../store/auth-context';

const Menu = (props) => {
  const authCtx = useContext(AuthContext);
  const data =
    authCtx.user.data.user.role === 'admin' ? menuDataAdmin : menuData;
  const menu = data.map((el, index) => (
    <li key={index}>
      <NavLink
        to={el.link}
        className={(navData) =>
          navData.isActive
            ? `${classes.active} ${classes.side_el}`
            : `${classes.side_el}`
        }
      >
        <ion-icon className={classes.side_menu_icon} name={el.icon}></ion-icon>
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
