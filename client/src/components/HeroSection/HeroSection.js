import classes from './HeroSection.module.css';
import heroImg from '../../images/hero-3.jpg';

const HeroSection = (props) => {
  return (
    <section className={classes['section-hero']}>
      <div className={classes.hero}>
        <div className={classes['hero-section-img-container']}>
          <img
            className={classes['hero-img']}
            src={heroImg}
            alt="beach party"
          />
        </div>
        <div className={classes['hero-content']}>
          <div className={classes['content-container']}>
            <p className={classes['heading-primary']}>
              Live adventures you've never had!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
