import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PatientTable = ({ patients, onDelete, onUpdate }) => {
  const navigate = useNavigate();
  const [disabledBtn, setDisabledBtn] = useState({});

  const handleAction = (type, index) => {
    setDisabledBtn({ ...disabledBtn, [`${type}-${index}`]: true });
    navigate(`/${type}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Disease</th>
          <th>Doctor</th>
          <th>Ward</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p, i) => (
          <tr key={i}>
            <td>{p.name}</td>
            <td>{p.age}</td>
            <td>{p.disease}</td>
            <td>{p.doctor}</td>
            <td>{p.ward}</td>
            <td>
              <button
                className="admit"
                disabled={disabledBtn[`admit-${i}`]}
                onClick={() => handleAction("admit", i)}
              >
                Admit
              </button>
              <button
                className="discharge"
                disabled={disabledBtn[`discharge-${i}`]}
                onClick={() => handleAction("discharge", i)}
              >
                Discharge
              </button>
              <button
                className="update"
                disabled={disabledBtn[`update-${i}`]}
                onClick={() => handleAction("update", i)}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;
