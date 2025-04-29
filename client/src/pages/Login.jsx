import { useState, useContext } from "react";
import { auth } from "../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router";
import Alert from "../components/Alert";
import { UserContext } from "../context/Context";
import logo from "../assets/logo.svg";
import GoogleIcon from "../components/Icons/GoogleIcon";

const Login = () => {
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
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
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
      <div className="w-full border-black p-6 sm:max-w-md sm:rounded-lg sm:border">
        <img src={logo} alt="Logo" />
        <h1 className="my-8 text-center text-2xl font-bold">
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
              className="w-full rounded-md border border-black p-2 focus:outline-none"
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
              className="w-full rounded-md border border-black p-2 focus:outline-none"
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="button"
            onClick={handleSignIn}
            className="w-full cursor-pointer rounded-md bg-black p-1"
          >
            <span className="font-bold text-white">Log in</span>
          </button>
        </form>
        <div className="relative my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-black"></div>
          </div>
          <div className="relative flex justify-center text-sm leading-6 font-medium">
            <span className="bg-white px-6 text-black">Or continue with</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSignIn}
          className="flex w-full cursor-pointer items-center justify-center rounded-md border border-black"
        >
          <GoogleIcon width={35} />
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
