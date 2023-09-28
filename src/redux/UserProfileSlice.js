// userProfileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    updateUserProfile: (state, action) => {
      state.user = action.payload;
    },
    addUserProfile: (state,action)=>{
        state.user=action.payload;
    }
  },
});

export const { updateUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;

