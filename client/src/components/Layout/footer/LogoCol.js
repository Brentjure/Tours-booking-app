import classes from './LogoCol.module.css';

const LogoCol = () => {
  return (
    <div className={classes.logo_col}>
      <a href="#" className={classes.footer_logo}>
        <p className={classes.logo}>Tours</p>
      </a>
      <ul className={classes.social_links}>
        <li>
          <a className={classes.footer_link} href="#">
            <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a className={classes.footer_link} href="#">
            <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a className={classes.footer_link} href="#">
            <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
          </a>
        </li>
      </ul>
      <p className={classes.copyright}>
        copyright &copy; <span className={classes.year}>2022</span> by Brent
        Otieno, Inc. All right reserved
      </p>
    </div>
  );
};

export default LogoCol;
