import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  errorMessage: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorMessage = '';
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.errorMessage = '';
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.errorMessage = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
