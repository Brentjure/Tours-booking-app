import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/footer/Footer';
import Header from '../components/Layout/header/Header';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
