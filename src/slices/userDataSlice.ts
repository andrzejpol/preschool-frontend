import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  userId: '',
  userFirstName: '',
  userRole: ''
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userId = action.payload.userId;
      state.userFirstName = action.payload.userFirstName;
      state.userRole = action.payload.userRole;
    },
    clearUserData: (state) => {
      state.userId = '';
      state.userFirstName = '';
      state.userRole = '';
    }
  }
});

export const {setUserData, clearUserData} = userDataSlice.actions;
export default userDataSlice.reducer;