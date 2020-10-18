import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1>React Router Demo | DevEd</h1>
      <ul className="nav-links">
        <Link to="/about" style={{ color: "#fff" }}>
          <li>About</li>
        </Link>
        <Link to="/products" style={{ color: "#fff" }}>
          <li>Products</li>
        </Link>
        <Link to="contact" style={{ color: "#fff" }}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
