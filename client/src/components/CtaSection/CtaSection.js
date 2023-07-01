import Cta from './Cta';
import classes from './CtaSection.module.css';

const CtaSection = () => {
  return (
    <section className={classes.section_cta} id="cta">
      <div className="container">
        <Cta />
      </div>
    </section>
  );
};

export default CtaSection;
