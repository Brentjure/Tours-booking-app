import { Fragment, useContext } from 'react';
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Account from './pages/Account';
import Home, { loader as toursLoader } from './pages/Home';
import AccountSettings from './components/Account/Contents/Settings/AccountSettings';
import TourSettings from './components/Account/Contents/ToursSettings/NewTour';
import ManageToursRoot from './pages/ManageToursRoot';
import AllTours from './components/Account/Contents/ToursSettings/AllTours';
import NewTour from './components/Account/Contents/ToursSettings/NewTour';
import EditTour, {
  loader as tourLoader,
} from './components/Account/Contents/ToursSettings/EditTour';
import TourDetail, { loader as tourDetailLoader } from './pages/TourDetail';
import AuthContext from './store/auth-context';
import RootLayout from './pages/RootLayout';
import ToursPage from './pages/Tours';
import ManageUsers from './components/Account/Contents/ManageUsers/ManageUser';
import MyBookings from './components/Account/Contents/MyBookings/MyBokings';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home />, loader: toursLoader },
      { path: '/', loader: toursLoader, children: [] },
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
          { path: 'my-bookings', element: <MyBookings /> },
          { path: 'manage-users', element: <ManageUsers /> },
          {
            path: 'manage-tours',
            element: <ManageToursRoot />,

            children: [
              {
                index: true,
                element: <AllTours />,
              },
              {
                path: 'all-tours',
                element: <AllTours />,
                // children: [{ path: ':Id', element: <EditTour /> }],
              },

              { path: 'new-tour', element: <NewTour /> },
              {
                path: ':Id',
                element: <EditTour />,
                loader: tourLoader,
              },
            ],
          },
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
