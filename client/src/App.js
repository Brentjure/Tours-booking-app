import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/Account';
import Home from './pages/Home';
import AccountSettings from './components/Account/Contents/Settings/AccountSettings';
import TourSettings from './components/Account/Contents/ToursSettings/TourSettings';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/*" element={<Account />}>
          <Route path="settings" element={<AccountSettings />} />
          <Route path="manage-tours" element={<TourSettings />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
