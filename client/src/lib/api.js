import { json } from 'react-router-dom';

const api_DOMAIN = `https://tours-booking-app-api.onrender.com/api/v1`;

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

  if (!response.ok) {
    const data = await response.json();
    let errorMessage = 'Authentication Failed. Please try again!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  const data = await response.json();

  return data;
};
export const signUp = async (requestData) => {
  const response = await fetch(`${api_DOMAIN}/users/signup`, {
    method: 'POST',
    body: JSON.stringify({
      name: requestData.name,
      email: requestData.email,
      password: requestData.password,
      passwordConfirm: requestData.passwordConfirm,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const data = await response.json();
    let errorMessage = 'Sign up Failed';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }
  const data = await response.json();

  return data;
};

export const getAllUsers = async (requestData) => {
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

export const forgotPassword = async (email) => {
  const response = await fetch(`${api_DOMAIN}/users/forgotPassword`, {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    let errorMessage = 'Could not send token!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  return data;
};
export const resetPassword = async (requestData) => {
  const response = await fetch(
    `${api_DOMAIN}/users/resetPassword/${requestData.token}`,
    {
      method: 'PATCH',
      body: JSON.stringify(requestData.data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    let errorMessage = 'Could not reset Password!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  return data;
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

  if (!response.ok) {
    let errorMessage = 'Could not create tour!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  return data;
};

export const updateMe = async (userData, token, type) => {
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

export const getAllReviews = async (query = '') => {
  const response = await fetch(`${api_DOMAIN}/reviews?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    let errorMessage = 'Couldnot fetch users!!!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  const reviews = await data.data.data;

  return reviews;
};

export const deleteReview = async ({ reviewId, token }) => {
  const response = await fetch(`${api_DOMAIN}/reviews/${reviewId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token} `,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    let errorMessage = 'Couldnot delete review!!!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  const reviews = await data.data.data;

  return reviews;
};

export const getReviewsOnTour = async ({ query = '', tourId }) => {
  const response = await fetch(
    `${api_DOMAIN}/tours/${tourId}/reviews?${query}`
  );
  const data = await response.json();

  if (!response.ok) {
    let errorMessage = 'Couldnot fetch reviews!!!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  const reviews = await data.data.data;

  return reviews;
};

export const getAllBookings = async ({ query = '', token }) => {
  const response = await fetch(`${api_DOMAIN}/bookings?${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token} `,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    let errorMessage = 'Couldnot fetch users!!!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  const bookings = await data.data.data;

  return bookings;
};

export const deleteBooking = async ({ reviewId, token }) => {
  const response = await fetch(`${api_DOMAIN}/reviews/${reviewId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token} `,
    },
  });
  const data = await response.json();

  if (!response.ok) {
    let errorMessage = 'Couldnot delete booking!!!';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  const booking = await data.data.data;

  return booking;
};
