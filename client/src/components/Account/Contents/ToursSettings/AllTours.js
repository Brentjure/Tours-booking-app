import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import useHttp from '../../../../hooks/use-https';
import classes from './AllTours.module.css';
import { getAllTours } from '../../../../lib/api';

const AllTours = () => {
  const {
    sendRequest,
    status,
    data: loadedTours,
    error,
  } = useHttp(getAllTours, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  let content;

  if (status === 'pending')
    content = (
      <div className="centred">
        <p>Loading</p>
      </div>
    );

  if (error) content = <p className="centered focused">{error}</p>;
  if (status === 'completed' && (!loadedTours || loadedTours.length === 0))
    content = <p>No Tours found</p>;
  if (status === 'completed' && loadedTours)
    content = loadedTours.map((tour, i) => (
      <li key={i} className={classes.item}>
        <img
          src={`https://tours-booking-app-api.onrender.com/images/tours/${tour.imageCover}`}
          alt=""
        />
        <div className={classes.details}>
          <span>{tour.name}</span>
          <span>{tour.summary}</span>
        </div>
        <button className={classes.btn}>
          <Link to={`/account/manage-tours/${tour.id}`}>Edit</Link>
        </button>
      </li>
    ));

  return (
    <div className={classes.tours}>
      <h1>All Tours</h1>
      <ul className={classes.list}>{content}</ul>
    </div>
  );
};

export default AllTours;
