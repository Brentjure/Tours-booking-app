import classes from './BookingCard.module.css';

const BookingCard = (props) => {
  const btn = `button ${classes.btn_booking}`;

  return (
    <div className={classes.card}>
      <ul className={classes.info}>
        <li className={classes.tour_attribute}>
          <span>
            $ <strong className={classes.price}>47</strong> / person
          </span>
        </li>
        <li className={classes.tour_attribute}>
          <ion-icon
            className={classes.tour_icon}
            name="star-outline"
          ></ion-icon>
          <span>
            <strong> 4.9</strong> (576)
          </span>
        </li>
      </ul>
      <div className={classes.dates}>
        <div className={classes.container_dates}>
          <div className={classes.start_date}>
            <span>Start Date</span>
            <span>4/5/2023</span>
          </div>
        </div>
        <div className={classes.guests}>Guests</div>
      </div>
      <button className={btn}> Book now For $ 49</button>
      <div>
        <ul className={classes.fees}>
          <li className={classes.fees_attribute}>
            <p>
              <span>$ 49</span> x <span> 1 person</span>
            </p>
            <p>$ 49</p>
          </li>
          <li className={classes.fees_attribute}>
            <span>Service fee</span>
            <span>$ 0</span>
          </li>
        </ul>
        <div className={classes.total}>
          <span>Total</span>
          <span>$ 49</span>
        </div>
      </div>
    </div>
  );
};
export default BookingCard;
