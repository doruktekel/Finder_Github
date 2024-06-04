import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import { GithubContext } from "../../context/GithubContext";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return (
      <div className="container flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-2">
      {users.map((user, index) => {
        return <UserItem key={index} {...user} />;
      })}
    </div>
  );
};

export default UserResults;
