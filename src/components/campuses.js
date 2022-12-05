import React from "react";
import { useSelector } from "react-redux";
import { selectCampuses } from "../features/campusesSlice";

import { Link } from "react-router-dom";

const Campuses = () => {
  const campuses = useSelector(selectCampuses);

  return (
    <>
      <div id="campuses" className="column">
        {campuses && campuses.length
          ? campuses.map((campus) => (
              <Link to={`/campuses/${campus.id}`} key={`Campuses ${campus.id}`}>
                <div className="campus">
                  <h3>{campus.name}</h3>
                  <img src={campus.imageUrl} />
                </div>
              </Link>
            ))
          : null}
      </div>
    </>
  );
};

export default Campuses;
