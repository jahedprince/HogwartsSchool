import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleCampusAsync = createAsyncThunk(
  "singleCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const editCampusAsync = createAsyncThunk(
  "form/edit",
  async ({ campusId, name, address, description }) => {
    try {
      const { data } = await axios.put(`/api/campuses/${campusId}`, {
        name,
        address,
        description,
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
);

export const campusSlice = createSlice({
  name: "campus",
  initialState: {
    campusInfo: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleCampusAsync.fulfilled, (state, action) => {
      state.campusInfo = action.payload;
    });
    builder.addCase(editCampusAsync.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export const selectCampus = (state) => {
  return state.singleCampus;
};

export default campusSlice.reducer;
