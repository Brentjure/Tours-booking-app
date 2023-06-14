import { Await, defer, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

import HeroSection from '../components/HeroSection/HeroSection';
import TourSection from '../components/TourSection/TourSection';
import TestimonialsSection from '../components/TestimonialSection/TestimonialsSection';
import CtaSection from '../components/CtaSection/CtaSection';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { getAllTours } from '../lib/api';

const HomePage = () => {
  const { tours } = useLoaderData();

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

      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;

export const loader = ({ request, params }) => {
  return defer({
    tours: getAllTours(),
  });
};
