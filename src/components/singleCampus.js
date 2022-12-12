import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";

import {
  fetchSingleCampusAsync,
  selectCampus,
} from "../features/SingleCampusSlice";

import { unregisterStudent } from "../features/SingleStudentSlice";

const SingleCampus = () => {
  const { campusId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const campus = useSelector(selectCampus);

  useEffect(() => {
    dispatch(fetchSingleCampusAsync(campusId));
  }, [dispatch, campusId]);

  return (
    <>
      <div className="single-player-view">
        <div className="single-player-info">
          <h1>{campus.name}</h1>
        </div>
        <h3>Located: {campus.address}</h3>
        <h3>{campus.description}</h3>
        <img src={campus.imageUrl} />

        <div>
          Wizards Placed In This House:
          {campus.students && campus.students.length ? (
            campus.students.map((student) => {
              return (
                <div key={`student ${student.id}`}>
                  <Link
                    to={`/students/${student.id}`}
                  >{`${student.firstName} ${student.lastName}`}</Link>
                  <button
                    onClick={async () => {
                      await dispatch(
                        unregisterStudent({
                          id: student.id,
                          update: { campusId: null },
                        })
                      );
                      dispatch(fetchSingleCampusAsync(campusId));
                      navigate(`/students/${student.id}`);
                    }}
                  >
                    Unregister
                  </button>
                </div>
              );
            })
          ) : (
            <div className="card">
              <p>No wizards currently placed in this House.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleCampus;
