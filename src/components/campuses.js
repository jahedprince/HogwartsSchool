import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import {
  fetchCampusesAsync,
  selectCampuses,
  deleteCampus,
} from "../features/campusesSlice";
import apiUrl from "../config";
import axios from "axios";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/campuses`)
      .then((response) => {
        dispatch(fetchCampusesAsync(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  // const handleDelete = (campusId) => {
  //   axios
  //     .delete(`${apiUrl}/api/campuses/${campusId}`)
  //     .then(() => {
  //       dispatch(deleteCampus(campusId));
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

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
