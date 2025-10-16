import { useAppContext } from "../contexts/context";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import { Link } from "react-router";
import formatNumber from "../utilities/formatNumber";
import { memo } from "react";

const TrendingApps = () => {
  const { displayData } = useAppContext();
  const first8Data = displayData.slice(0, 8);
  return (
    <div className="bg-slate-50 py-16 sm:py-20 container mx-auto">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Trending Apps
          </h2>
          <p className="mt-3 text-lg text-slate-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {first8Data.map((app) => {
            return (
              <Link to="/all-apps" key={app.id}>
                <div className="bg-white rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center justify-center bg-slate-200 rounded-lg">
                    <img src={app.image} alt="" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800 ">
                    {app.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-green-600">
                      <figure className="w-4">
                        <img src={downloadIcon} alt="" />
                      </figure>
                      <span className="text-sm font-medium">
                        {formatNumber(app.downloads)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-orange-100 text-orange-600 px-2.5 py-1 rounded-full">
                      <figure className="w-4">
                        <img src={starIcon} alt="" />
                      </figure>
                      <span className="text-sm font-semibold">
                        {app.ratingAvg}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            className="text-center py-2 px-5 bg-gradient-to-r from-purple-800 to-purple-400 text-white rounded-md font-bold"
            to="/all-apps"
          >
            All Apps
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(TrendingApps);
