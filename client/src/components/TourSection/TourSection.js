import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useHttps from '../../hooks/use-https';
import { getAll } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import FilterContainer from './FilterContainer';
import Tour from './Tour';
import classes from './TourSection.module.css';

const TourSection = () => {
  const { data: tours, error, status, sendRequest } = useHttps(getAll, true);

  useEffect(() => {
    sendRequest({});
  }, [sendRequest]);

  console.log(tours);

  let content;
  if (status === 'pending') content = <LoadingSpinner />;
  if (error) content = <p className="heading-primary">{error}</p>;
  if (tours)
    content = tours.map((el, index) => <Tour key={index} details={el} />);

  return (
    <section className={classes['section-tours']}>
      <div class="container center-text">
        <span class="subheading">Tours</span>
        <h2 class="heading-secondary">Exciting tours for adventures people.</h2>
        {/* <FilterContainer /> */}
      </div>
      <div className={classes.tours}>{content}</div>
      <div className={classes.all_tours}>
        {/* <Link to="" className={classes.link}>
          See all tours &rarr;
        </Link> */}
      </div>
    </section>
  );
};

export default TourSection;
