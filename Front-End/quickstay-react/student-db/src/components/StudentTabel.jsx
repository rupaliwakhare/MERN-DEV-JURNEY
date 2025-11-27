import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StudentTable = ({ students, onDelete }) => {
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
          <th>Name</th><th>Course</th><th>Email</th><th>Phone</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, i) => (
          <tr key={i}>
            <td>{s.name}</td>
            <td>{s.course}</td>
            <td>{s.email}</td>
            <td>{s.phone}</td>
            <td>
              <button onClick={() => handleAction("demo", i)} disabled={disabledBtn[`demo-${i}`]} className="action-btn demo">Demo</button>
              <button onClick={() => handleAction("register", i)} disabled={disabledBtn[`register-${i}`]} className="action-btn register">Register</button>
              <button onClick={() => handleAction("inquiry", i)} disabled={disabledBtn[`inquiry-${i}`]} className="action-btn inquiry">Inquiry</button>
              <button onClick={() => onDelete(i)} className="action-btn delete">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;