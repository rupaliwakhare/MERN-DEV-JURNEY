
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">SkillSoft</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/database">Database</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/register">Register</Link>
        <Link to="/inquiry">Inquiry</Link>
      </div>
    </nav>
  );
};

export default Navbar;
