import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

import {
  fetchSingleCampusAsync,
  selectCampus,
} from "../features/SingleCampusSlice";

import { unregisterStudent } from "../features/studentsSlice";

const SingleCampus = () => {
  const { campusId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const campus = useSelector(selectCampus);
  const { name, imageUrl, description, address } = campus.campusInfo;

  useEffect(() => {
    dispatch(fetchSingleCampusAsync(campusId));
  }, [dispatch]);

  return (
    <div className="single-player-view">
      <div className="single-player-info">
        <h1>{name}</h1>
      </div>
      <h3>Located: {address}</h3>
      <h3>{description}</h3>
      <img src={imageUrl} />

      <div>
        Wizards Placed In This House:
        {campus.students ? (
          campus.students.map((student) => {
            return (
              <>
                <div className="student-container" key={campus.id}></div>
                <Link to={`/students/${student.id}`}>
                  <div>{`${student.firstName} ${student.lastName}`}</div>
                </Link>
                <button
                  onClick={async () => {
                    await dispatch(unregisterStudent(student.id));
                    navigate("/campuses");
                  }}
                  className="unregister"
                >
                  Unregister
                </button>
              </>
            );
          })
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
