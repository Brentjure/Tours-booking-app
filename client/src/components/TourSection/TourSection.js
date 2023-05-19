import Tour from './Tour';
import classes from './TourSection.module.css';

const TourSection = ({ tours }) => {
  let content;
  if (tours)
    content = tours.map((el, index) => <Tour key={index} details={el} />);

  return (
    <section className={classes['section-tours']}>
      <div class="container center-text">
        <span class="subheading">Tours</span>
        <h2 class="heading-secondary">Exciting tours for adventures people.</h2>
      </div>
      <div className={classes.tours}>{content}</div>
    </section>
  );
};

export default TourSection;
