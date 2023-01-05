import { Fragment } from 'react';
import Testimonial from '../TestimonialSection/Testimonial';
import userImg from '../../images/user-14.jpg';
import classes from './Reviews.module.css';

const Reviews = (props) => {
  return (
    <Fragment>
      <span className="heading-tertiary">
        Customer Reviews
        <div className={classes.customer_ratings}>
          <ion-icon name="star-outline"></ion-icon>
          <span>
            <strong> 4.9</strong> ratings (576)
          </span>
        </div>
      </span>

      <div className={classes.reviews}>
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </Fragment>
  );
};

export default Reviews;
