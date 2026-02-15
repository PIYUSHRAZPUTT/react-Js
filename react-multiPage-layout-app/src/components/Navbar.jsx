import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/services">Services</Link>
        <Link className="nav-link" to="/contactus">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Navbar;
