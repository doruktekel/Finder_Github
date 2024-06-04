import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow-m bg-gray-700 ">
      <div className="container flex justify-between mx-auto">
        <Link
          to="/"
          className="text-lg font-bold m-2 flex align-middle justify-center gap-2"
        >
          <FaGithub className="text-3xl" />
          Github Finder
        </Link>

        <div className="flex gap-5">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn px-4 py-2">
            Home
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost btn-sm rounded-btn  px-4 py-2"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
