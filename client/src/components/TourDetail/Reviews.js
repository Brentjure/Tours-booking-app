import { Fragment } from 'react';
import Testimonial from '../TestimonialSection/Testimonial';
import userImg from '../../images/user-14.jpg';
import classes from './Reviews.module.css';

const Reviews = ({ reviews, ratingsQuantity, ratings }) => {
  let content;
  if (!reviews) content = <p>No reviews</p>;
  if (reviews)
    content = reviews.map((review, i) => (
      <Testimonial
        key={i}
        photo={review.user.photo}
        rating={review.rating}
        review={review.review}
        name={review.user.name}
      />
    ));
  return (
    <Fragment>
      <span className="heading-tertiary">
        Customer Reviews
        <div className={classes.customer_ratings}>
          <ion-icon name="star-outline"></ion-icon>
          <span>
            <strong> {ratings}</strong> ratings ({ratingsQuantity})
          </span>
        </div>
      </span>

      <div className={classes.reviews}>{content}</div>
    </Fragment>
  );
};

export default Reviews;
