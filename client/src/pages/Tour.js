import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import useHttps from '../hooks/use-https';
import { getTour } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Layout from '../components/Layout/Layout';
import TourDetails from '../components/TourDetail/TourDetails';

const Tour = (props) => {
  const params = useParams();

  const { data: tour, error, status, sendRequest } = useHttps(getTour, true);

  const { tourId } = params;

  useEffect(() => {
    sendRequest(tourId);
  }, [sendRequest, tourId]);

  console.log(tour);

  let content;
  if (status === 'pending') content = <LoadingSpinner />;
  if (error) content = <p className="heading-primary">{error}</p>;
  if (tour) content = <TourDetails tour={tour} />;

  return <Layout>{content}</Layout>;
};

export default Tour;
