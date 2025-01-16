import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  addTeacherModal: {
    isOpen: false,
  },
  addEventModal: {
    isOpen: false,
  },
  addStudentModal: {
    isOpen: false,
  },
  addParentModal: {
    isOpen: false,
  },
  addGroupModal: {
    isOpen: false,
  },
  addOpinionModal: {
    isOpen: false,
  }
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const {modalName} = action.payload;
      if (state[modalName]) {
        state[modalName].isOpen = true;
      }
    },
    closeModal: (state, action) => {
      const {modalName} = action.payload;
      if (state[modalName]) {
        state[modalName].isOpen = false;
      }
    }
  }
});

export const {openModal, closeModal} = modalsSlice.actions;
export default modalsSlice.reducer;