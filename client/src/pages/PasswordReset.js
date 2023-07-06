import ResetPassword from '../components/Auth/ResetPassword';
import UIContext from '../store/ui-context';
import { useContext } from 'react';
import { redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import useHttps from '../hooks/use-https';
import { resetPassword } from '../lib/api';

const PasswordReset = () => {
  const uiCtx = useContext(UIContext);
  const { sendRequest, status, data, error } = useHttps(resetPassword, false);

  const { token } = useParams();

  if (status === 'completed' && data) {
    uiCtx.showNotification({
      status: 'success',
      message: 'Your password has been reset!',
    });
  }

  if (status === 'error' && data) {
    uiCtx.showNotification({
      status: 'error',
      message: error.message,
    });
  }

  const resetPasswordHandler = (data) => {
    sendRequest({ data, token });
    redirect('/');
  };

  return (
    <>
      <ResetPassword
        resetPassword={resetPasswordHandler}
        status={status}
        error={error}
      />
    </>
  );
};

export default PasswordReset;
