import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editCampusAsync,
  fetchSingleCampusAsync,
  selectCampus,
} from "../features/SingleCampusSlice";

const EditCampus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const campus = useSelector(selectCampus);
  const { campusId } = useParams();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(fetchSingleCampusAsync(campusId));
  }, [dispatch, campusId]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(editCampusAsync({ campusId, name, address, description }));
    navigate("/campuses");
  };

  return (
    <>
      <form id="todo-form" onSubmit={handleSubmit}>
        <h2> Edit House! </h2>

        <p>
          <label htmlFor="campusName">Edit Name:</label>
          <input
            name="campusName"
            value={name}
            placeholder="Enter House Name"
            onChange={(e) => setName(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="campusAddress">Edit Address:</label>
          <input
            name="campusAddress"
            value={address}
            placeholder="Enter House Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="campusDescription">Edit Description:</label>
          <input
            name="campusDescription"
            value={description}
            placeholder="Enter House Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>

        <button
          type="submit"
          disabled={name && address && description ? false : true}
        >
          Update
        </button>

        <p>
          <Link to="/campuses">Cancel</Link>
        </p>
      </form>
    </>
  );
};

export default EditCampus;
