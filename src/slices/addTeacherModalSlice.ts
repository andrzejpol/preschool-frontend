import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const addTeacherModalSlice = createSlice({
  name: 'addTeacherModal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    }
  }
});

export const {openModal, closeModal} = addTeacherModalSlice.actions;
export default addTeacherModalSlice.reducer;