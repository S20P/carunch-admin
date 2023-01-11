import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  succMsg: null,
  errMsg: null,
};

const slice = createSlice({
  name: 'orderReport',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
      state.succMisg = null;
      state.errMsg = null;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.errMsg = action.payload;
    },

    // CREATE EVENT
    createOrderReportSuccess(state, action) {
      state.isLoading = false;
      state.succMsg = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function createOrderReport(newEvent) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.post('/api/order_request', newEvent);
      if (response.data.status === 1) {
        dispatch(slice.actions.createOrderReportSuccess(response.data.message));
      } else {
        dispatch(slice.actions.hasError(response.data.message));
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
