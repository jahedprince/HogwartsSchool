import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampusesAsync = createAsyncThunk("allCampuses", async () => {
  const { data } = await axios.get("/api/campuses");
  return data;
});

export const addCampus = createAsyncThunk(
  "POST Campus",
  async ({ name, address, description }) => {
    const { data } = await axios.post("api/campuses", {
      name,
      address,
      description,
    });
    return data;
  }
);

const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampusesAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addCampus.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};

export default campusesSlice.reducer;
