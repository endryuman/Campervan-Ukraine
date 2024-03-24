import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts } from 'services/advertsApi';

export const getAdvertsThunk = createAsyncThunk(
  'adverts/getAdverts',
  async () => {
    return await getAdverts();
  }
);
