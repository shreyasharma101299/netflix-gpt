import React, { useState, useRef } from "react";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE } from "../utils/constants";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();
  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  const validateForm = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "C:UsersShreyaPicturesshreya2.jpeg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE} alt="Netflix-logo" />
      </div>
      <div className="p-10 py-14 text-white w-1/5 bg-black absolute  items-center mx-auto my-36 right-0 left-0 bg-opacity-80 w-96">
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
          <h1 className="p-2 mx-7 text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              className="mx-7 my-4 mt-7 p-2 bg-slate-600 "
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="mx-7 my-4 mt-7 p-2 bg-slate-600 "
            type="text"
            placeholder="Email Address"
          />

          <input
            ref={password}
            className="mx-7  my-4 p-2 bg-slate-600  "
            type="password"
            placeholder="Password"
          />
          {errorMessage && <p className="mx-7 text-red-500">{errorMessage}</p>}
          <button
            onClick={() => validateForm()}
            className="bg-red-600 p-2  mx-7 mt-7 rounded-lg cursor-pointer"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={() => {
              handleClick();
            }}
            className="mx-7 mt-3"
          >
            New to Netflix? {isSignIn ? "Sign Up" : "Sign In"} now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
