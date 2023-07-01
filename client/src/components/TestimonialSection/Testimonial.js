import classes from './Testimonial.module.css';

const Testimonial = ({ photo, rating, review, name }) => {
  return (
    <figure className={classes.testimonial}>
      <img
        className={classes.testimonial_img}
        src={`https://tours-booking-app-api.onrender.com/images/users/${photo}`}
        alt="customer"
      />
      <div className={classes.ratings}>
        <ion-icon
          className={classes.rating_icon}
          name="star-outline"
        ></ion-icon>
        <span>
          <strong> {rating}</strong>
        </span>
      </div>
      <blockquote className={classes.testimonial_text}>{review}</blockquote>
      <p className={classes.testimonial_name}>&mdash; {name}</p>
    </figure>
  );
};

export default Testimonial;
