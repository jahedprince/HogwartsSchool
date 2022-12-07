import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleCampus = createAsyncThunk(
  "singleCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const fetchCampusStudents = createAsyncThunk(
  "campusStudents",
  async (id) => {
    const { data } = await axios.get(`/api/campuses/${id}/students`);
    return data;
  }
);

const singleCampusSlice = createSlice({
  name: "singleCampus",
  initialState: {
    campusInfo: {},
    enrolled: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCampus.fulfilled, (state, action) => {
      state.campusInfo = action.payload;
    });
    builder.addCase(fetchCampusStudents.fulfilled, (state, action) => {
      state.enrolled = action.payload;
    });
  },
});

export const selectSingleCampus = (state) => state.singleCampus;

export default singleCampusSlice.reducer;
