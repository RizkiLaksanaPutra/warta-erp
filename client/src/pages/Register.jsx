import React from "react";
import GoogleIcon from "../components/GoogleIcon";
import { NavLink } from "react-router";
import ForgotPassword from "./ForgotPassword";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="bg-white w-full sm:max-w-md p-6 sm:border border-gray-400 sm:rounded-lg ">
        <h1 className="text-2xl text-center font-bold my-8">
          Make a new account
        </h1>
        <form action="POST" className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="user@gmail.com"
              required="required"
              autoFocus="autofocus"
              className="auth-input"
            />
            <p className="text-sm text-gray-600">Use active email</p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="••••••••"
              required="required"
              autoFocus="autofocus"
              className="auth-input"
            />
            <p className="text-sm text-gray-600">Use 8 or more characters with at least a number or symbol</p>
          </div>
          <button className="w-full bg-emerald-600 p-1 rounded-md cursor-pointer">
            <span className="font-bold text-white">Register</span>
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
        <button className="flex items-center justify-center w-full cursor-pointer border border-gray-400 rounded-md">
          <GoogleIcon width={35} />
          <span>Google</span>
        </button>
        <p className="text-center my-3">
          Already have an account?{" "}
          <NavLink to={"/login"}>
            <span className="text-accent font-bold">Login here</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
