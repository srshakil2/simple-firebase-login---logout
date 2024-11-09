import { useContext } from "react";
import { contextAPI } from "../Main/Main";

const LogOut = () => {
  const { name } = useContext(contextAPI);

  return (
    <div>
      <h2>This is log out fild</h2>
    </div>
  );
};

export default LogOut;
