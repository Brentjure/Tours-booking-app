import { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import TourForm from './TourForm';
import { getTour, getAllUsers, updateTour } from '../../../../lib/api';
import AuthContext from '../../../../store/auth-context';
import useHttps from '../../../../hooks/use-https';
import UIContext from '../../../../store/ui-context';

let guidesOptns;
let leadGuidesOptns;

const EditTour = () => {
  const tour = useLoaderData();
  const token = useContext(AuthContext).user.token;
  const uiCtx = useContext(UIContext);

  const [editTourStatus, setEditTourStatus] = useState();

  const navigate = useNavigate();

  const { sendRequest, status, data } = useHttps(getAllUsers, true);
  const {
    sendRequest: sendGuidesRqst,
    status: guidesStatus,
    data: guides,
  } = useHttps(getAllUsers, true);

  useEffect(() => {
    sendRequest({ params: 'role=lead-guide', token });
    sendGuidesRqst({ params: 'role=guide', token });
  }, [token, sendRequest, sendGuidesRqst]);

  if (status === 'completed' && data) {
    leadGuidesOptns = data.map((leaGuide, i) => {
      return { value: leaGuide._id, label: leaGuide.name };
    });
  }
  if (guidesStatus === 'completed' && guides)
    guidesOptns = guides.map((guide, i) => {
      return { value: guide._id, label: guide.name };
    });

  const editTourHandler = async (form) => {
    const tourId = tour._id;
    try {
      setEditTourStatus('pending');
      const newTour = await updateTour({ tourId, token, form });
      if (newTour.status === 'success')
        uiCtx.showNotification({
          status: 'success',
          message: 'Tour updated successfully!',
        });
      navigate('/account/manage-tours/all-tours');
    } catch (error) {
      uiCtx.showNotification({
        status: 'error',
        message: error.message,
      });
    }
    setEditTourStatus('completed');
  };

  return (
    <>
      <TourForm
        tour={tour}
        editStatus={editTourStatus}
        guidesOptns={guidesOptns}
        leadGuidesOptns={leadGuidesOptns}
        editTour={editTourHandler}
      />
    </>
  );
};

export default EditTour;

export const loader = ({ request, params }) => {
  const tourId = params.Id;

  return getTour(tourId);
};
