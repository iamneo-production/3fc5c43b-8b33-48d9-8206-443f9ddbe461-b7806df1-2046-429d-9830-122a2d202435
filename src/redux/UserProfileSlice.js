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
        state.user=[
          ...state.user,
          {name:action.payload.name,email:action.payload.email,phno:action.payload.phno}
        ]
    }
  },
});

export const { updateUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;

