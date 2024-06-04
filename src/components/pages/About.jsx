import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center flex flex-col">
        <h1 className="text-4xl font-bold">About This App</h1>
        <h1 className="text-4xl font-bold">
          Created by
          <Link to="https://github.com/doruktekel" className="text-gray-500">
            {" "}
            Doruk Tekel{" "}
          </Link>
        </h1>
        <p className="text-2xl ">App to search Github users</p>
        <p className="text-2xl ">Version: 1.0.0</p>
        <Link to="/" className="btn btn-primary btn-md ">
          <FaHome className="text-2xl" />
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default About;
