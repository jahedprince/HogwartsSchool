import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchStudentsAsync,
  selectStudents,
  deleteStudent,
} from "../features/studentsSlice";

import { NavLink } from "react-router-dom";

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);

  useEffect(() => {
    dispatch(fetchStudentsAsync());
  }, [dispatch]);

  return (
    <>
      <div class="grid-flow">
        {students && students.length
          ? students.map((student) => (
              <div className="single-player-card">
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

                <button
                  className="delete-button"
                  onClick={() => {
                    dispatch(deleteStudent(student.id));
                  }}
                >
                  X
                </button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Students;
