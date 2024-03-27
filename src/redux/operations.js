import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import {
  getAdverts,
  addAdvert,
  deleteAdvert,
  updateAdvert,
} from 'services/advertsApi';

export const getAdvertsThunk = createAsyncThunk(
  'adverts/getAdverts',
  async () => {
    return await getAdverts();
  }
);

export const addAdvertThunk = createAsyncThunk(
  'adverts/addAdvert',
  async data => {
    const contacts = await addAdvert(data);
    return contacts.data;
  }
);

export const deleteAdvertThunk = createAsyncThunk(
  'adverts/deleteAdvert',
  async id => {
    const contacts = await deleteAdvert(id);
    return contacts.data;
  }
);

export const updateAdvertThunk = createAsyncThunk(
  'adverts/updateAdvert',
  async ({ id, body }) => {
    const advert = await updateAdvert(id, body);
    advert.data.favorite === 'true'
      ? Notify.success(`Item added to favorites list`)
      : Notify.success(`Item removed from favorites list`);
    return advert.data;
  }
);
