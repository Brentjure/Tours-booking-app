import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Account from './pages/Account';
import Home, { loader as toursLoader } from './pages/Home';
import AccountSettings from './components/Account/Contents/Settings/AccountSettings';
import ManageToursRoot from './pages/ManageToursRoot';
import AllTours from './components/Account/Contents/ToursSettings/AllTours';
import NewTour from './components/Account/Contents/ToursSettings/NewTour';
import EditTour, {
  loader as tourLoader,
} from './components/Account/Contents/ToursSettings/EditTour';
import TourDetail, { loader as tourDetailLoader } from './pages/TourDetail';
import RootLayout from './pages/RootLayout';
import ManageUsers from './components/Account/Contents/ManageUsers/ManageUser';
import ManageReviews from './components/Account/Contents/ManageReviews/ManageReviews';
import MyBookings from './components/Account/Contents/MyBookings/MyBokings';
import ErrorPage from './pages/Error';
import { action as logoutAction } from './pages/Logout';

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
            path: 'manage-reviews',
            element: <ManageReviews />,
          },
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
      { path: 'logout', action: logoutAction },
      { path: 'resetPassword/:token', action: logoutAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
