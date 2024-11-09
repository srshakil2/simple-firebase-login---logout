import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { auth } from "../../Utils/firebase__login";

export const contextAPI = createContext();
const Main = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const handelBtn = (name) => {
    if (name === "login") {
      signInWithPopup(auth, googleProvider)
        .then((res) => {
          setUser(res.user);
        })
        .catch((error) => {
          console.log("ERROR", error);
        });
    } else {
      setUser(null);
    }
  };

  return (
    <contextAPI.Provider value={{ user }}>
      <div>
        <h1 className=" text-4xl text-center font-bold pt-5">This is Main</h1>
        <div className=" flex gap-5 justify-center  mt-10">
          {!user ? (
            <NavLink to={"/login"}>
              <button
                onClick={() => handelBtn("login")}
                className="btn btn-secondary"
              >
                Log In
              </button>
            </NavLink>
          ) : (
            <NavLink to={"/logout"}>
              <button
                onClick={() => handelBtn("")}
                className="btn btn-secondary"
              >
                Log Out
              </button>
            </NavLink>
          )}
        </div>
        <Outlet></Outlet>
      </div>
    </contextAPI.Provider>
  );
};

export default Main;
