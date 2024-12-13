import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  parents: [],
};

const allParentsSlice = createSlice({
  name: 'allParents',
  initialState,
  reducers: {
    addParent: (state, action) => {
      state.parents.push(action.payload);
    },
    removeParent: (state, action) => {
      state.parents = state.parents.filter(
        (parent) => parent.id !== action.payload
      );
    },
    updateParent: (state, action) => {
      const index = state.parents.findIndex(
        (parent) => parent.id === action.payload.id
      );
      if (index !== -1) {
        state.parents[index] = action.payload;
      }
    },
  },
});

export const {addParent, removeParent, updateParent} = allParentsSlice.actions;
export default allParentsSlice.reducer;
