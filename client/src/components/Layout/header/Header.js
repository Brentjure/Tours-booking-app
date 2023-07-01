import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';
import classes from './Header.module.css';
import Auth from '../../Auth/Auth';
import UIContext from '../../../store/ui-context';
import Notification from '../../UI/Notification';

const Header = () => {
  const UICtx = useContext(UIContext);

  const styles = `${classes.header} ${classes.sticky}`;
  return (
    <header className={styles}>
      {UICtx.modal && <Auth onClose={UICtx.closeModal} />}
      <div className={classes.navbar}>
        <NavLink to="/" className={classes.logo}>
          Tours.
        </NavLink>
        <Navigation onShowAuth={UICtx.openModal} />
      </div>
      {UICtx.notification && (
        <Notification
          status={UICtx.notification.status}
          message={UICtx.notification.message}
        />
      )}
    </header>
  );
};

export default Header;
