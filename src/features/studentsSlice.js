import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudentsAsync = createAsyncThunk("allStudents", async () => {
  const { data } = await axios.get("/api/students");
  return data;
});

export const addStudent = createAsyncThunk(
  "POST Student",
  async ({ firstName, lastName, email }) => {
    const { data } = await axios.post("api/students", {
      firstName,
      lastName,
      email,
      // gpa,
    });
    return data;
  }
);

const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addStudent.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export const selectStudents = (state) => {
  return state.students;
};

export default studentsSlice.reducer;
