import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center flex flex-col">
        <h1 className="text-8xl font-bold">Ooops !</h1>
        <p className="text-5xl ">
          404 - The page you are looking for does not exist...
        </p>
        <Link to="/" className="btn btn-primary btn-md ">
          <FaHome className="text-2xl" />
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
