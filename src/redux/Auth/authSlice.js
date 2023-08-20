import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { register, login, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleFulfilledRegister = (state, action) => {
  toast.success(`You have successfully registered`);
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogin = (state, action) => {
  toast.success(`You have successfully logged in`);
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogOut = (state, action) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handlePendingRefresh = (state, action) => {
  state.isRefreshing = true;
};

const handleFulfilledRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRejectedRefresh = (state, action) => {
  state.isRefreshing = false;
};

const handleRejectedRegisterAndLogin = (state, action) => {
  toast.error(action.payload);
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(login.fulfilled, handleFulfilledLogin)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addMatcher(
        isAnyOf(register.rejected, login.rejected),
        handleRejectedRegisterAndLogin
      );
  },
});

export const authReducer = authSlice.reducer;