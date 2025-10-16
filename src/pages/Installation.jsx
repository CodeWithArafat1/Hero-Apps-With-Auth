import React, { memo, useEffect } from "react";
import InstalledAppCard from "../components/InstalledAppCard";
import { useAppContext } from "../contexts/context";
import { SET_LOCAL } from "../reducer/reducer";
import { useGetLocal } from "./hooks/useGetLocal";

const Installation = () => {
  const { dispatch, savedLocal, isSelected } = useAppContext();
  const { handelUnstall, handelSort } = useGetLocal();

  useEffect(() => {
    const getLocal = localStorage.getItem("installedApps");
    if (getLocal) {
      const savedApp = JSON.parse(getLocal);
      dispatch({ type: SET_LOCAL, payload: savedApp });
    }
  }, [dispatch]);

  return (
    <div className="bg-slate-800 py-30  px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Your Installed Apps
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">
              {`(${savedLocal.length})`} Apps Found
            </h2>
            <select
              value={isSelected}
              onChange={handelSort}
              className="flex items-center gap-2 text-gray-700 bg-gray-100 px-4 py-2 rounded-md text-sm font-medium border-transparent outline-0 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="def" disabled>
                Sort By Size
              </option>
              <option value="download_asc">Low-&gt;High</option>
              <option value="download_desc">High-&gt;Low</option>
            </select>
          </div>

          {savedLocal.length === 0 ? (
            <h1 className="text-center text-2xl my-10 font-bold text-gray-400">
              No App Installed
            </h1>
          ) : (
            <div className="mt-6 space-y-4">
              {savedLocal.map((app) => (
                <InstalledAppCard
                  handelUnstall={handelUnstall}
                  key={app.id}
                  app={app}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Installation);
