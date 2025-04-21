import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="bg-white w-full sm:max-w-md p-6 sm:border border-gray-200 sm:rounded-lg ">
        <h1 className="text-2xl text-center font-bold my-8">Log in to your account</h1>
        <form action="POST">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="user@gmail.com"
              required="required"
              autoFocus="autofocus"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="••••••••"
              required="required"
              autoFocus="autofocus"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
