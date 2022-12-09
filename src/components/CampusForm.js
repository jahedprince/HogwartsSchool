import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editCampus } from "../features/SingleCampusSlice";

const CampusForm = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(editCampus({ id, name, address, description }));
    setName("");
    setAddress("");
    setDescription("");
    navigate("/campuses");
  };

  return (
    <>
      <form id="todo-form" onSubmit={handleSubmit}>
        <h2> Edit House </h2>

        <p>
          <label htmlFor="name">Edit Name:</label>
          <input
            name="name"
            value={name}
            placeholder="Enter House Name"
            onChange={(e) => setName(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="address">Edit Address:</label>
          <input
            name="address"
            value={address}
            placeholder="Enter House Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="description">Edit Description:</label>
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
          Update
        </button>
      </form>
    </>
  );
};

export default CampusForm;
