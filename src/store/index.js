/* Here is where you will configure the store 
  The store needs some reducer slices!
*/

import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../features/campusesSlice";
import studentsSlice from "../features/studentsSlice";

const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    students: studentsSlice,
  },
});

export default store;
