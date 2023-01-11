import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
//
import { dispatch } from '../store';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  data: {},
  succMsg: null,
  errMsg: null,
};

const slice = createSlice({
  name: 'profileUpdate',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
      state.data = {};
      state.succMsg = null;
      state.errMsg = null;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.errMsg = action.payload;
    },

    // UPDATE PROFILE
    profileUpdateSuccess(state, action) {
      state.isLoading = false;
      state.succMsg = action.payload.mes;
      state.data = action.payload.data;
    },

    // UPDATE PASSWORD
    passwordUpdateSuccess(state, action) {
      state.isLoading = false;
      state.succMsg = action.payload.mes;
    },
  },
});

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------

export function updateProfile(newEvent) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.put(`/api/dealers/profile/${newEvent.id}`, newEvent);
      if (response.data.status === 1) {
        dispatch(slice.actions.profileUpdateSuccess({ mes: response.data.message, data: response.data.data }));
      } else {
        dispatch(slice.actions.hasError(response.data.message));
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function updatePassword(userid, udata) {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.put(`/api/dealers/password/${userid}`, udata);
      if (response.data.status === 1) {
        dispatch(slice.actions.passwordUpdateSuccess({ mes: response.data.message }));
      } else {
        dispatch(slice.actions.hasError(response.data.message));
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
