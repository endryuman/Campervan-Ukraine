import { createSlice } from '@reduxjs/toolkit';
import {
  getAdvertsThunk,
  addAdvertThunk,
  deleteAdvertThunk,
  updateAdvertThunk,
} from './operations';

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.adverts.push(action.payload);
  state.error = '';
};

const handleFulfilledDel = (state, { payload }) => {
  state.isLoading = false;
  state.adverts = state.Advert.filter(el => el._id !== payload?._id);
  state.error = '';
};

const handleFulfilledUpd = (state, { payload }) => {
  state.isLoading = false;
  state.adverts = state.adverts.map(advert =>
    advert._id === payload._id ? { ...advert, ...payload } : advert
  );
};

export const AdvertSlice = createSlice({
  name: 'adverts',
  initialState: {
    adverts: [],
    isLoading: false,
    error: '',
    filters: {},
  },
  reducers: {
    setFilter: (state, { payload }) => {
      state.filters = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdvertsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.adverts = payload;
        state.error = '';
      })
      .addCase(addAdvertThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteAdvertThunk.fulfilled, handleFulfilledDel)
      .addCase(updateAdvertThunk.fulfilled, handleFulfilledUpd)
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

export const { setFilter } = AdvertSlice.actions;
