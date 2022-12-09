import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampusesAsync = createAsyncThunk("/campuses", async () => {
  try {
    const { data } = await axios.get("/api/campuses");
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const addCampus = createAsyncThunk(
  "POST Campus",
  async ({ name, address, description }) => {
    try {
      const { data } = await axios.post("/api/campuses", {
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

export const deleteCampus = createAsyncThunk("/deleteCampus", async (id) => {
  try {
    const { data } = await axios.delete(`/api/campuses/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const campusesSlice = createSlice({
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
    builder.addCase(deleteCampus.fulfilled, (state, action) => {
      return state.filter((campus) => campus.id !== action.payload.id);
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};

export default campusesSlice.reducer;
