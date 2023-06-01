import { Outlet } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import ManageToursNav from '../components/Account/Contents/ToursSettings/ManageToursNav';

const ManageToursRoot = () => {
  return (
    <>
      <ManageToursNav />
      <Outlet />
    </>
  );
};

export default ManageToursRoot;
