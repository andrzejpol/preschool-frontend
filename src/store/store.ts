import {configureStore} from '@reduxjs/toolkit';
import allTeachersReducer from '../slices/allTeachersSlice';
import addTeacherModalReducer from '../slices/addTeacherModalSlice';

const store = configureStore({
  reducer: {
    allTeachers: allTeachersReducer,
    addTeacherModal: addTeacherModalReducer,
  },
});

export default store;