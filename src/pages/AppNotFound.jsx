import React, { memo } from "react";
import { Link } from "react-router";
import NotFoundImage from "../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-center  bg-gray-50 rounded-xl  border-gray-200">
      <div className="mb-6">
        <img
          src={NotFoundImage}
          alt="App not found"
          className="w-64 h-auto rounded-lg opacity-80"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-700 mb-2">
        Sorry, No Apps Found
      </h2>
      <Link to="/all-apps" className="bg-blue-500 px-5 py-2 text-white rounded">
        Go to All Apps
      </Link>
    </div>
  );
};

export default memo(AppNotFound);
