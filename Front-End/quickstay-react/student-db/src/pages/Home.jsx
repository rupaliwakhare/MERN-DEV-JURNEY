import { useState } from "react";
import StudentForm from "../components/StudentForm";

const Home = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
    alert("Student Registered Successfully!");
  };

  return (
    <div className="container">
      <h1>Fill This Form</h1>
      <StudentForm onAdd={addStudent} />
    </div>
  );
};

export default Home;
