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
  async ({ name, address, description }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/campuses", {
        name,
        address,
        description,
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data); // Return the error response data
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
    // Handle the rejected state for each thunk
    builder.addCase(fetchCampusesAsync.rejected, (state, action) => {
      // Handle the error, you can log it or display an error message
      console.error("Error fetching campuses:", action.error);
    });
    builder.addCase(addCampus.rejected, (state, action) => {
      // Handle the error, you can log it or display an error message
      console.error("Error adding campus:", action.error);
    });
    builder.addCase(deleteCampus.rejected, (state, action) => {
      // Handle the error, you can log it or display an error message
      console.error("Error deleting campus:", action.error);
    });
  },
});

export const selectCampuses = (state) => {
  return state.campuses;
};

export default campusesSlice.reducer;
