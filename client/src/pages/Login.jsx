import React, { useState } from "react";
import GoogleIcon from "../components/GoogleIcon";
import { auth } from "../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorCode(errorCode);
        console.log(errorCode);
      });
  };

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="bg-white w-full sm:max-w-md p-6 sm:border border-gray-300 sm:rounded-lg ">
        <h1 className="text-2xl text-center font-bold my-8">
          Log in to your account
        </h1>
        {/* {errorCode === "auth/invalid-email" ? (
          <div className="rounded-md bg-red-50 p-4 my-4">
            <div className="flex">
              <div className="flex-0">
                <svg className="h-5 w-5 text-red-400">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="text-sm font-medium text-red-800 ml-3">
                The email must be a valid email address.
              </p>
            </div>
          </div>
        ) : null} */}
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="user@gmail.com"
              required={true}
              className="auth-input"
              onChange={handleEmailChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="••••••••"
              required={true}
              className="auth-input"
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="button"
            onClick={handleSignIn}
            className="w-full bg-emerald-700 p-1 rounded-md cursor-pointer"
          >
            <span className="font-bold text-white">Log in</span>
          </button>
        </form>
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-gray-400">
              Or continue with
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSignIn}
          className="flex items-center justify-center w-full cursor-pointer border border-gray-300 rounded-md"
        >
          <GoogleIcon width={35} />
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
