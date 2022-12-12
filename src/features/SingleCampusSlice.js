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
// export const editCampus = createAsyncThunk(
//   "campuses/editCampus",
//   async (formData) => {
//     try {
//       const { data } = await axios.put(
//         `/api/campuses/${formData.id}`,
//         formData
//       );
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   }
// );

// export const fetchCampusStudents = createAsyncThunk(
//   "campusStudents",
//   async (id) => {
//     const { data } = await axios.get(`/api/campuses/${id}/students`);
//     return data;
//   }
// );

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
    // builder.addCase(fetchCampusStudents.fulfilled, (state, action) => {
    //   state.enrolled = action.payload;
    // });
    builder.addCase(editCampusAsync.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export const selectCampus = (state) => {
  return state.singleCampus;
};

export default campusSlice.reducer;
