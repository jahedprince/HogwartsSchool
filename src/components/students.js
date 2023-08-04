import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchStudentsAsync,
  selectStudents,
  deleteStudent,
} from "../features/studentsSlice";

import { NavLink, useNavigate } from "react-router-dom";
import apiUrl from "../config";
import axios from "axios";

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector(selectStudents);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/students`) // Use the apiUrl to construct the request URL
      .then((response) => {
        dispatch(fetchStudentsAsync(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  return (
    <>
      <div class="grid-flow">
        {students && students.length
          ? students.map((student) => (
              <div
                className="single-player-card"
                key={`All Students ${student.id}`}
              >
                <NavLink to={`/students/${student.id}`}>
                  <div class="single-player-card">
                    <div class="header-info">
                      <p class="pup-title">
                        {student.firstName} {student.lastName}
                      </p>
                      <p class="pup-number">{student.id}</p>
                    </div>
                    <div class="image-container">
                      <img
                        src={student.imageUrl}
                        alt={`Image of ${student.firstName}`}
                      />
                    </div>
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
                <button
                  onClick={() => {
                    navigate(`/editStudent/${student.id}`);
                  }}
                  className="edit"
                >
                  Edit this Wizard
                </button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Students;
