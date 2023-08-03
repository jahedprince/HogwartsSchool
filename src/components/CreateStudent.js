import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../features/studentsSlice";
import apiUrl from "../config";
import axios from "axios";

const CreateStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addStudent({ firstName, lastName, email }));
    navigate("/students");
  };

  return (
    <>
      <form className="single-player-view" onSubmit={handleSubmit}>
        <h2> Place A New Wizard! </h2>

        <p>
          <label htmlFor="firstName">First Name:</label>
          <input
            name="firstName"
            value={firstName}
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </p>

        <p>
          <label htmlFor="lastName">Last Name:</label>
          <input
            name="lastName"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </p>

        <p>
          <label htmlFor="email">Email Address:</label>
          <input
            name="email"
            value={email}
            type="email"
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>

        <button
          type="submit"
          disabled={firstName && lastName && email ? false : true}
        >
          Submit
        </button>
        <p>
          <Link to="/students">Cancel</Link>
        </p>
      </form>
    </>
  );
};

export default CreateStudent;
