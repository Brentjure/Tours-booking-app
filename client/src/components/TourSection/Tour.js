import { Link } from 'react-router-dom';
import classes from './Tour.module.css';

const Tour = (props) => {
  return (
    <div className={classes.tour}>
      <div className={classes['tour-header']}>
        <img
          className={classes['tour-img']}
          src={`https://tours-booking-app-api.onrender.com/images/tours/${props.details.imageCover}`}
          alt="an elephant"
        />
        <div className={classes['tour-heading']}>
          <p className={classes['tour-title']}>{props.details.name}</p>
        </div>
      </div>
      <div className={classes['tour-details']}>
        <div className={classes['tour-content']}>
          <span className={classes['tour-detail']}>
            {props.details.difficulty} {props.details.duration}-day tour
          </span>
          <p className={classes['tour-summary']}>{props.details.summary}</p>
          <ul className={classes['tour-attributes']}>
            <li className={classes['tour-attribute']}>
              <ion-icon
                className={classes['tour-icon']}
                name="location-outline"
              ></ion-icon>
              <span> {props.details.startLocation.description}</span>
            </li>
            <li class={classes['tour-attribute']}>
              <ion-icon
                className={classes['tour-icon']}
                name="calendar-clear-outline"
              ></ion-icon>
              <span> June 2022</span>
            </li>
            <li className={classes['tour-attribute']}>
              <ion-icon
                className={classes['tour-icon']}
                name="flag-outline"
              ></ion-icon>
              <span> {props.details.locations.length} stops</span>
            </li>
            <li className={classes['tour-attribute']}>
              <ion-icon
                className={classes['tour-icon']}
                name="people-outline"
              ></ion-icon>
              <span> {props.details.maxGroupSize} people</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes['tour-footer']}>
        <ul className={classes['footer-details']}>
          <li className={classes['tour-attribute']}>
            <ion-icon
              className={classes['tour-icon']}
              name="star-outline"
            ></ion-icon>
            <span>
              <strong> {props.details.averageRatings}</strong> rating (
              {props.details.ratingsQuantity})
            </span>
          </li>
          <li>
            <span>
              $<strong>{props.details.price}</strong> per person
            </span>
          </li>
        </ul>
        <button className="button">
          <Link
            to={`/tours/${props.details._id}`}
            className={classes.detailsBtn}
          >
            Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Tour;
