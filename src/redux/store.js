// store.js
import { configureStore } from '@reduxjs/toolkit';
import userProfileReducer from './UserProfileSlice';

const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
  },
});

export default store;
