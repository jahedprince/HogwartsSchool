import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  Navbar,
  Campuses,
  Students,
  SingleCampus,
  SingleStudent,
  CreateCampus,
  CreateStudent,
  EditCampus,
  EditStudent,
} from "./";
import Welcome from "./welcome";

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
        <Routes>
          <Route path="/campuses" element={<Campuses key={uuidv4()} />} />
          <Route path="/campuses/:campusId" element={<SingleCampus />} />
          <Route path="/CreateCampus" element={<CreateCampus />} />
          <Route path="/editCampus/:campusId" element={<EditCampus />} />

          <Route path="/students" element={<Students key={uuidv4()} />} />
          <Route path="/students/:studentId" element={<SingleStudent />} />
          <Route path="/CreateStudent" element={<CreateStudent />} />
          <Route path="/editStudent/:studentId" element={<EditStudent />} />

          <Route path="/" element={<Welcome />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
