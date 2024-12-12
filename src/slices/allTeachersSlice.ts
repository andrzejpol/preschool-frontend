import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  teachers: [],
};

const allTeachersSlice = createSlice({
  name: 'allTeachers',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },
    removeTeacher: (state, action) => {
      state.teachers = state.teachers.filter(
        (teacher) => teacher.id !== action.payload
      );
    },
    updateTeacher: (state, action) => {
      const index = state.teachers.findIndex(
        (teacher) => teacher.id === action.payload.id
      );
      if (index !== -1) {
        state.teachers[index] = action.payload;
      }
    },
  },
});

export const {addTeacher, removeTeacher, updateTeacher} = allTeachersSlice.actions;
export default allTeachersSlice.reducer;
