import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCampus } from "../features/campusesSlice";
import apiUrl from "../config";
import axios from "axios";

const CreateCampus = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addCampus({ name, address, description }))
      .unwrap()
      .then(() => {
        setName("");
        setAddress("");
        setDescription("");
        navigate("/campuses");
      })
      .catch((error) => {
        console.error(error);
      });
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
            required // Add the 'required' attribute
          />
        </p>

        <p>
          <label htmlFor="address">Address:</label>
          <input
            name="address"
            value={address}
            placeholder="Enter House Address"
            onChange={(e) => setAddress(e.target.value)}
            required // Add the 'required' attribute
          />
        </p>

        <p>
          <label htmlFor="description">Description:</label>
          <input
            name="description"
            value={description}
            placeholder="Enter House Description"
            onChange={(e) => setDescription(e.target.value)}
            required // Add the 'required' attribute
          />
        </p>

        <button type="submit">Submit</button>
        <p>
          <Link to="/campuses">Cancel</Link>
        </p>
      </form>
    </>
  );
};

export default CreateCampus;
