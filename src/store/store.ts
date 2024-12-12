import {configureStore} from '@reduxjs/toolkit';
import allTeachersReducer from '../slices/allTeachersSlice';

const store = configureStore({
  reducer: {
    allTeachers: allTeachersReducer,
  },
});

export default store;