import { useState } from "react";
import PatientTable from "../components/PatientTable.jsx";

const Database = () => {
  const [patients, setPatients] = useState([
    {
      name: "Rupali",
      age: "25",
      disease: "Flu",
      doctor: "Dr. Sharma",
      ward: "A1",
    },
  ]);

  const deletePatient = (index) => {
    setPatients(patients.filter((_, i) => i !== index));
  };

  const updatePatient = (index) => {
    const updated = [...patients];
    updated[index].disease = "Recovered";
    setPatients(updated);
    alert("Patient record updated!");
  };

  return (
    <div className="container">
      <h1>Hospital Patient Database</h1>
      <PatientTable
        patients={patients}
        onDelete={deletePatient}
        onUpdate={updatePatient}
      />
    </div>
  );
};

export default Database;
