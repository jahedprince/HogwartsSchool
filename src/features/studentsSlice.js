import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudentsAsync = createAsyncThunk("allStudents", async () => {
  const { data } = await axios.get("/api/students");
  return data;
});

const studentsSlice = createSlice({
  name: "studentss",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectStudents = (state) => {
  return state.campuses;
};

export default studentsSlice.reducer;
