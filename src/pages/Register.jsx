import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.config";
import { useAppContext } from "../contexts/context";
import { SET_USER } from "../reducer/reducer";

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31v2.77h3.57c2.08-1.92,3.28-4.74,3.28-8.09Z"></path>
    <path d="M12,23c2.97,0,5.46-.98,7.28-2.66l-3.57-2.77c-.98.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53H2.18v2.84C3.99,20.53,7.7,23,12,23Z"></path>
    <path d="M5.84,14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43,8.55,1,10.22,1,12s.43,3.45,1.18,4.93l3.66-2.84Z"></path>
    <path d="M12,5.38c1.62,0,3.06.56,4.21,1.64l3.15-3.15C17.45,2.09,14.97,1,12,1,7.7,1,3.99,3.47,2.18,7.07l3.66,2.84c.87-2.6,3.3-4.53,6.16-4.53Z"></path>
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    className="fill-current"
  >
    <path d="M12,2A10,10,0,0,0,2,12c0,4.42,2.87,8.17,6.84,9.5.5.09.68-.22.68-.48s0-.88,0-1.72c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6,1,.07,1.53,1.03,1.53,1.03.89,1.53,2.34,1.09,2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94,0-1.09.39-1.98,1.03-2.68-.1-.25-.45-1.27.1-2.64,0,0,.84-.27,2.75,1.02.79-.22,1.65-.33,2.5-.33s1.71.11,2.5.33c1.91-1.29,2.75-1.02,2.75-1.02.55,1.37.2,2.39.1,2.64.64.7,1.03,1.59,1.03,2.68,0,3.84-2.34,4.68-4.57,4.93.36.31.68.92.68,1.85,0,1.34,0,2.42,0,2.75s.18.58.69.48A10,10,0,0,0,22,12,10,10,0,0,0,12,2Z"></path>
  </svg>
);

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleEmailRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const setProfile = {
      displayName: name,
      photoURL: photoURL,
    };

    try {
      const createUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      updateProfile(createUser.user, setProfile);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const createUser = await signInWithPopup(auth, googleProvider);
      dispatch({ type: SET_USER, payload: createUser.user });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleGitHubRegister = () => {
    console.log("Register with GitHub clicked");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleEmailRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* --- Photo URL Input --- */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="photoURL"
            >
              Photo URL
            </label>
            <input
              type="text" // অথবা type="url" ব্যবহার করতে পারেন
              name="photoURL"
              id="photoURL"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500 font-semibold">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="space-y-3">
          <button
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition duration-300"
          >
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>
          <button
            onClick={handleGitHubRegister}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition duration-300"
          >
            <GitHubIcon />
            <span>Continue with GitHub</span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
