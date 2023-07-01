import { Await, defer, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import HeroSection from '../components/HeroSection/HeroSection';
import TourSection from '../components/TourSection/TourSection';
import TestimonialsSection from '../components/TestimonialSection/TestimonialsSection';
import CtaSection from '../components/CtaSection/CtaSection';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { getAllReviews, getAllTours } from '../lib/api';

const HomePage = () => {
  const { reviews } = useLoaderData();

  return (
    <>
      <HeroSection />
      {/* <Suspense
        fallback={
          <div style={{ textAlign: 'center' }}>
            <LoadingSpinner />
          </div>
        }
      >
        <Await resolve={tours}>
          {(loadedTours) => <TourSection tours={loadedTours} />}
        </Await>
      </Suspense> */}
      <TourSection />

      <TestimonialsSection reviews={reviews} />
      <CtaSection />
    </>
  );
};

export default HomePage;

export const loader = async ({ request, params }) => {
  return defer({
    tours: getAllTours(),
    reviews: await getAllReviews('page=1&limit=4&rating[gte]=4.5'),
  });
};
