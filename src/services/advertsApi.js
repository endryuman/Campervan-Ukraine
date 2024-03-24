import axios from 'axios';

export const getAdverts = async () => {
  const response = await axios.get(
    'https://657d99183e3f5b189462cbc2.mockapi.io/adverts'
  );
  return response.data;
};
