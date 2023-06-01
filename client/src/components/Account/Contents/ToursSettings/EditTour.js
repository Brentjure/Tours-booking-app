import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import TourForm from './TourForm';
import { getTour } from '../../../../lib/api';

const EditTour = () => {
  const tour = useLoaderData();

  return (
    <>
      <TourForm tour={tour} />
    </>
  );
};

export default EditTour;

export const loader = ({ request, params }) => {
  const tourId = params.Id;

  return getTour(tourId);
};
