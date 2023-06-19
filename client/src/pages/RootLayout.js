import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/footer/Footer';
import Header from '../components/Layout/header/Header';
import Notification from '../components/UI/Notification';
import UIContext from '../store/ui-context';

const RootLayout = () => {
  const UICtx = useContext(UIContext);

  return (
    <>
      <Header />
      {UICtx.notification && (
        <Notification
          status={UICtx.notification.status}
          message={UICtx.notification.message}
        />
      )}
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
