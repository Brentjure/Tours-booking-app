import React, { Suspense } from 'react';
import { defer, Await, useRouteLoaderData } from 'react-router-dom';

import { getTour } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import Tour from '../components/TourDetail/Tour';
import { getReviewsOnTour } from '../lib/api';

const TourDetails = () => {
  const { tour, reviews } = useRouteLoaderData('tour-detail');

  console.log(reviews);

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
          {(loadedTour) => <Tour tour={loadedTour} reviews={reviews} />}
        </Await>
      </Suspense>
    </>
  );
};

export default TourDetails;

export const loader = async ({ request, params }) => {
  const tourId = params.tourId;

  return defer({
    tour: getTour(tourId),
    reviews: await getReviewsOnTour({ tourId }),
  });
};
