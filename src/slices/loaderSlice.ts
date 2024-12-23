import {createSlice} from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    globalLoader: false,
    localLoaders: {},
  },
  reducers: {
    showGlobalLoader: (state) => {
      state.globalLoader = true;
    },
    hideGlobalLoader: (state) => {
      state.globalLoader = false;
    },
    showLocalLoader: (state, action) => {
      const id = action.payload;
      state.localLoaders[id] = true;
    },
    hideLocalLoader: (state, action) => {
      const id = action.payload;
      delete state.localLoaders[id];
    },
  },
});

export const {
  showGlobalLoader,
  hideGlobalLoader,
  showLocalLoader,
  hideLocalLoader,
} = loaderSlice.actions;

export default loaderSlice.reducer;
