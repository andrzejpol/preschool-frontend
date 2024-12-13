import {configureStore} from '@reduxjs/toolkit';
import allTeachersReducer from '../slices/allTeachersSlice';
import addTeacherModalReducer from '../slices/addTeacherModalSlice';
import allStudentsReducer from "../slices/allStudentsSlice.ts";
import allParentsReducer from "../slices/allParentsSlice.ts";
import eventsSliceReducer from "../slices/eventsSlice.ts";
import groupsSliceReducer from "../slices/groupsSlice.ts";

const store = configureStore({
  reducer: {
    allTeachers: allTeachersReducer,
    addTeacherModal: addTeacherModalReducer,
    allStudents: allStudentsReducer,
    allParents: allParentsReducer,
    events: eventsSliceReducer,
    groups: groupsSliceReducer
  },
});

export default store;