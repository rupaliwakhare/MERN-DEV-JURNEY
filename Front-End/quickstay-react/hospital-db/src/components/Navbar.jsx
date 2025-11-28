import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Hospital DB</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/database">Database</Link>
        <Link to="/admit">Admit</Link>
        <Link to="/discharge">Discharge</Link>
        <Link to="/update">Update</Link>
      </div>
    </nav>
  );
};

export default Navbar;
