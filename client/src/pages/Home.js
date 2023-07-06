import { Await, defer, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import HeroSection from '../components/HeroSection/HeroSection';
import TourSection from '../components/TourSection/TourSection';
import TestimonialsSection from '../components/TestimonialSection/TestimonialsSection';
import CtaSection from '../components/CtaSection/CtaSection';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { getAllReviews } from '../lib/api';

const HomePage = () => {
  const { reviews } = useLoaderData();

  return (
    <>
      <HeroSection />
      <TourSection />

      <Suspense
        fallback={
          <div style={{ textAlign: 'center' }}>
            <LoadingSpinner />
          </div>
        }
      >
        <Await resolve={reviews}>
          {(loadedReviews) => <TestimonialsSection reviews={loadedReviews} />}
        </Await>
      </Suspense>

      <CtaSection />
    </>
  );
};

export default HomePage;

export const loader = ({ request, params }) => {
  return defer({
    reviews: getAllReviews('page=1&limit=4&rating[gte]=4.5'),
  });
};
