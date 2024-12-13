import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  groups: [],
};

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state, action) => {
      state.groups.push(action.payload);
    },
    removeGroup: (state, action) => {
      state.groups = state.groups.filter(
        (group) => group.id !== action.payload
      );
    },
    updateGroup: (state, action) => {
      const index = state.groups.findIndex(
        (group) => group.id === action.payload.id
      )
      if (index !== -1) {
        state.groups[index] = action.payload;
      }
    },
  },
});

export const {addGroup, removeGroup, updateGroup} = groupsSlice.actions;
export default groupsSlice.reducer;
