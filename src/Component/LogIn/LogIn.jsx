import { useContext } from "react";
import { contextAPI } from "../Main/Main";

const LogIn = () => {
  const { user } = useContext(contextAPI);
  console.log(user);
  return (
    <div>
      <h1>login</h1>
      <h1>{user?.displayName}</h1>
      <div>
        <img src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default LogIn;
