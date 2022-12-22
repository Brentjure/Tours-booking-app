import tourphoto from '../images/tour-1-1.jpg';
import classes from './Tour.module.css';

const Tour = () => {
  return (
    <div className={classes.tour}>
      <div className={classes['tour-header']}>
        <img
          className={classes['tour-img']}
          src={tourphoto}
          alt="an elephant"
        />
        <div className={classes['tour-heading']}>
          <p className={classes['tour-title']}>The Sea Explorer</p>
        </div>
      </div>
      <div className={classes['tour-details']}>
        <div className={classes['tour-content']}>
          <span className={classes['tour-detail']}>medium 7-day tour</span>
          <p className={classes['tour-summary']}>
            Exploring the jaw-dropping US east coast by foot and by boat
          </p>
          <ul className={classes['tour-attributes']}>
            <li className={classes['tour-attribute']}>
              <ion-icon
                className={classes['tour-icon']}
                name="location-outline"
              ></ion-icon>
              <span> Miami, USA</span>
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
              <span> 4 stops</span>
            </li>
            <li className={classes['tour-attribute']}>
              <ion-icon
                className={classes['tour-icon']}
                name="people-outline"
              ></ion-icon>
              <span> 15 people</span>
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
              <strong> 4.9</strong> rating (576)
            </span>
          </li>
          <li>
            <span>
              $<strong>47</strong> per person
            </span>
          </li>
        </ul>
        <button className="btn">Details</button>
      </div>
    </div>
  );
};

export default Tour;
