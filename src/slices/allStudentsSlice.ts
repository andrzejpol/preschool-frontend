import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  students: [],
};

const allStudentsSlice = createSlice({
  name: 'allStudents',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload
      );
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
  },
});

export const {addStudent, removeStudent, updateStudent} = allStudentsSlice.actions;
export default allStudentsSlice.reducer;
