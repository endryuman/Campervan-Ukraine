import axios from 'axios';

export const getAdverts = async () => {
  const response = await axios.get(
    'https://657d99183e3f5b189462cbc2.mockapi.io/adverts'
  );
  return response.data;
};
export const addAdvert = async data => {
  return await axios.post(
    'https://657d99183e3f5b189462cbc2.mockapi.io/adverts',
    data
  );
};

export const deleteAdvert = async _id => {
  return await axios.delete(
    `https://657d99183e3f5b189462cbc2.mockapi.io/adverts/${_id}`
  );
};

export const updateAdvert = async (_id, data) => {
  return await axios.put(
    `https://657d99183e3f5b189462cbc2.mockapi.io/adverts/${_id}`,
    data
  );
};
// export const updateAdvert = async (_id, data) => {
//   return await axios.put(
//     `https://65fd67169fc4425c6531dbaa.mockapi.io/adverts/${_id}`,
//     data
//   );
// };
