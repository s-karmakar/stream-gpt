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
    <div className="fixed flex justify-between  px-6 py-2 bg-gradient-to-b from-black w-full z-20">
      <img className=" w-44" src={NETFLIX_LOGO_URL} alt="logo" />

      {user && (
        <div className="flex p-4 m-3">
          <img
            src={user?.photoURL}
            alt="user-logo"
            className="w-12 h-12 rounded-full mx-4"
          />

          <button
            onClick={handleSignOut}
            className="bg-red-700 text-white px-4 py-2 rounded-xl font-mono"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
