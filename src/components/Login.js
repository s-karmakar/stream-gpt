import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignUpForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleSignInSignUp = () => {
    const name = nameRef.current ? nameRef.current.value : null;
    const validationMessage = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (validationMessage !== true) {
      seterrorMessage(validationMessage);
      return;
    }

    seterrorMessage(null); // Clear any previous error messages
    // Handle the sign-in or sign-up logic
  };

  return (
    <>
      {" "}
      <div>
        <Header />
      </div>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="bg-image"
          className="absolute w-full"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-[30%] bg-black mx-auto right-0 left-0 top-1/4 px-20 text-white p-12 font-mono bg-opacity-65"
      >
        <h1 className="text-2xl mb-7 ">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className=" w-full border border-white my-3 p-4  rounded-md left-0 right-0 mx-auto bg-gray-950 "
          />
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email or Phone Number"
          className=" w-full border border-white my-3 p-4  rounded-md left-0 right-0 mx-auto bg-gray-950 "
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className=" w-full border border-white my-3 p-4 rounded-md left-0 right-0 mx-auto  bg-gray-900"
        />

        {errorMessage && (
          <p className="text-red-500 text-sm mb-3">{errorMessage}</p>
        )}
        <button
          className="bg-red-600 text-white my-3 p-2 rounded-md w-full"
          type="submit"
          onClick={handleSignInSignUp}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {isSignInForm ? (
          <p className="text-gray-400 mt-5">
            New to Netflix?{" "}
            <span
              className="text-white cursor-pointer"
              onClick={toggleSignUpForm}
            >
              Sign up now
            </span>
          </p>
        ) : (
          <p className="text-gray-400 mt-5">
            Already a member?{" "}
            <span
              className="text-white cursor-pointer"
              onClick={toggleSignUpForm}
            >
              Sign in now
            </span>
          </p>
        )}
      </form>
    </>
  );
};

export default Login;
