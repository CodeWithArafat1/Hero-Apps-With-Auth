import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import { Link } from "react-router";
import formatNumber from "../utilities/formatNumber";
import { memo } from "react";

const AppsCard = ({ app }) => {
  return (
    <>
      <Link to={`/product-details/${app.id}`}>
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
    </>
  );
};

export default memo(AppsCard);
