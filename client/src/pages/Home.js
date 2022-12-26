import HeroSection from '../components/HeroSection';
import TourSection from '../components/TourSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Layout from '../components/Layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <TourSection />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;
