import { json } from 'react-router-dom';

const api_DOMAIN = `http://127.0.0.1:8000/api/v1`;

export const getAllTours = async (query = '') => {
  const response = await fetch(`${api_DOMAIN}/tours?${query}`);
  const data = await response.json();

  if (!response.ok) {
    const data = await response.json();
    let errorMessage = 'Could not fetch data';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  return data.data.data;
};

export const getTour = async (tourId) => {
  const response = await fetch(`${api_DOMAIN}/tours/${tourId}`);

  if (!response.ok) {
    throw json({ message: 'Could not fetch Tour' }, { status: 500 });
  } else {
    const data = await response.json();
    return data.data.data;
  }
};

export const login = async (requestData) => {
  const response = await fetch(`${api_DOMAIN}/users/login`, {
    method: 'POST',
    body: JSON.stringify({
      email: requestData.email,
      password: requestData.password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await response.json();

  if (!response.ok) {
    const data = await response.json();
    let errorMessage = 'Authentication Failed';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  return data;
};

export const getAllUsers = async (requestData) => {
  console.log(`${api_DOMAIN}/users?${requestData.params}`);
  const response = await fetch(`${api_DOMAIN}/users?${requestData.params}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${requestData.token} `,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    let errorMessage = 'Couldnot fetch users!!!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  const users = await data.data.data;

  return users;
};

export const addTour = async (requestData) => {
  const response = await fetch(`${api_DOMAIN}/tours`, {
    method: 'POST',
    body: requestData.data,
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${requestData.token} `,
    },
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    let errorMessage = 'Could not create tour!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  return data;
};

export const updateTour = async (requestData) => {
  const response = await fetch(`${api_DOMAIN}/tours/${requestData.tourId}`, {
    method: 'PATCH',
    body: requestData.form,
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${requestData.token} `,
    },
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    let errorMessage = 'Could not create tour!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  return data;
};

export const updateMe = async (userData, token, type) => {
  console.log(userData);
  const url =
    type === 'password'
      ? `${api_DOMAIN}/users/updatePassword`
      : `${api_DOMAIN}/users/updateMe`;

  const response = await fetch(url, {
    method: 'PATCH',
    body: userData,
    headers: {
      Authorization: `Bearer ${token} `,
      // 'Content-Type': 'multipart/form-data',
    },
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    let errorMessage = 'Could not create tour!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  return data;
};

export const getMyBookings = async (requestData) => {
  const response = await fetch(
    `${api_DOMAIN}/users/${requestData.userId}/myBookings`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${requestData.token} `,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    let errorMessage = 'Couldnot fetch users!!!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  const bookings = await data.data.data;

  return bookings;
};
