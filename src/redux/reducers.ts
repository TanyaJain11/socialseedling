// reducers.js
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});


export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = apiSlice.actions;


export default apiSlice.reducer;
