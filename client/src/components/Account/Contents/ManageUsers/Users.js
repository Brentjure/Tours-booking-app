import classes from './Users.module.css';

const Users = ({ users }) => {
  return (
    <table className={classes.table}>
      <tbody>
        <tr className={classes.rows}>
          <th className={classes.headings}>Name</th>
          <th className={classes.headings}>Email</th>
          <th className={classes.headings}>Role</th>
        </tr>
        {users &&
          users.map((user, i) => (
            <tr className={classes.rows} key={i}>
              <td className={classes.name}>
                <img
                  className={classes.photo}
                  src={`https://tours-booking-app-api.onrender.com/images/users/${user.photo}`}
                  alt="User "
                />
                <span>{user.name}</span>
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Users;
