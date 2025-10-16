import React, { memo } from "react";
import { Link } from "react-router";
import NotFoundImage from "../assets/error-404.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="mb-8 max-w-md w-full">
        <img
          src={NotFoundImage}
          alt="Page Not Found"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>

      <p className="text-lg text-gray-700 mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go to Home page
      </Link>
    </div>
  );
};

export default memo(NotFound);
