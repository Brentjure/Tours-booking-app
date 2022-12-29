import { Fragment } from 'react';

import classes from './AccountSettings.module.css';
import AccountsSettingsForm from './AccSettingsForm';
import PasswordChangeForm from './PasswordChangeForm';

const AccountSettings = (props) => {
  return (
    <Fragment>
      <p className="subheading content-heading">Your Account Settings</p>
      <div className={classes.form_container}>
        <AccountsSettingsForm />
      </div>
      <p className="subheading content-heading">Your Account Settings</p>
      <div className={classes.form_container}>
        <PasswordChangeForm />
      </div>
    </Fragment>
  );
};

export default AccountSettings;
