import homePageContent from "../data/homeData";
import heroImg from "../assets/hero.png";
import StatsSection from "../components/StatsSection";
import TrendingApps from "../components/TrendingApps";
import { useAppContext } from "../contexts/context";
import SetLoading from "../components/SetLoading";
import { memo } from "react";

const Home = () => {
  const { loading } = useAppContext();
  return (
    <>
      <div className="bg-gray-50 pt-30 spx-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800">
            We Build <br />
            <span className="text-purple-600">Productive</span> Apps
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {homePageContent.heroSection.buttons.map((btn) => {
              return (
                <a
                  target="_blank"
                  key={btn.id}
                  href={btn.link}
                  className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 shadow-sm transition-shadow hover:shadow-md"
                >
                  <img
                    src={btn.iconAsset}
                    alt="Google Play icon"
                    className="h-6 w-6"
                  />
                  <span>{btn.text}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <img src={heroImg} alt="" />
        </div>
      </div>

      <StatsSection />

      {loading ? <SetLoading /> : <TrendingApps />}
    </>
  );
};

export default memo(Home);
