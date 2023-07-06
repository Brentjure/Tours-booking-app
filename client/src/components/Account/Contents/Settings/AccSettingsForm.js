import { useState } from 'react';

import classes from './AccountSettingsForm.module.css';

const AccountsSettingsForm = ({ user, editUser }) => {
  const [enteredName, setEnteredName] = useState(user.name);
  const [enteredEmail, setEnteredEmail] = useState(user.email);
  const [enteredImage, setEnteredImage] = useState(user.photo);

  const submitFormHandler = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', enteredName);
    form.append('email', enteredEmail);
    form.append('photo', enteredImage);

    editUser(form);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          defaultValue={user.name}
          onChange={(e) => {
            setEnteredName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          defaultValue={user.email}
          onChange={(e) => {
            setEnteredEmail(e.target.value);
          }}
        />
      </div>
      <div className={classes.photo_upload}>
        <img
          className={classes.form_user_img}
          src={`https://tours-booking-app-api.onrender.com/images/users/${user.photo}`}
          alt="User "
        />
        <input
          className={classes.form_upload}
          type="file"
          // accept="image/*"
          id="photo"
          name="photo"
          onChange={(e) => {
            setEnteredImage(e.target.files[0]);
          }}
        />
        <label htmlFor="photo">Choose new photo</label>
      </div>
      <div className={classes.btn_form}>
        <button className="button">Save settings</button>
      </div>
    </form>
  );
};

export default AccountsSettingsForm;
