import React, { useState } from "react";
import GoogleIcon from "../components/GoogleIcon";
import { auth } from "../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="bg-white w-full sm:max-w-md p-6 sm:border border-gray-400 sm:rounded-lg ">
        <h1 className="text-2xl text-center font-bold my-8">
          Log in to your account
        </h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="user@gmail.com"
              required="required"
              autoFocus={true}
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
              required="required"
              autoFocus={true}
              className="auth-input"
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="button"
            onClick={handleSignIn}
            className="w-full bg-emerald-600 p-1 rounded-md cursor-pointer"
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
          className="flex items-center justify-center w-full cursor-pointer border border-gray-400 rounded-md"
        >
          <GoogleIcon width={35} />
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
