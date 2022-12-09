import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleStudentAsync = createAsyncThunk(
  "singleStudent",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const editStudent = createAsyncThunk(
  "students/editStudent",
  async ({ studentId, firstName, lastName, email, gpa }) => {
    try {
      const { data } = await axios.put(`/api/students/${studentId}/edit`, {
        firstName,
        lastName,
        email,
        gpa,
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const studentSlice = createSlice({
  name: "student",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleStudentAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(editStudent.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export const selectStudent = (state) => {
  return state.singleStudent;
};

export default studentSlice.reducer;
