import { useContext } from 'react';
import classes from './Notification.module.css';
import UIContext from '../../store/ui-context';

const Notification = (props) => {
  const UICtx = useContext(UIContext);
  let specialClasses = '';

  if (props.status === 'error') specialClasses = classes.error;
  if (props.status === 'success') specialClasses = classes.success;

  const cssClasses = `${classes.notification} ${specialClasses}`;
  return (
    <section className={cssClasses}>
      <ion-icon
        size="large"
        className={classes.icon}
        name={`${
          props.status === 'success'
            ? 'checkmark-circle-outline'
            : 'alert-circle-outline'
        }`}
      ></ion-icon>
      <p className={classes.message}>{props.message}</p>
      <ion-icon
        size="large"
        className={classes.icon}
        name="close-outline"
        onClick={UICtx.closeNotification}
      ></ion-icon>
    </section>
  );
};

export default Notification;
