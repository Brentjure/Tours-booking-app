import { Fragment } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

// import Accordion from 'react-bootstrap/Accordion';
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Reviews from './Reviews';
import BookingCard from './BookingCard';
// import Carousel from '../UI/Carousel';
import classes from './TourDetails.module.css';
import tourImg from '../../images/tour-1-1.jpg';
import userImg from '../../images/user-14.jpg';

const TourDetails = (props) => {
  const gallery = [tourImg, tourImg, tourImg];
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
              <p className={classes['heading-primary']}>
                The Forest Hiker: 7-days tour in Mombasa
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
              The Forest Hiker: 7 days tour.
            </span>
            {/* <h2 class="heading-secondary">Exciting tours for adventures people.</h2> */}

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
            <span class="subheading">Tour Overview</span>
            <p>Exploring the jaw-dropping US east coast by foot and by boat</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

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
          <BookingCard />
        </div>
      </section>
      <section>
        <div className="container">
          <span class="heading-tertiary">Tour Gallery</span>
          <div className={classes.carousel}>
            <Carousel infiniteLoop autoPlay>
              {gallery.map((img, index) => (
                <div className={classes.image}>
                  <img src={img} alt="a tour guide" />
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
