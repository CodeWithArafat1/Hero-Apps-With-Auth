import React, { memo } from "react";
import homePageContent from "../data/homeData";

const StatsSection = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-purple-600 to-purple-400 text-white py-10 sm:py-16 rounded-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            {homePageContent.statsSection.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {homePageContent.statsSection.stats.map((status) => {
              return (
                <div key={status.id}>
                  <p className="text-5xl sm:text-6xl font-bold tracking-tight">
                    {status.value}
                  </p>
                  <p className="text-lg text-purple-200 mt-2">{status.label}</p>
                  <p className="text-sm text-purple-300 mt-1">
                    {status.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(StatsSection);
