import { Fragment } from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
export default Layout;
