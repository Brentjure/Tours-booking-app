import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TourForm from './TourForm';
import { addTour } from '../../../../lib/api';
import UIContext from '../../../../store/ui-context';
import AuthContext from '../../../../store/auth-context';
import { getAllUsers } from '../../../../lib/api';
import { useLoaderData } from 'react-router-dom';

const NewTour = (props) => {
  const UICtx = useContext(UIContext);
  const token = useContext(AuthContext).user.token;

  const navigate = useNavigate();

  const { guides, leadGuides } = useLoaderData();

  const [createTourStatus, setCreateTourStatus] = useState(false);

  const guidesOptns = guides.map((guide, i) => {
    return { value: guide._id, label: guide.name };
  });

  const leadGuidesOptns = leadGuides.map((leaGuide, i) => {
    return { value: leaGuide._id, label: leaGuide.name };
  });

  const createTour = async (data) => {
    try {
      setCreateTourStatus('pending');
      const newTour = await addTour({ data, token });
      if (newTour.status === 'success')
        UICtx.showNotification({
          status: 'success',
          message: 'Tour created successfully!',
        });
      navigate('/account/manage-tours/all-tours');
    } catch (error) {
      UICtx.showNotification({
        status: 'error',
        message: error.message,
      });
    }
    setCreateTourStatus('completed');
  };

  return (
    <Fragment>
      <TourForm
        createTourStatus={createTourStatus}
        createTour={createTour}
        guidesOptns={guidesOptns}
        leadGuidesOptns={leadGuidesOptns}
      />
    </Fragment>
  );
};

export default NewTour;

export const loader = async () => {
  const token = JSON.parse(localStorage.getItem('user')).token;
  return {
    guides: await getAllUsers({ params: 'role=guide', token }),
    leadGuides: await getAllUsers({ params: 'role=lead-guide', token }),
  };
};
