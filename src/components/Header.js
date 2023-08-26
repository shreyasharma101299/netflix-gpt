import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full justify-between flex flex-row ">
      <img
        className="w-56 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      <div className="p-5 m-5 w-fit">
        <img
          className="w-10"
          src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg"
          alt="user-logo"
        />
        <p
          className="cursor-pointer text-white"
          onClick={() => handleSignOut()}
        >
          Sign Out
        </p>
      </div>
    </div>
  );
};

export default Header;
