import { useState } from "react";
import logo from "../assets/logo.svg";
import { auth } from "../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router";
import Alert from "../components/Alert";
import GoogleIcon from "../components/GoogleIcon";

const Login = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorCode(errorCode);
        if (errorCode === "auth/invalid-email") {
          setErrorMessage("Please input valid email");
        } else if (errorCode === "auth/invalid-credential") {
          setErrorMessage("Wrong password");
        }
      });
  };

  if (user) {
    return <Navigate to={"/dashboard"}></Navigate>;
  }

  return (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-6 sm:border border-black sm:rounded-lg ">
        <img src={logo} alt="Logo" />
        <h1 className="text-2xl text-center font-bold my-8">
          Log in to your account
        </h1>
        {errorCode ? <Alert props={errorMessage} /> : null}
        <form
          className="flex flex-col gap-4"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSignIn();
            }
          }}
        >
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
            className="w-full bg-black p-1 rounded-md cursor-pointer"
          >
            <span className="font-bold text-white">Log in</span>
          </button>
        </form>
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-black"></div>
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-black">Or continue with</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSignIn}
          className="flex items-center justify-center w-full cursor-pointer border border-black rounded-md"
        >
          <GoogleIcon width={35} />
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
