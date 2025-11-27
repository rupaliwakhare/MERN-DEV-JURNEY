
import { useState } from "react";

const StudentForm = ({ onAdd }) => {
  const [student, setStudent] = useState({ name: "", course: "", email: "", phone: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || !student.course || !student.email || !student.phone) {
      alert("Please fill all fields!");
      return;
    }
    onAdd(student);
    setStudent({ name: "", course: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={student.name} onChange={handleChange} placeholder="Student Name" />
      <select name="course" value={student.course} onChange={handleChange}>
        <option value="">Select Course</option>
        <option value="Fullstack">Fullstack</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
      </select>
      <input name="email" value={student.email} onChange={handleChange} placeholder="Email" />
      <input name="phone" value={student.phone} onChange={handleChange} placeholder="Phone Number" />
      <button type="submit" style={{ backgroundColor: "#007bff" }}>Submit</button>
    </form>
  );
};

export default StudentForm;