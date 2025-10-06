import { memo, useEffect, useState, useCallback } from "react";
import NestedMaskedComponent from "../templates/NestedMaskedComponent";
import { LuSettings2 } from "react-icons/lu";
import { TbSettings2 } from "react-icons/tb";

import mainImage1 from "../assets/main-image-1.jpeg";
import miniImage1 from "../assets/mini-image-1.webp";
import justiceImage from "../assets/justice-logo.png";
import TopRightNestedMaskedComponent from "../templates/TopRightNestedMaskedComponent";
import MobileHeroSection from "../templates/MobileHeroSection";
import MobilePerformanceCard from "../templates/MobilePerformanceCard";

export const useSmallDivWidth = () => {
  const [smallDivWidth, setSmallDivWidth] = useState(0);

  const updateWidth = useCallback((width) => {
    setSmallDivWidth(width);
  }, []);

  return [smallDivWidth, updateWidth];
};

const MainContents = memo(() => {
  const [smallDivWidth, setSmallDivWidth] = useSmallDivWidth();
  const [isLoaded, setIsLoaded] = useState(false);
  const [systemStatusVisible, setSystemStatusVisible] = useState(false);
  const [systemStatusCount, setSystemStatusCount] = useState(0);
  const [progressFilled, setProgressFilled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const t = setTimeout(() => setSystemStatusVisible(true), 350);
      return () => clearTimeout(t);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (systemStatusVisible) {
      const target = 35;
      const duration = 1500;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        setSystemStatusCount(value);
        if (progress < 1) requestAnimationFrame(step);
        else setSystemStatusCount(target);
      };
      requestAnimationFrame(step);
    }
  }, [systemStatusVisible]);

  useEffect(() => {
    if (systemStatusVisible) {
      const t = setTimeout(() => setProgressFilled(true), 300);
      return () => clearTimeout(t);
    } else {
      setProgressFilled(false);
    }
  }, [systemStatusVisible]);

  return (
    <div
      className={`pt-5 transition-all duration-1000 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Mobile Layout */}
      <div className="block xl:hidden">
        <div className="space-y-4 mt-6">
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <NestedMaskedComponent
              setSmallDivWidth={setSmallDivWidth}
              radius={30}
              curve={40}
              offsetX={120}
              offsetY={80}
              height={400}
              showContent={true}
              isMobile={true}
            />
          </div>
          <div
            className={`transition-all duration-700 delay-300 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <MobilePerformanceCard />
          </div>
          <div
            className={`transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <MobileHeroSection />
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="rounded-[30px] overflow-hidden h-32">
              <img
                src={justiceImage}
                className="w-full h-full object-contain scale-75"
              />
            </div>
            <div className="rounded-[30px] overflow-hidden h-32">
              <img
                src={miniImage1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden xl:block">
        <div className="flex flex-col xl:flex-row gap-2 relative">
          <div
            className={`flex flex-col w-full xl:w-2/7 min-w-[320px] gap-2 order-2 xl:order-1 transition-all duration-800 delay-100 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative">
              <div
                id="left-main"
                className="w-full bg-background rounded-[40px] rounded-bl-[220px] overflow-hidden h-[400px] sm:h-[600px] xl:h-[720px] flex flex-col"
              >
                <div className=" flex-shrink-0">
                  <div className="flex justify-between">
                    <div className="p-4 sm:p-6 lg:p-8 w-48 sm:w-56 lg:w-64">
                      <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                        The
                        <br />
                        Automaton
                      </h1>
                    </div>
                    <div className="p-4 sm:p-6 xl:p-2 flex items-start">
                      <span className="bg-primary text-black rounded-bl-[70px] rounded-tr-[40px] rounded-tl-3xl rounded-br-3xl text-3xl p-7">
                        01
                      </span>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-t-[50px] flex-1 relative">
                  <img
                    src={mainImage1}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    alt="Main automaton image"
                    style={{
                      transform: "scale(2.5) translate(-17%, 53%)",
                      transformOrigin: "0% 100%",
                    }}
                  />
                </div>
                <div className="absolute bottom-5 right-5 w- h-60 rounded-3xl overflow-hidden">
                  <TopRightNestedMaskedComponent
                    height={230}
                    radius={50}
                    curve={35}
                    offsetX={-10}
                    offsetY={-10}
                    showContent={true}
                    width={230}
                  />
                </div>
                <div className="absolute hover:opacity-80 duration-200 transition-opacity cursor-pointer bottom-0 text-xl rotate-90 bg-black text-white rounded-bl-[15px] rounded-tr-[15px] rounded-tl-[21px] p-5 rounded-br-[40px]">
                  <LuSettings2 />
                </div>
              </div>
            </div>

            <div className="bg-background w-full flex rounded-[40px] justify-center py-6 gap-3">
              <div
                className="bg-white w-full mx-5 rounded-[30px] px-6 py-16 flex flex-col items-center gap-6 transition-all duration-700"
                style={{
                  opacity: systemStatusVisible ? 1 : 0,
                  transform: systemStatusVisible
                    ? "translateY(0)"
                    : "translateY(12px)",
                }}
              >
                <div className="flex justify-start items-start w-full">
                  <h3
                    className={`text-xl transition-all duration-500 delay-200 ${
                      systemStatusVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    }`}
                  >
                    System Status
                  </h3>
                </div>
                <div
                  className={`w-full transition-opacity duration-500 delay-300 ${
                    systemStatusVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex justify-between text-xs text-gray-400 mx-2">
                    <span>00</span>
                    <span>41</span>
                    <span>82</span>
                  </div>
                  <div className="w-full bg-black border-4 flex items-center rounded-full">
                    <div
                      className="bg-white h-4 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: progressFilled ? "42%" : "0%" }}
                    ></div>
                  </div>
                </div>
                <div
                  className={`transition-all duration-500 delay-600 ${
                    systemStatusVisible
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <p className="text-gray-400 text-sm text-center">
                    Core Output
                  </p>
                  <div className="flex">
                    <div className="relative w-29 h-24 text-6xl flex items-center justify-center">
                      <div className="absolute w-full h-full flex items-end justify-end font-bold">
                        82
                      </div>
                      <div
                        className="absolute w-full h-full flex items-start justify-start font-bold"
                        style={{
                          clipPath: "polygon(0 0, 85% 0, 0% 92%, 0 100%)",
                        }}
                      >
                        {systemStatusCount}
                      </div>
                      <div
                        className="bg-black absolute mt-1 w-full h-full pointer-events-none"
                        style={{
                          clipPath: "polygon(84% 0, 83% 0, 0% 90%, 0 91%)",
                        }}
                      ></div>
                    </div>
                    <div className="items-center flex flex-col justify-center text-gray-400 text-sm mt-6">
                      <p>
                        Max
                        <br />
                        Output
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center 2xl:justify-end h-full">
                <div className="grid grid-cols-1 2xl:grid-cols-2 mr-4 gap-2 2xl:w-40 2xl:h-40 w-20">
                  <div className="bg-white w-full aspect-square rounded-2xl sm:rounded-3xl border border-gray-200" />
                  <div className="bg-black w-full aspect-square rounded-2xl sm:rounded-3xl" />
                  <div className="bg-secondary w-full aspect-square rounded-2xl sm:rounded-3xl" />
                  <div className="bg-primary w-full aspect-square rounded-2xl sm:rounded-3xl" />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`w-full xl:w-2/3 order-1 xl:order-2 relative transition-all duration-800 delay-200 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="text-white hover:opacity-80 duration-200 transition-opacity cursor-pointer bg-secondary absolute text-2xl py-7 pl-6 pr-7 rounded-tl-[40px] rounded-br-[60px] rounded-tr-[21px] top-0 z-10 rounded-bl-3xl">
              <TbSettings2 />
            </div>
            <NestedMaskedComponent
              setSmallDivWidth={setSmallDivWidth}
              radius={50}
              curve={60}
              offsetX={240}
              offsetY={170}
              height={720}
              showContent={true}
            />
            <div className="mt-2 space-y-2 h-102 flex">
              <div
                className="rounded-[40px] overflow-hidden"
                style={{ width: `calc(100% - ${smallDivWidth}px)` }}
              >
                <img
                  src={justiceImage}
                  className="w-full h-full scale-85 object-contain"
                  loading="lazy"
                  alt="Justice logo"
                />
              </div>
              <div className="rounded-[40px] overflow-hidden h-100">
                <img
                  src={miniImage1}
                  alt=""
                  className="w-full h-full scale-125 object-cover"
                  style={{ width: `${smallDivWidth}px` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainContents;
