import { useEffect, useState, useContext } from 'react';
import AuthContext from '../../../../store/auth-context';
import { getMyBookings } from '../../../../lib/api';

import classes from './MyBookings.module.css';

const MyBookings = () => {
  const [mybookings, setMyBookings] = useState();

  const user = useContext(AuthContext).user;
  const token = user.token;
  const userId = user.data.user._id;

  useEffect(() => {
    const fetchMyBookings = async () => {
      const bookings = await getMyBookings({ token, userId });
      setMyBookings(bookings);
    };
    fetchMyBookings();
  }, [token, userId]);
  return (
    <>
      <h1> My Bookings</h1>
      <table className={classes.table}>
        <tbody>
          <tr className={classes.rows}>
            <th className={classes.headings}>Tour</th>
            <th className={classes.headings}>Date</th>
            <th className={classes.headings}>Amount</th>
            <th className={classes.headings}>Status</th>
          </tr>
          {mybookings &&
            mybookings.map((booking, i) => (
              <tr className={classes.rows} key={i}>
                <td>{booking.tour.name}</td>
                <td>{booking.createdAt}</td>
                <td>{booking.price}</td>
                <td>{booking.paid ? 'paid' : 'pending'}</td>
              </tr>
            ))}
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

export default MyBookings;
