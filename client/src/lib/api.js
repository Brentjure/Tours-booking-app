const api_DOMAIN = `http://127.0.0.1:8000/api/v1`;

export const getAll = async () => {
  const response = await fetch(`${api_DOMAIN}/tours`);
  const data = await response.json();
  console.log(data);

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
  const data = await response.json();

  if (!response.ok) {
    const data = await response.json();
    let errorMessage = 'Could not fetch data';
    if (data && data.error && data.message) errorMessage = data.message;

    throw new Error(errorMessage);
  }

  return data.data.data;
};
