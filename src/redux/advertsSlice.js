import { createSlice } from '@reduxjs/toolkit';
import { getAdvertsThunk } from './operations';

export const AdvertSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
        state.error = '';
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, { payload }) => {
          state.error = payload.response.data;
          state.isLoading = false;
        }
      );
  },
});
