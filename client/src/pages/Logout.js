import { redirect } from 'react-router-dom';

export const action = () => {
  localStorage.remove('user');
  return redirect('/');
};
