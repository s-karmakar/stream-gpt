import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse"); // Redirect to browse page after sign-in / sign-up
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/"); // Redirect to login page if user is signed out
      }
    });
  }, []);

  return (
    <div className="header w-full  px-9 py-4 flex justify-between fixed bg-transparent bg-gradient-to-b from-black z-30 text-white">
      <img className=" w-44 bg-inherit" src={NETFLIX_LOGO_URL} alt="logo" />
      Welcome to Stream-GPT
      {user && (
        <div className="user-info flex items-center bg-inherit">
          <img
            src={user?.photoURL}
            alt="user-logo"
            className="w-12 h-12 rounded-full mx-4 "
          />
          <button
            onClick={handleSignOut}
            className="bg-red-700 text-white px-4 py-2 rounded-xl font-mono cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
