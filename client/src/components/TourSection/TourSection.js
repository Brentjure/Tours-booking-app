import FilterContainer from './FilterContainer';
import Tour from './Tour';
import classes from './TourSection.module.css';

const TourSection = () => {
  return (
    <section className={classes['section-tours']}>
      <div class="container center-text">
        <span class="subheading">Tours</span>
        <h2 class="heading-secondary">Exciting tours for adventures people.</h2>
        {/* <FilterContainer /> */}
      </div>
      <div className={classes.tours}>
        <Tour />
        <Tour />
        <Tour />
      </div>
      <div className={classes.all_tours}>
        <a href="#" className={classes.link}>
          See all tours &rarr;
        </a>
      </div>
    </section>
  );
};

export default TourSection;
