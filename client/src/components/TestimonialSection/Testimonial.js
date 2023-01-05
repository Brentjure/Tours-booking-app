import classes from './Testimonial.module.css';
import userPhoto from '../../images/user-14.jpg';

const Testimonial = () => {
  return (
    <figure className={classes.testimonial}>
      <img className={classes.testimonial_img} src={userPhoto} alt="customer" />
      <div className={classes.ratings}>
        <ion-icon
          className={classes.rating_icon}
          name="star-outline"
        ></ion-icon>
        <span>
          <strong> 4.9</strong>
        </span>
      </div>
      <blockquote className={classes.testimonial_text}>
        Porttitor ullamcorper rutrum semper proin mus felis varius convallis
        conubia nisl erat lectus eget.
      </blockquote>
      <p className={classes.testimonial_name}>&mdash; Eliana</p>
    </figure>
  );
};

export default Testimonial;
