import { Fragment, useContext, useState } from 'react';
import AuthContext from '../../../../store/auth-context';
import classes from './AccountSettings.module.css';
import AccountsSettingsForm from './AccSettingsForm';
import PasswordChangeForm from './PasswordChangeForm';
import { updateMe } from '../../../../lib/api';
import UIContext from '../../../../store/ui-context';

const AccountSettings = (props) => {
  const authCtx = useContext(AuthContext);
  const UICtx = useContext(UIContext);
  const user = authCtx.user.data.user;
  const [currentUser, setCurrentUser] = useState(user);

  const token = authCtx.user.token;
  const updateUser = authCtx.editUser;

  const editUserDetails = async (data) => {
    try {
      const updatedUser = await updateMe(data, token, 'edit');
      if (updatedUser.status === 'success') {
        setCurrentUser(updatedUser.data.user);
        const editedUser = { ...updatedUser, token };
        UICtx.showNotification({
          status: 'success',
          message: 'User details updated successfully!',
        });
        updateUser(editedUser);
      }
    } catch (error) {
      console.log(error);
      UICtx.showNotification({
        status: 'error',
        message: error.message,
      });
    }
  };

  const editPassword = async (data) => {
    const updatedUser = await updateMe(data, token, 'password');
    console.log(updateUser);
  };

  return (
    <Fragment>
      <p className="subheading content-heading">Your Account Settings</p>
      <div className={classes.form_container}>
        <AccountsSettingsForm user={currentUser} editUser={editUserDetails} />
      </div>
      <p className="subheading content-heading">Change your Password</p>
      <div className={classes.form_container}>
        <PasswordChangeForm editPassword={editPassword} />
      </div>
    </Fragment>
  );
};

export default AccountSettings;
