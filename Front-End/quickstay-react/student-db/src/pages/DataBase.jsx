import { useState } from "react";
import StudentTable from "../components/StudentTable";

const Database = () => {
  const [students, setStudents] = useState([
    {
      name: "Rupali",
      course: "Fullstack",
      email: "r@gmail.com",
      phone: "1343566679",
    },
  ]);

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Student Database</h1>
      <StudentTable students={students} onDelete={deleteStudent} />
    </div>
  );
};

export default Database;
