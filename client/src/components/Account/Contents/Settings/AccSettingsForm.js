import classes from './AccountSettingsForm.module.css';
import userImg from '../../../../images/user-14.jpg';

const AccountsSettingsForm = (props) => {
  const btn = `btn ${classes.btn_form}`;
  return (
    <form className={classes.form} action="">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Brent Otieno" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="me@exmple.com" />
      </div>
      <div className={classes.photo_upload}>
        <img className={classes.form_user_img} src={userImg} alt="User " />
        <input
          className={classes.form_upload}
          type="file"
          accept="image/*"
          id="photo"
          name="photo"
        />
        <label htmlFor="photo">Choose new photo</label>
      </div>
      <div className={classes.btn_form}>
        <button className={btn}>Save settings</button>
      </div>
    </form>
  );
};

export default AccountsSettingsForm;
