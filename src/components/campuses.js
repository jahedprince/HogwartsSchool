import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import {
  fetchCampusesAsync,
  selectCampuses,
  deleteCampus,
} from "../features/campusesSlice";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        {campuses && campuses.length
          ? campuses.map((campus) => (
              <div
                className="single-player-card"
                key={`All Campuses ${campus.id}`}
              >
                <NavLink to={`/campuses/${campus.id}`}>
                  <div className="header-info">
                    <p className="pup-title">{campus.name}</p>
                    <p className="pup-number">{campus.id}</p>
                  </div>
                  <img src={campus.imageUrl} />
                </NavLink>

                <button
                  className="delete-button"
                  onClick={() => {
                    dispatch(deleteCampus(campus.id));
                  }}
                >
                  X
                </button>
                <button
                  onClick={() => {
                    navigate(`/editCampus/${campus.id}`);
                  }}
                  className="edit"
                >
                  Edit this Campus
                </button>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Campuses;
