import React, { useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchCampusStudents,
  fetchSingleCampus,
  selectSingleCampus,
} from "../features/SingleCampusSlice";

const SingleCampus = () => {
  const { campusId } = useParams();
  const dispatch = useDispatch();
  const campus = useSelector(selectSingleCampus);

  const { name, imageUrl, description, address } = campus.campusInfo;
  const { enrolled } = campus;

  useEffect(() => {
    dispatch(fetchSingleCampus(campusId));
    dispatch(fetchCampusStudents(campusId));
  }, [dispatch]);

  return (
    <div className="single-player-view">
      <div className="header-info">
        <h1>{name}</h1>
      </div>
      <h3>Located: {address}</h3>
      <h3>{description}</h3>
      <img src={imageUrl} />
      <div className="campus_enrolled">
        <h2>Wizards</h2>
      </div>
      <div className="enrolled">
        {enrolled.length ? (
          enrolled.map((student) => (
            <div className="enrolled_card" key={student.id}>
              <Link to={`/students/${student.id}`}>
                <img src={student.imageUrl} />
                <h2>
                  {student.firstName} {student.lastName}
                </h2>
              </Link>
              <p>{student.email}</p>
              <p>GPA: {student.gpa}</p>
            </div>
          ))
        ) : (
          <div className="card">
            <p>No wizards currently placed in this House.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleCampus;
