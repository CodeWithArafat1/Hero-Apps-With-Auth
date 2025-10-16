import React, { memo } from "react";
import formatNumber from "../utilities/formatNumber";
import { Download, Star } from "lucide-react";
const InstalledAppCard = ({ app, handelUnstall }) => {
  return (
    <>
      <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md">
          <img src={app.image} alt="" />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-gray-800">{app.title}</h3>
          <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
            <span className="flex items-center gap-1 text-green-600">
              <Download size={14} /> {formatNumber(app.downloads)}
            </span>
            <span className="flex items-center gap-1 text-orange-500">
              <Star size={14} fill="currentColor" />{" "}
              {app.ratingAvg}
            </span>
            <span>{app.size > 1024 ? `${app.size} GB` : `${app.size} MB`}</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={() => handelUnstall(app.id)}
            className="bg-teal-500 text-white text-sm font-semibold px-4 py-1.5 rounded-md hover:bg-teal-600 transition-colors"
          >
            Uninstall
          </button>
        </div>
      </div>
    </>
  );
};

export default memo(InstalledAppCard);
