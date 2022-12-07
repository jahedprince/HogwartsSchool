import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Navbar,
  Campuses,
  Students,
  SingleCampus,
  SingleStudent,
  CreateCampus,
  CreateStudent,
} from "./";
import { fetchCampusesAsync } from "../features/campusesSlice";
import { fetchStudentsAsync } from "../features/studentsSlice";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampusesAsync());
    dispatch(fetchStudentsAsync());
  }, [dispatch]);

  return (
    <div id="main">
      <nav>
        <Navbar />
      </nav>

      <main>
        <h1 id="headline">
          Welcome to the Hogwarts School of Witchcraft and Wizardry!
        </h1>
        <Routes>
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/campuses/:campusId/*" element={<SingleCampus />} />
          <Route path="/students/:studentId/*" element={<SingleStudent />} />
          <Route path="/CreateCampus" element={<CreateCampus />} />
          <Route path="/CreateStudent" element={<CreateStudent />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
