import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from './Navigation';
import classes from './Header.module.css';
import Auth from '../../Auth/Auth';

const Header = () => {
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
      {showAuth && <Auth onClose={hideAuthModal} />}

      <NavLink to="/" className={classes.logo}>
        Tours.
      </NavLink>
      <Navigation onShowAuth={showAuthModal} />
    </header>
  );
};

export default Header;
