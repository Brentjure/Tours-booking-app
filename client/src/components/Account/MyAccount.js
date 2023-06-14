import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { IonIcon } from 'react-ion-icon';

import classes from './MyAccount.module.css';
import Menu from './Menu/Menu';
import AccountSettings from './Contents/Settings/AccountSettings';

const Sidebar = (props) => {
  const [show, setShow] = useState(false);

  return (
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
  );
};

export default Sidebar;
