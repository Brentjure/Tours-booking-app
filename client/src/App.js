import { Fragment, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import AccountSettings from './components/Account/Contents/Settings/AccountSettings';
import TourSettings from './components/Account/Contents/ToursSettings/TourSettings';
import TourDetails from './pages/Tour';
import AuthContext from './store/auth-context';

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Home />} />
        <Route path="/tours/:slug" element={<TourDetails />} />
        {authCtx.isLoggedIn && (
          <Route path="/account/*" element={<Account />}>
            <Route path="settings" element={<AccountSettings />} />
            <Route path="manage-tours" element={<TourSettings />} />
          </Route>
        )}
        {/* <Route path="*" element={<TourDetails />} /> */}
      </Routes>
    </Fragment>
  );
};

export default App;
