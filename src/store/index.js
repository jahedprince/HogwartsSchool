/* Here is where you will configure the store 
  The store needs some reducer slices!
*/

import { configureStore } from "@reduxjs/toolkit";
import campusesSlice from "../features/campusesSlice";
import studentsSlice from "../features/studentsSlice";
import singleCampusSlice from "../features/SingleCampusSlice";
import singleStudentSlice from "../features/SingleStudentSlice";

const store = configureStore({
  reducer: {
    campuses: campusesSlice,
    students: studentsSlice,
    singleCampus: singleCampusSlice,
    singleStudent: singleStudentSlice,
  },
});

export default store;
