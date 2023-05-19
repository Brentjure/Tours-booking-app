import { Fragment, useContext } from 'react';
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Account from './pages/Account';
import Home, { loader as toursLoader } from './pages/Home';
import AccountSettings from './components/Account/Contents/Settings/AccountSettings';
import TourSettings from './components/Account/Contents/ToursSettings/TourSettings';
import TourDetail, { loader as tourDetailLoader } from './pages/TourDetail';
import AuthContext from './store/auth-context';
import RootLayout from './pages/RootLayout';
import ToursPage from './pages/Tours';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />, loader: toursLoader },
      {
        path: 'tours',
        // element: <Navigate to="/" />,
        loader: toursLoader,
        children: [
          {
            path: ':tourId',
            id: 'tour-detail',
            element: <TourDetail />,
            loader: tourDetailLoader,
          },
        ],
      },
      {
        path: 'account',
        element: <Account />,
        children: [
          { index: true, element: <AccountSettings /> },
          { path: 'settings', element: <AccountSettings /> },
          { path: 'manage-tours', element: <TourSettings /> },
          // { index: true, element: <AccountSettings /> }
        ],
      },
    ],
  },
]);

const App = () => {
  const authCtx = useContext(AuthContext);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

// <Fragment>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/tours" element={<Navigate to="/" />} />
//     <Route path="/tours/:tourId" element={<TourDetails />} />
//     {authCtx.isLoggedIn && (
//       <Route path="/account/*" element={<Account />}>
//         <Route path="settings" element={<AccountSettings />} />
//         <Route path="manage-tours" element={<TourSettings />} />
//       </Route>
//     )}
//     {/* <Route path="*" element={<TourDetails />} /> */}
//   </Routes>
// </Fragment>
