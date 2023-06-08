import { useState, useEffect, useContext } from 'react';
import Users from './Users';
import { getAllUsers } from '../../../../lib/api';
import AuthContext from '../../../../store/auth-context';

const ManageUsers = () => {
  const [users, setUsers] = useState();
  const [query, setQuery] = useState();
  const token = useContext(AuthContext).user.token;

  useEffect(() => {
    const getUsers = async () => {
      const q = query ? query : '';
      const params = `search=${q}`;
      const loadedUsers = await getAllUsers({ token, params });
      setUsers(loadedUsers);
    };
    getUsers();
  }, [query, token]);
  return (
    <>
      <h1 className="subheading">Manage Users</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Users users={users} />
    </>
  );
};

export default ManageUsers;
