import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editStudentAsync,
  fetchSingleStudentAsync,
  selectStudent,
} from "../features/SingleStudentSlice";

const EditStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { studentId } = useParams();
  const student = useSelector(selectStudent);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState(4.0);

  useEffect(() => {
    dispatch(fetchSingleStudentAsync(studentId));
  }, [dispatch, studentId]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await dispatch(
      editStudentAsync({ studentId, firstName, lastName, email, gpa })
    );
    navigate("/students");
  };

  return (
    <>
      <form className="single-player-view" onSubmit={handleSubmit}>
        <h2>Edit Wizard!</h2>

        <p>
          <label htmlFor="studentFName">First Name:</label>
          <input
            name="studentFName"
            value={firstName}
            placeholder={student.firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="studentLName">Last Name:</label>
          <input
            name="studentLName"
            value={lastName}
            placeholder={student.lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </p>

        <p>
          <label htmlFor="studentEmail">Email Address:</label>
          <input
            name="studentEmail"
            value={email}
            placeholder={student.email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>

        <p>
          <label htmlFor="studentGpa">GPA:</label>
          <input
            name="studentGpa"
            value={gpa}
            placeholder={student.gpa}
            onChange={(e) => setGpa(e.target.value)}
          />
        </p>

        <button
          type="submit"
          disabled={firstName && lastName && email && gpa ? false : true}
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

export default EditStudent;
