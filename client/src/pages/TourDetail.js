import React, { Suspense } from 'react';
import { defer, Await, useRouteLoaderData } from 'react-router-dom';

import { getTour } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Tour from '../components/TourDetail/Tour';

const TourDetails = () => {
  const { tour } = useRouteLoaderData('tour-detail');

  return (
    <>
      <Suspense
        fallback={
          <div style={{ textAlign: 'center' }}>
            <LoadingSpinner />
          </div>
        }
      >
        <Await resolve={tour}>
          {(loadedTour) => <Tour tour={loadedTour} />}
        </Await>
      </Suspense>
    </>
  );
};

export default TourDetails;

export const loader = ({ request, params }) => {
  const tourId = params.tourId;

  return defer({
    tour: getTour(tourId),
  });
};
