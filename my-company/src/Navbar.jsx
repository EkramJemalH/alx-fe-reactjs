import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  gap: "20px",
  padding: "10px 20px",
  backgroundColor: "#004080",
  color: "white",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
