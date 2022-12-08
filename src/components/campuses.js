import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCampusesAsync,
  selectCampuses,
  deleteCampus,
} from "../features/campusesSlice";

import { useNavigate, NavLink } from "react-router-dom";

const Campuses = () => {
  const dispatch = useDispatch();
  const campuses = useSelector(selectCampuses);

  const { id } = useParams();

  const Navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCampusesAsync());
  }, [dispatch, id]);

  const handleDelete = async (id) => {
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
                  onClick={handleDelete(campus.id)}
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
