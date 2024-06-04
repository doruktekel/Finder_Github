import React from "react";
import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";
import Alert from "../layout/Alert";

const Home = () => {
  return (
    <div className="container mx-auto mb-10 mt-10">
      <Alert />
      <UserSearch />
      <UserResults />
    </div>
  );
};

export default Home;
