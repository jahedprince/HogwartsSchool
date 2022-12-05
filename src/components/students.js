import React from "react";
import { useSelector } from "react-redux";
import { selectStudents } from "../features/studentsSlice";

import { Link } from "react-router-dom";

const Students = () => {
  const students = useSelector(selectStudents);

  return (
    <>
      <div id="students" className="column">
        {students && students.length
          ? students.map((student) => (
              <Link
                to={`/students/${student.id}`}
                key={`Students ${student.id}`}
              >
                <div className="student">
                  <h3>
                    {student.firstName} {student.lastName}
                  </h3>
                  <img src={student.imageUrl} />
                </div>
              </Link>
            ))
          : null}
      </div>
    </>
  );
};

export default Students;
