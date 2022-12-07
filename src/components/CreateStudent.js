import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStudent } from "../features/studentsSlice";

const CreateStudent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [gpa, setGpa] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addStudent({ firstName, lastName, email }));
    setFirstName("");
    setLastName("");
    setEmail("");
    // setGpa("");
    navigate("/students");
  };

  return (
    <>
      <form id="todo-form" onSubmit={handleSubmit}>
        <h2> Place A New Wizard! </h2>

        <p>
          <label htmlFor="firstName">First Name:</label>
          <input
            name="firstName"
            value={firstName}
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="lastName">Last Name:</label>
          <input
            name="lastName"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="email">Email Address:</label>
          <input
            name="email"
            value={email}
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>

        {/* <p>
          <label htmlFor="gpa">GPA:</label>
          <input
            name="gpa"
            value={gpa}
            placeholder="Enter GPA"
            onChange={(e) => setGpa(e.target.value)}
          />
        </p> */}

        <button
          type="submit"
          disabled={firstName && lastName && email ? false : true}
        >
          Submit
        </button>

        {/*
        <Link to="/">Cancel</Link>
        ADD image maybe 
        */}
      </form>
    </>
  );
};

export default CreateStudent;
