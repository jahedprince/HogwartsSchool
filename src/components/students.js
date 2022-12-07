import React from "react";
import { useSelector } from "react-redux";
import { selectStudents } from "../features/studentsSlice";

import { NavLink } from "react-router-dom";

const Students = () => {
  const students = useSelector(selectStudents);

  return (
    <>
      <div class="grid-flow">
        {students && students.length
          ? students.map((student) => (
              <NavLink
                to={`/students/${student.id}`}
                key={`All Students ${student.id}`}
              >
                <div class="single-player-card">
                  <div class="header-info">
                    <p class="pup-title">
                      {student.firstName} {student.lastName}
                    </p>
                    <p class="pup-number">{student.id}</p>
                  </div>
                  <img src={student.imageUrl} />
                </div>
              </NavLink>
            ))
          : null}
      </div>
    </>
  );
};

export default Students;
