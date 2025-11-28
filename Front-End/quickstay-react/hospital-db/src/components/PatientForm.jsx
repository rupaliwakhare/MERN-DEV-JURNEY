import { useState } from "react";

const PatientForm = ({ onAdd }) => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    disease: "",
    doctor: "",
    ward: "",
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patient.name || !patient.age || !patient.disease || !patient.doctor) {
      alert("Please fill all fields!");
      return;
    }
    onAdd(patient);
    setPatient({ name: "", age: "", disease: "", doctor: "", ward: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={patient.name}
        onChange={handleChange}
        placeholder="Patient Name"
      />
      <input
        name="age"
        value={patient.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        name="disease"
        value={patient.disease}
        onChange={handleChange}
        placeholder="Disease"
      />
      <input
        name="doctor"
        value={patient.doctor}
        onChange={handleChange}
        placeholder="Doctor Assigned"
      />
      <input
        name="ward"
        value={patient.ward}
        onChange={handleChange}
        placeholder="Ward"
      />
      <button type="submit" style={{ backgroundColor: "#28a745" }}>
        Admit Patient
      </button>
    </form>
  );
};

export default PatientForm;
