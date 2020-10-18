import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <Link to="/">
        <span>Home</span>
      </Link>
    </div>
  );
};

export default About;
