import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampusesAsync,
  selectCampuses,
  deleteCampus,
} from "../features/campusesSlice";

import { useParams, useNavigate, NavLink } from "react-router-dom";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);

  const { id } = useParams();

  const Navigate = useNavigate();
  const [state, setState] = useState(false);

  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch, state]);

  const handleDelete = async (id) => {
    setState(!state);
    await dispatch(deleteCampus(id));
    Navigate("/campuses");
  };

  return (
    <>
      <div className="row">
        {campuses && campuses.length
          ? campuses.map((campus) => (
              <div className="single-player-card">
                <NavLink
                  to={`/campuses/${campus.id}`}
                  key={`All Campuses ${campus.id}`}
                >
                  <div className="header-info">
                    <p className="pup-title">{campus.name}</p>
                    <p className="pup-number">{campus.id}</p>
                  </div>
                  <img src={campus.imageUrl} />
                </NavLink>

                <button
                  className="delete-button"
                  onClick={() => {
                    handleDelete(campus.id);
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

export default Campuses;
