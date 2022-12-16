import Navigation from './Navigation';
import classes from './Header.module.css';

const Header = () => {
  const styles = `${classes.header} `;
  return (
    <header className={styles}>
      <div className={classes.logo}>Tours.</div>
      <Navigation />
    </header>
  );
};

export default Header;
