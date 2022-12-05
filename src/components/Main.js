import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Navbar, Campuses, Students } from "./";
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
        <h1>Welcome to the Hogwarts School of Witchcraft and Wizardry!</h1>
        <Routes>
          <Route path="/campuses" element={<Campuses />} />
          <Route path="/students" element={<Students />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
