import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './MyAccount.module.css';
import Menu from './Menu/Menu';
import AuthContext from '../../store/auth-context';

const Sidebar = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      {authCtx.isLoggedIn && (
        <section className={classes.account}>
          {/* <button className={classes.btn_mobile_nav}>
        <IonIcon className={classes.icon_mobile_nav} name="menu-outline" />
      </button> */}
          <div className={classes.acc_container}>
            <div>
              <Menu />
            </div>
            <div className={classes.content}>
              <Outlet />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Sidebar;
