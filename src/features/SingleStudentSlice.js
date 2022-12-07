import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleStudentAsync = createAsyncThunk(
  "singleStudent",
  async (id) => {
    const { data } = await axios.get(`/api/students/${id}`);
    return data;
  }
);

const singleStudentSlice = createSlice({
  name: "singleStudent",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleStudent = (state) => {
  return state.singleStudent;
};

export default singleStudentSlice.reducer;
