import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampusesAsync = createAsyncThunk("allCampuses", async () => {
  const { data } = await axios.get("/api/campuses");
  return data;
});

const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};

export default campusesSlice.reducer;
