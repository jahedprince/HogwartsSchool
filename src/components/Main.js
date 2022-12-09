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
  CampusForm,
  StudentForm,
} from "./";

// import { fetchCampusesAsync } from "../features/campusesSlice";
// import { fetchStudentsAsync } from "../features/studentsSlice";

const Main = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCampusesAsync());
  //   dispatch(fetchStudentsAsync());
  // }, [dispatch]);

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
          <Route path="/campuses" element={<Campuses key={uuidv4()} />} />
          <Route path="/campuses/:campusId" element={<SingleCampus />} />
          <Route path="/CreateCampus" element={<CreateCampus />} />
          <Route path="/campusForm/:campusId" element={<CampusForm />} />

          <Route path="/students" element={<Students key={uuidv4()} />} />
          <Route path="/students/:studentId" element={<SingleStudent />} />
          <Route path="/CreateStudent" element={<CreateStudent />} />
          <Route path="/studentForm/:studentId" element={<StudentForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
