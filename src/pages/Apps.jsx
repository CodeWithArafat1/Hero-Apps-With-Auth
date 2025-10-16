import React, { memo, useTransition } from "react";
import { Search } from "lucide-react";
import AppsCard from "../components/AppsCard";
import { useAppContext } from "../contexts/context";
import { SEARCH_APP } from "../reducer/reducer";
import SetLoading from "../components/SetLoading";

const Apps = () => {
  const { data, displayData, dispatch, loading } = useAppContext();
  const [isPending, startTransition] = useTransition();
  const handelSearch = (e) => {
    const qry = e.target.value.trim().toLowerCase();
    startTransition(() => {
      const searchedData = data.filter((app) =>
        app.title.toLowerCase().includes(qry)
      );

      dispatch({ type: SEARCH_APP, payload: searchedData });
    });
  };
  return (
    <>
      <div className="bg-white py-30 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our All Applications
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Explore All Apps on the Market developed by us. We code for
              Millions
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <p className="text-xl font-medium text-gray-700">
              {`(${displayData.length})`} Apps Found
            </p>

            <div className="relative w-full md:w-auto min-w-[250px] max-w-sm">
              <input
                onChange={handelSearch}
                type="text"
                placeholder="Search Apps"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {isPending && <SetLoading />}

          {loading ? (
            <SetLoading />
          ) : displayData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[calc(100vh-381px)]">
              {displayData.map((app) => {
                return <AppsCard key={app.id} app={app} />;
              })}
            </div>
          ) : (
            <div className="text-center py-20 min-h-[calc(100vh-381px)] flex flex-col justify-center items-center">
              <h2 className="text-2xl font-semibold text-gray-500">
                App Not Found
              </h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(Apps);
