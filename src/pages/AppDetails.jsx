import { Download, Star, MessageSquareText } from "lucide-react";
import { Link, useParams } from "react-router";
import formatNumber from "../utilities/formatNumber";
import { useAppContext } from "../contexts/context";
import SetLoading from "../components/SetLoading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { IS_EXISTING } from "../reducer/reducer";
import { memo, useEffect } from "react";
import { useGetLocal } from "./hooks/useGetLocal";
import AppNotFound from "./AppNotFound";

const AppDetails = () => {
  const { displayData, dispatch, isExisting, loading } = useAppContext();
  const { id } = useParams();
  const { handelInstall } = useGetLocal();

  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("installedApps")) || [];
    const isExisting = existing.some((item) => item.id === parseInt(id));
    dispatch({ type: IS_EXISTING, payload: isExisting });
  }, [dispatch, id]);

  if (loading) {
    return <SetLoading />;
  }
  const newObj = displayData.find((app) => app.id === parseInt(id));

  if (!newObj) {
    return <AppNotFound />;
  }

  const chartData = newObj.ratings.map((rating) => {
    return {
      name: rating.name,
      count: rating.count,
    };
  });

  return (
    <>
      <div className="bg-slate-100 py-20 overflow-x-hidden ">
        <div className="max-w-4xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-sm ">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-md border border-gray-100">
              <img
                src={newObj.image}
                alt={newObj.title}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>

            <div className="flex-grow w-full text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {newObj.title}
              </h1>
              <div className="mt-1 text-sm flex gap-2 text-gray-500 justify-center sm:justify-start">
                <h1>Developed by</h1>
                <a href="#" className="text-blue-500 font-medium mr-2">
                  {newObj.companyName}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-10 ">
                <div className="flex items-center gap-3 text-center sm:text-left ">
                  <Download className="text-green-500" size={28} />
                  <div>
                    <p className="text-xs text-gray-500">Downloads</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">
                      {formatNumber(newObj.downloads)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-center sm:text-left">
                  <Star
                    className="text-orange-400"
                    size={28}
                    fill="currentColor"
                  />
                  <div>
                    <p className="text-xs text-gray-500">Average Ratings</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">
                      {newObj.ratingAvg}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-center sm:text-left">
                  <MessageSquareText className="text-purple-500" size={28} />
                  <div>
                    <p className="text-xs text-gray-500">Total Reviews</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-800">
                      {formatNumber(newObj.reviews)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  disabled={isExisting}
                  onClick={() => handelInstall(newObj)}
                  className="w-full disabled:bg-gray-600 cursor-pointer disabled:cursor-not-allowed sm:w-auto bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                >
                  {isExisting
                    ? "Installed"
                    : `Install ${
                        newObj.size > 1024
                          ? `${(newObj.size / 1024).toFixed(1)} GB`
                          : `${newObj.size} MB`
                      }`}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ width: "90%", height: 300 }}
          className="overflow-x-hidden"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              width={1000}
              height={300}
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                xAxisId="left"
                orientation="bottom"
                stroke="#8884d8"
              />
              <XAxis
                type="number"
                xAxisId="right"
                orientation="top"
                stroke="#82ca9d"
              />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar xAxisId="left" dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-20 px-5">
          <h1 className="text-2xl font-bold">Description</h1>

          <p>{newObj.description}</p>
        </div>
      </div>
    </>
  );
};

export default memo(AppDetails);
