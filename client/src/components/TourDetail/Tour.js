import React, { Fragment, useContext } from 'react';
// import { Stripe } from 'stripe';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Reviews from './Reviews';
import BookingCard from './BookingCard';
import classes from './Tour.module.css';
import AuthContext from '../../store/auth-context';

const Tour = (props) => {
  const authCtx = useContext(AuthContext);

  let token;
  if (authCtx.isLoggedIn) {
    token = authCtx.user.token;
  }

  const bookTour = async () => {
    try {
      // 1) Get checkout session from API
      const stripe = window.Stripe(
        'pk_test_51KhGlaHAWczgrlmq0kCEt8jCslPiXVDchiwSsnxvmK2LoZvI23r7oeKlvpL7zPk5aZ1IXTzC93Od96lyzprMPo0v004kWG8mvg'
      );
      const response = await fetch(
        `https://tours-booking-app-api.onrender.com/api/v1/bookings/checkout-session/${props.tour.id}`,
        {
          method: 'GET',
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token} `,
          },
        }
      );
      const session = await response.json();
      // console.log(sess);

      console.log(session);

      // 2) Create chechoutform, charge credit card
      await stripe.redirectToCheckout({
        sessionId: session.session.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fragment>
      <section className={classes['section-hero']}>
        <div className={classes.hero}>
          <div className={classes['hero-section-img-container']}>
            <img
              className={classes['hero-img']}
              src={`https://tours-booking-app-api.onrender.com/images/tours/${props.tour.imageCover}`}
              alt="beach party"
            />
          </div>
          <div className={classes['hero-content']}>
            <div className={classes['content-container']}>
              <p className={classes['heading-primary']}>
                {props.tour.name}: {props.tour.duration}-days tour,
                {props.tour.startLocation.description}
                {/* {tour.startLocation.description} */}
                {/* Exploring the jaw-dropping US east coast by foot and by boat */}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.content}>
        <div>
          <div className={classes.overview_header}>
            <span class="heading-secondary">
              {props.tour.name}: {props.tour.duration} days tour.
            </span>
            {/* <h2 class="heading-secondary">Exciting tours for adventures people.</h2> */}

            <ul className={classes.details}>
              <li className={classes.tour_attribute}>
                <ion-icon
                  className={classes['tour-icon']}
                  name="people-outline"
                ></ion-icon>
                <span> {props.tour.maxGroupSize} people</span>
              </li>
              <li className={classes.tour_attribute}>
                <ion-icon
                  className={classes['tour-icon']}
                  name="hourglass-outline"
                ></ion-icon>
                <span> {props.tour.duration} days</span>
              </li>
              <li className={classes.tour_attribute}>
                <ion-icon
                  className={classes['tour-icon']}
                  name="flag-outline"
                ></ion-icon>
                <span> {props.tour.locations.length} stops</span>
              </li>
            </ul>
          </div>
          <div className={classes.overview}>
            <span class="subheading">Tour Overview</span>
            <p>{props.tour.summary}</p>
            <p>{props.tour.description}</p>

            <div className={classes.tour_guides}>
              <span class="subheading">tour guides</span>
              <div className={classes.guides_details}>
                {props.tour.guides.map((el, index) => (
                  <figure className={classes.tour_guide}>
                    <img
                      className={classes.guide_img}
                      src={`https://tours-booking-app-api.onrender.com/images/users/${el.photo}`}
                      alt="img of a tour a tour guide"
                    />
                    <span className={classes.guide_role}>{el.role}</span>
                    <p className={classes.guide_name}>{el.name}</p>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <BookingCard
            onClick={bookTour}
            price={props.tour.price}
            averageRatings={props.tour.averageRatings}
            ratingsQuantity={props.tour.ratingsQuantity}
          />
        </div>
      </section>
      <section>
        <div className="container">
          <span class="heading-tertiary">Tour Gallery</span>
          <div className={classes.carousel}>
            <Carousel infiniteLoop autoPlay>
              {props.tour.images.map((img, index) => (
                <div className={classes.image} key={index}>
                  <img
                    src={`https://tours-booking-app-api.onrender.com/images/tours/${img}`}
                    alt="a tour guide"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
      <section className="container">
        <div className={classes.review}>
          <Reviews
            reviews={props.reviews}
            ratings={props.tour.averageRatings}
            ratingsQuantity={props.tour.ratingsQuantity}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Tour;
