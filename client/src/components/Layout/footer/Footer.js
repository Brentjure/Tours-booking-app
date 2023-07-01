import LogoCol from './LogoCol';
import AddressCol from './AddressCol';
import NavCol from './Navcol';
import classes from './Footer.module.css';

const NavColData = [
  {
    title: 'Account',
    navList1: 'Create account',
    navList2: 'Sign in',
    navList3: 'iOS app',
    navList4: 'Android app',
  },
  {
    title: 'Company',
    navList1: 'About brent.Tours',
    navList2: 'For business',
    navList3: 'Patners',
    navList4: 'Careers',
  },
  {
    title: 'Resources',
    navList1: 'Tours directory',
    navList2: 'Help center',
    navList3: 'Privacy & terms',
    navList4: 'Android app',
  },
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container_footer}>
        <LogoCol />
        <AddressCol />
        {NavColData.map((el, i) => (
          <NavCol
            key={i}
            title={el.title}
            navList1={el.navList1}
            navList2={el.navList2}
            navList3={el.navList3}
            navList4={el.navList4}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
