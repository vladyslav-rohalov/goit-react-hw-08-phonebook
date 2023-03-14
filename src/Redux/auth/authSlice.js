import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signUp.pending]: handlePending,
    [authOperations.signIn.pending]: handlePending,
    [authOperations.signUp.rejected]: handleRejected,
    [authOperations.signIn.rejected]: handleRejected,
    [authOperations.signUp.fulfilled]: handleFulfilled,
    [authOperations.signIn.fulfilled]: handleFulfilled,
  },
});

export const authReducer = authSlice.reducer;
