import HeroSection from '../components/HeroSection/HeroSection';
import TourSection from '../components/TourSection/TourSection';
import TestimonialsSection from '../components/TestimonialSection/TestimonialsSection';
import CtaSection from '../components/CtaSection/CtaSection';
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
