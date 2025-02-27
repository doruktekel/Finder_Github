import React from "react";
import { Link } from "react-router-dom";

const UserItem = (user) => {
  const { login, avatar_url } = user;
  return (
    <div className="card shadow-lg side compact bg-base-100">
      <div className=" card-body flex-row items-center space-x-4">
        <div className="avatar">
          <div className="w-14 h-14 rounded-full shadow">
            <img src={avatar_url} alt="Profile" />
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
