import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Status, University } from '@roamlerorg/types';
import { UniversitiesService } from '@roamlerorg/services';

const universitiesService = new UniversitiesService();

export interface UniversityState {
  data: University[];
  status: Status;
}

const initialState: UniversityState = {
  status: 'idle',
  data: [],
};

export const universitiesSlice = createSlice({
  name: 'universities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUniversities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUniversities.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
      })
      .addCase(fetchUniversities.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const fetchUniversities = createAsyncThunk(
  'universities/fetchUniversities',
  async (country: string) => {
    const response = await universitiesService.getUniversities(country);
    return response;
  }
);

export const selectUniversities = (state: RootState) => state.universities;

export default universitiesSlice.reducer;
