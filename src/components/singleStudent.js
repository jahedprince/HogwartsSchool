import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSingleStudentAsync,
  selectStudent,
} from "../features/SingleStudentSlice";

const SingleStudent = () => {
  const { studentId } = useParams();
  const dispatch = useDispatch();

  const student = useSelector(selectStudent);
  const { firstName, lastName, email, imageUrl, gpa, campus } = student;

  useEffect(() => {
    dispatch(fetchSingleStudentAsync(studentId));
  }, [dispatch]);

  return (
    <div className="single-player-card" class="column">
      <div className="header-info" class="row">
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
          <div className="text">
            This student attends:
            <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
          </div>
        ) : (
          `${firstName} is currently not placed in a house.`
        )}
      </div>
      <div className="form">
        <Link to={`/students/${studentId}/edit`}>
          <button className="edit_btn">Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleStudent;
