import React, { Fragment } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import Reviews from './Reviews';
import BookingCard from './BookingCard';
import classes from './TourDetails.module.css';
import userImg from '../../images/user-14.jpg';

const TourDetails = (props) => {
  console.log(props);
  console.log({
    price: props.tour.price,
    averageRatings: props.tour.averageRatings,
    ratingsQuantity: props.tour.ratingsQuantity,
  });

  return (
    <Fragment>
      <section className={classes['section-hero']}>
        <div className={classes.hero}>
          <div className={classes['hero-section-img-container']}>
            <img
              className={classes['hero-img']}
              src={`http://127.0.0.1:8000/images/tours/${props.tour.imageCover}`}
              alt="beach party"
            />
          </div>
          <div className={classes['hero-content']}>
            <div className={classes['content-container']}>
              <p className={classes['heading-primary']}>
                {props.tour.name}: {props.tour.duration}-days tour in
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
                <figure className={classes.tour_guide}>
                  <img
                    className={classes.guide_img}
                    src={userImg}
                    alt="img of a tour a tour guide"
                  />
                  <span className={classes.guide_role}>Lead guide</span>
                  <p className={classes.guide_name}>Steve T Scaife</p>
                </figure>
                <figure className={classes.tour_guide}>
                  <img
                    className={classes.guide_img}
                    src={userImg}
                    alt="img of a tour a tour guide"
                  />
                  <span className={classes.guide_role}>Lead guide</span>
                  <p className={classes.guide_name}>Steve T Scaife</p>
                </figure>
                <figure className={classes.tour_guide}>
                  <img
                    className={classes.guide_img}
                    src={userImg}
                    alt="img of a tour a tour guide"
                  />
                  <span className={classes.guide_role}>Lead guide</span>
                  <p className={classes.guide_name}>Steve T Scaife</p>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BookingCard
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
                    src={`http://127.0.0.1:8000/images/tours/${img}`}
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
          <Reviews />
        </div>
      </section>
    </Fragment>
  );
};

export default TourDetails;
