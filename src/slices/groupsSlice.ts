import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import apiClient from "../../apiClient.ts";

const initialState = {
  groups: [],
  status: 'idle',
  error: null,
};

export const addGroupAsync = createAsyncThunk(
  'groups/addGroupAsync',
  async (groupData, {rejectWithValue}) => {
    try {
      const response = await apiClient.post('/groups', groupData);

      return response.data;
    } catch (error) {

      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }

      return rejectWithValue({
        message: 'An unexpected error occurred. Please try again later.',
      });
    }
  }
);


export const removeGroupAsync = createAsyncThunk(
  'groups/removeGroupAsync',
  async (groupId, {rejectWithValue}) => {
    try {
      await apiClient.delete(`/groups/${groupId}`);
      return groupId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const updateGroupAsync = createAsyncThunk(
  'groups/updateGroupAsync',
  async (groupData, {rejectWithValue}) => {
    try {
      const response = await apiClient.put(`/groups/${groupData.id}`, groupData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchGroupsAsync = createAsyncThunk(
  'groups/fetchGroupsAsync',
  async (_, {rejectWithValue}) => {
    try {
      const response = await apiClient.get('/groups');
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({
        message: 'An unexpected error occurred while fetching groups.',
      });
    }
  }
);

// Slice
const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addGroupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addGroupAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.groups.push(action.payload);
      })
      .addCase(addGroupAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })


      .addCase(removeGroupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeGroupAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.groups = state.groups.filter(
          (group) => group.id !== action.payload
        );
      })
      .addCase(removeGroupAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })


      .addCase(updateGroupAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateGroupAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.groups.findIndex(
          (group) => group.id === action.payload.id
        );
        if (index !== -1) {
          state.groups[index] = action.payload;
        }
      })
      .addCase(updateGroupAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      .addCase(fetchGroupsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGroupsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.groups = action.payload;
      })
      .addCase(fetchGroupsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default groupsSlice.reducer;
