import { Fragment } from 'react';

import HeroSection from './components/HeroSection';
import TourSection from './components/TourSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <HeroSection />
      <TourSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
}

export default App;
