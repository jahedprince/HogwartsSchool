import React, { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSingleStudentAsync,
  selectSingleStudent,
} from "../features/SingleStudentSlice";

const SingleStudent = () => {
  const { studentId } = useParams();

  const singleStudent = useSelector(selectSingleStudent);
  const { firstName, lastName, email, imageUrl, gpa, campus } = singleStudent;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleStudentAsync(studentId));
  }, [dispatch]);

  return (
    <div className="single-player-view">
      <div className="header-info">
        <h1>
          {firstName} {lastName}
        </h1>
      </div>
      <h3>Email: {email}</h3>
      <h3>GPA: {gpa}</h3>
      <img src={imageUrl} />
      <div className="campus_enrolled_in">
        <h2>House placed in: </h2>
      </div>
      <div className="campus_enrolled">
        {campus ? (
          <Link to={`/campuses/${campus.id}`}>
            <div className="campus_card">
              <div className="campus_image">
                <img src={campus.imageUrl} />
              </div>
              <div className="campus_name">
                <h3>{campus.name}</h3>
              </div>
            </div>
          </Link>
        ) : (
          `${firstName} is currently not placed in a house.`
        )}
      </div>
    </div>
  );
};

export default SingleStudent;
