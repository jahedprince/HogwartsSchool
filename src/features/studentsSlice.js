import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchStudentsAsync = createAsyncThunk("/students", async () => {
  try {
    const { data } = await axios.get("/api/students");
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const addStudent = createAsyncThunk(
  "POST Student",
  async ({ firstName, lastName, email, imageUrl }) => {
    try {
      const { data } = await axios.post("/api/students", {
        firstName,
        lastName,
        email,
        imageUrl, // Include the imageUrl field here
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteStudent = createAsyncThunk("/deleteStudent", async (id) => {
  try {
    const { data } = await axios.delete(`/api/students/${id}`);
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const studentsSlice = createSlice({
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
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      return state.filter((student) => student.id !== action.payload.id);
    });
  },
});

export const selectStudents = (state) => state.students;

export default studentsSlice.reducer;
