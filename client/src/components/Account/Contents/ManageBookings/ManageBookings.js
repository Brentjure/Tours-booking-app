import { useEffect, useState, useContext } from 'react';
import AuthContext from '../../../../store/auth-context';
import UIContext from '../../../../store/ui-context';
import { getAllBookings, deleteBooking } from '../../../../lib/api';

import classes from './ManageBookings.module.css';

const ManageBookings = () => {
  const [mybookings, setMyBookings] = useState();

  const UICtx = useContext(UIContext);
  const user = useContext(AuthContext).user;
  const token = user.token;

  useEffect(() => {
    const fetchMyBookings = async () => {
      const bookings = await getAllBookings({ token });
      setMyBookings(bookings);
    };
    fetchMyBookings();
  }, [token]);

  const deleteBookingHandler = async (reviewId) => {
    try {
      await deleteBooking({ reviewId, token });
      UICtx.showNotification({
        status: 'success',
        message: 'Review deleted successfully!',
      });
    } catch (error) {
      UICtx.showNotification({
        status: 'error',
        message: 'Couldnot delete review',
      });
    }
  };
  return (
    <>
      <h1> My Bookings</h1>
      <table className={classes.table}>
        <tbody>
          <tr className={classes.rows}>
            <th className={classes.headings}>Tour</th>
            <th className={classes.headings}>User</th>
            <th className={classes.headings}>Date</th>
            <th className={classes.headings}>Amount</th>
            <th className={classes.headings}>Status</th>
          </tr>
          {mybookings &&
            mybookings.map((booking, i) => {
              const date = new Date(booking.createdAt);
              const getYear = date.toLocaleString('default', {
                year: 'numeric',
              });
              const getMonth = date.toLocaleString('default', {
                month: '2-digit',
              });
              const getDay = date.toLocaleString('default', { day: '2-digit' });
              const dateFormat = getDay + '-' + getMonth + '-' + getYear;

              return (
                <tr className={classes.rows} key={i}>
                  <td>{booking.tour.name}</td>
                  <td>{booking.user.name}</td>
                  <td>{dateFormat}</td>
                  <td>{booking.price}</td>
                  <td>
                    <div
                      className={classes.action}
                      onClick={(e) => {
                        deleteBookingHandler(booking.id);
                      }}
                    >
                      <ion-icon
                        className={classes.icon}
                        size="meduim"
                        name="trash-outline"
                      ></ion-icon>
                      <p>Delete</p>
                    </div>
                  </td>
                </tr>
              );
            })}
          {!mybookings && (
            <tr>
              <td>No document found....</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ManageBookings;
