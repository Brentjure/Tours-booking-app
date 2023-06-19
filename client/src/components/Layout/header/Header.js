import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';
import classes from './Header.module.css';
import Auth from '../../Auth/Auth';
import UIContext from '../../../store/ui-context';

const Header = () => {
  const UICtx = useContext(UIContext);
  const [showAuth, setShowAuth] = useState(false);

  const showAuthModal = () => {
    setShowAuth(true);

    if (typeof window != 'undefined' && window.document)
      document.body.style.overflow = 'hidden';
  };

  const hideAuthModal = () => {
    setShowAuth(false);

    document.body.style.overflow = 'unset';
  };
  const styles = `${classes.header}`;
  return (
    <header className={styles}>
      {UICtx.modal && <Auth onClose={UICtx.closeModal} />}

      <NavLink to="/" className={classes.logo}>
        Tours.
      </NavLink>
      <Navigation onShowAuth={UICtx.openModal} />
    </header>
  );
};

export default Header;
