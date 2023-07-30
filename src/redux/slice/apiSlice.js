import { createSlice } from '@reduxjs/toolkit';
import { fetchUserPhotos } from '../../app/utils/unsplashApi';

export const fetchUserPhotosAndCache = (username) => async (dispatch) => {
  try {
    dispatch(apiStart()); 
    const response = await fetchUserPhotos(username);
    dispatch(apiSuccess(response)); 
  } catch (error) {
    dispatch(apiFailure(error.message)); 
  }
};

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: null, 
    loading: false,
    error: '',
  },
  reducers: {
    apiStart: (state) => {
      state.loading = true;
      state.error = '';
    },
    apiSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    apiFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { apiStart, apiSuccess, apiFailure } = apiSlice.actions;
export default apiSlice.reducer;
