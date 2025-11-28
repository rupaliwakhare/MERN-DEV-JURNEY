import { useState } from "react";
import PatientForm from "../components/PatientForm.jsx";
import "./Home.css"



const Home = () => {
  const [patients, setPatients] = useState([]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
    alert("Patient Admitted Successfully!");
  };

  return (
    <div className="container">
      <h1 >Hospital Patient Admission</h1>
      <PatientForm onAdd={addPatient} />
    </div>
  );
};

export default Home;
