import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCampus } from "../features/campusesSlice";

const CreateCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addCampus({ name, address, description }));
    setName("");
    setAddress("");
    setDescription("");
    navigate("/campuses");
  };

  return (
    <>
      <form className="single-player-view" onSubmit={handleSubmit}>
        <h2> Add A New House! </h2>
        <p>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={name}
            placeholder="Enter House Name"
            onChange={(e) => setName(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="address">Address:</label>
          <input
            name="address"
            value={address}
            placeholder="Enter House Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            value={description}
            placeholder="Enter House Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>

        <button
          type="submit"
          disabled={name && address && description ? false : true}
        >
          Submit
        </button>
        <p>
          <Link to="/campuses">Cancel</Link>
        </p>
      </form>
    </>
  );
};

export default CreateCampus;
