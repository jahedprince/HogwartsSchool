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

  useEffect(() => {
    dispatch(fetchSingleStudentAsync(studentId));
  }, [dispatch]);

  return (
    <div className="single-player-view">
      <div className="single-player-info" class="row">
        <h1>
          {student.firstName} {student.lastName}
        </h1>
      </div>
      <h3>Email: {student.email}</h3>
      <h3>GPA: {student.gpa}</h3>
      <img src={student.imageUrl} />
      <div className="campus_enrolled_in">
        <h2>House placed in: </h2>
      </div>
      <div className="campus_enrolled">
        {student.campus ? (
          <div>
            This student is placed in:
            <Link to={`/campuses/${student.campus.id}`}>
              {student.campus.name}
            </Link>
          </div>
        ) : (
          `${student.firstName} is currently not placed in a house.`
        )}
      </div>
    </div>
  );
};

export default SingleStudent;
