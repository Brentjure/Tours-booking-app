import { Fragment } from 'react';
import Accordion from 'react-bootstrap/Accordion';

import classes from './TourDetails.module.css';
import tourImg from '../../images/tour-1-1.jpg';

const TourDetails = (props) => {
  const btn = `btn ${classes.btn_booking}`;
  return (
    <Fragment>
      <section className={classes['section-hero']}>
        <div className={classes.hero}>
          <div className={classes['hero-section-img-container']}>
            <img
              className={classes['hero-img']}
              src={tourImg}
              alt="beach party"
            />
          </div>
          <div className={classes['hero-content']}>
            <div className={classes['content-container']}>
              <p className={classes['heading-primary']}>The Forest Hiker</p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.content}>
        <div>
          <div className={classes.overview_header}>
            <span class="heading-secondary">The Forest Hiker</span>
            <ul className={classes.details}>
              <li className={classes.tour_attribute}>
                <ion-icon
                  className={classes['tour-icon']}
                  name="people-outline"
                ></ion-icon>
                <span> 15 people</span>
              </li>
              <li className={classes.tour_attribute}>
                <ion-icon
                  className={classes['tour-icon']}
                  name="hourglass-outline"
                ></ion-icon>
                <span> 7 days</span>
              </li>
              <li className={classes.tour_attribute}>
                <ion-icon
                  className={classes['tour-icon']}
                  name="flag-outline"
                ></ion-icon>
                <span> 4 stops</span>
              </li>
            </ul>
          </div>
          <div className={classes.overview}>
            <Accordion defaultActiveKey="" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Tour Overview</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <span>QUICK FACTS</span>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
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
      </section>
    </Fragment>
  );
};

export default TourDetails;
