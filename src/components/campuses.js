import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampusesAsync, selectCampuses } from "../features/campusesSlice";

import { NavLink } from "react-router-dom";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);

  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch]);

  return (
    <>
      <div className="row">
        {campuses && campuses.length
          ? campuses.map((campus) => (
              <NavLink
                to={`/campuses/${campus.id}`}
                key={`All Campuses ${campus.id}`}
              >
                <div class="single-player-card">
                  <div class="header-info">
                    <p class="pup-title">{campus.name}</p>
                    <p class="pup-number">{campus.id}</p>
                  </div>
                  <img src={campus.imageUrl} />
                </div>
              </NavLink>
            ))
          : null}
      </div>
    </>
  );
};

export default Campuses;
