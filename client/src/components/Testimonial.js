import classes from './Testimonial.module.css';
import userPhoto from '../images/user-14.jpg';

const Testimonial = () => {
  return (
    <figure className={classes.testimonial}>
      <img className={classes.testimonial_img} src={userPhoto} alt="customer" />
      <blockquote className={classes.testimonial_text}>
        Porttitor ullamcorper rutrum semper proin mus felis varius convallis
        conubia nisl erat lectus eget.
      </blockquote>
      <p className={classes.testimonial_name}>&mdash; Eliana</p>
    </figure>
  );
};

export default Testimonial;
