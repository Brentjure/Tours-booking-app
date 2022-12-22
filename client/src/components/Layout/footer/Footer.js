import LogoCol from './LogoCol';
import AddressCol from './AddressCol';
import NavCol from './Navcol';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container_footer}>
        <LogoCol />
        <AddressCol />
        <NavCol />
        <NavCol />
        <NavCol />
      </div>
    </footer>
  );
};

export default Footer;
