import { Fragment, useContext } from 'react';
import TourForm from './TourForm';
import { addTour } from '../../../../lib/api';
import UIContext from '../../../../store/ui-context';
import AuthContext from '../../../../store/auth-context';

const NewTour = (props) => {
  const UICtx = useContext(UIContext);
  const token = useContext(AuthContext).user.token;

  const createTour = async (data) => {
    try {
      const newTour = await addTour({ data, token });
      if (newTour.status === 'success')
        UICtx.showNotification({
          status: 'success',
          message: 'Tour created successfully!',
        });
    } catch (error) {
      UICtx.showNotification({
        status: 'error',
        message: error.message,
      });
    }
  };

  return (
    <Fragment>
      <TourForm createTour={createTour} />
    </Fragment>
  );
};

export default NewTour;
