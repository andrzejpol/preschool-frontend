import {configureStore} from '@reduxjs/toolkit';
import allTeachersReducer from '../slices/allTeachersSlice';
import modalsReducer from '../slices/modalsSlice.ts';
import allStudentsReducer from "../slices/allStudentsSlice.ts";
import allParentsReducer from "../slices/allParentsSlice.ts";
import eventsSliceReducer from "../slices/eventsSlice.ts";
import groupsSliceReducer from "../slices/groupsSlice.ts";
import loaderSliceReducer from "../slices/loaderSlice.ts";

const store = configureStore({
  reducer: {
    allTeachers: allTeachersReducer,
    modals: modalsReducer,
    allStudents: allStudentsReducer,
    allParents: allParentsReducer,
    events: eventsSliceReducer,
    groups: groupsSliceReducer,
    loaders: loaderSliceReducer,
  },
});

export default store;