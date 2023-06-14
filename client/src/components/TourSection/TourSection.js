import { useEffect, useState } from 'react';

import FilterContainer from './FilterContainer';
import Tour from './Tour';
import classes from './TourSection.module.css';
import useHttps from '../../hooks/use-https';
import { getAllTours } from '../../lib/api';

const TourSection = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  const {
    sendRequest,
    status,
    data: loadedTours,
    error,
  } = useHttps(getAllTours, true);

  useEffect(() => {
    let q;
    if (!name && !price) {
      q = '';
    } else {
      q = `search=${name ? name : ''}&price[lte]=${price ? price : ''}`;
    }
    console.log(q);
    sendRequest(q);
  }, [sendRequest, name, price]);

  let content;
  if (status === 'pending')
    content = (
      <div className="centred">
        <p>Loading...</p>
      </div>
    );

  if (error) content = <p className="centered focused">{error}</p>;
  if (status === 'completed' && (!loadedTours || loadedTours.length === 0))
    content = <p>No Tours found</p>;
  if (status === 'completed' && loadedTours)
    content = loadedTours.map((el, index) => <Tour key={index} details={el} />);

  return (
    <section className={classes['section-tours']}>
      <div class="container center-text">
        <span class="subheading">Tours</span>
        <h2 class="heading-secondary">Exciting tours for adventures people.</h2>
        {/* <FilterContainer filterTours={filterTours} status={status} /> */}
        <div className={classes.form}>
          <div>
            <label htmlFor="name">Search your Tour:</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Where are you going?"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="price">What's your budget? (Max-price):</label>
            <input
              type="Number"
              name=""
              id="price"
              placeholder="What's your budget? (Max-price)"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.tours}>{content}</div>
    </section>
  );
};

export default TourSection;
