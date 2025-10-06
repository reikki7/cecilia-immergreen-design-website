import { useMemo, useState, useEffect } from "react";

import NestedMaskedComponentMini from "./NestedMaskedComponentMini";

import { BsCaretRight } from "react-icons/bs";
import { IoIosNotificationsOutline, IoMdMoon } from "react-icons/io";
import { IoWalletOutline, IoSunny, IoGridOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import upgradeIcon from "../assets/upgrade-icon.svg";
import mainImage2 from "../assets/main-image-2.webp";

const NestedMaskedComponent = ({
  radius = 21,
  curve = 24,
  offsetX = 144,
  offsetY = 95,
  height = 300,
  showContent = true,
  setSmallDivWidth,
  isMobile = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const responsiveRadius = isMobile ? radius * 0.6 : radius;
  const responsiveCurve = isMobile ? curve * 0.6 : curve;
  const responsiveOffsetX = isMobile ? offsetX * 0.5 : offsetX;
  const responsiveOffsetY = isMobile ? offsetY * 0.5 : offsetY;
  const responsiveHeight = isMobile ? height : height;

  const maskStyles = useMemo(() => {
    const baseRadius = responsiveRadius;
    const baseCurve = responsiveCurve;
    const baseOffsetX = responsiveOffsetX;
    const baseOffsetY = responsiveOffsetY;

    return {
      "--r": `${baseRadius}px`,
      "--s": `${baseCurve}px`,
      "--x": `${baseOffsetX}px`,
      "--y": `${baseOffsetY}px`,
      "--_m": `/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%, #0000 72%)`,
      "--_g": `conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)), #0000 25%, #000 0)`,
      "--_d": `calc(var(--s) + var(--r))`,
      WebkitMask: `
        calc(100% - var(--_d) - var(--x)) 100% var(--_m),
        100% calc(100% - var(--_d) - var(--y)) var(--_m),
        radial-gradient(var(--s) at 100% 100%, #0000 99%, #000 calc(100% + 1px))
          calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
        var(--_g) calc(-1*var(--_d) - var(--x)) 100%,
        var(--_g) 100% calc(-1*var(--_d) - var(--y))
      `,
      mask: `
        calc(100% - var(--_d) - var(--x)) 100% var(--_m),
        100% calc(100% - var(--_d) - var(--y)) var(--_m),
        radial-gradient(var(--s) at 100% 100%, #0000 99%, #000 calc(100% + 1px))
          calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
        var(--_g) calc(-1*var(--_d) - var(--x)) 100%,
        var(--_g) 100% calc(-1*var(--_d) - var(--y))
      `,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      width: "100%",
      height: `${responsiveHeight}px`,
    };
  }, [
    responsiveRadius,
    responsiveCurve,
    responsiveOffsetX,
    responsiveOffsetY,
    responsiveHeight,
  ]);

  const contentWidth = useMemo(
    () => responsiveOffsetX + responsiveRadius * 2,
    [responsiveOffsetX, responsiveRadius]
  );
  const contentHeight = useMemo(
    () => responsiveOffsetY + responsiveRadius * 2,
    [responsiveOffsetY, responsiveRadius]
  );

  useEffect(() => {
    setSmallDivWidth(contentWidth);
  }, [contentWidth, setSmallDivWidth]);

  const contentMaskStyles = useMemo(() => {
    const baseStyles = {
      "--r": `${responsiveRadius}px`,
      "--s": `${responsiveCurve}px`,
      "--x": `${responsiveOffsetX - (isMobile ? 125 : 250)}px`,
      "--y": `${responsiveOffsetY - (isMobile ? 88 : 175)}px`,
      "--_m": `/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%, #0000 72%)`,
      "--_g": `conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)), #0000 25%, #000 0)`,
      "--_d": `calc(var(--s) + var(--r))`,
      width: `${contentWidth}px`,
      height: `${contentHeight}px`,
      bottom: 0,
      right: 0,
    };

    if (!isMobile) {
      return {
        ...baseStyles,
        WebkitMask: `
          calc(100% - var(--_d) - var(--x)) 100% var(--_m),
          100% calc(100% - var(--_d) - var(--y)) var(--_m),
          radial-gradient(var(--s) at 100% 100%, #0000 99%, #000 calc(100% + 1px))
            calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
          var(--_g) calc(-1*var(--_d) - var(--x)) 100%,
          var(--_g) 100% calc(-1*var(--_d) - var(--y))
        `,
        mask: `
          calc(100% - var(--_d) - var(--x)) 100% var(--_m),
          100% calc(100% - var(--_d) - var(--y)) var(--_m),
          radial-gradient(var(--s) at 100% 100%, #0000 99%, #000 calc(100% + 1px))
            calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
          var(--_g) calc(-1*var(--_d) - var(--x)) 100%,
          var(--_g) 100% calc(-1*var(--_d) - var(--y))
        `,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      };
    }

    return baseStyles;
  }, [
    responsiveRadius,
    responsiveCurve,
    responsiveOffsetX,
    responsiveOffsetY,
    contentWidth,
    contentHeight,
    isMobile,
  ]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-98"
      }`}
    >
      <div className="space-y-8">
        <div>
          <div className="relative inline-block">
            <div
              className={`bg-primary ${
                isMobile
                  ? "rounded-[20px] rounded-tl-[120px]"
                  : "rounded-[40px] rounded-tl-[250px]"
              }`}
              style={maskStyles}
            >
              <img
                src={mainImage2}
                className={
                  isMobile
                    ? "scale-150 -translate-x-0 translate-y-20"
                    : "scale-200 -translate-x-30 translate-y-130"
                }
              />
              <div
                className={`absolute top-0 right-0 ${
                  isMobile ? "p-4" : "p-8"
                } transition-all duration-500 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2"
                }`}
              >
                <button
                  className={`bg-white cursor-pointer text-sm rounded-lg bg-opacity-20 backdrop-blur-md ${
                    isMobile ? "px-3 py-2" : "px-6 py-3"
                  } flex items-center gap-2 group hover:bg-opacity-30 transition-all duration-200`}
                >
                  <span className={isMobile ? "text-xs" : ""}>
                    Next: Ouro Kronii
                  </span>
                  <BsCaretRight
                    className={`group-hover:translate-x-1 translate-x-0 duration-200 transition-transform ${
                      isMobile ? "text-sm" : "text-lg"
                    }`}
                  />
                </button>
              </div>
              <div
                className={`absolute bottom-0 left-0 ${
                  isMobile ? "p-4" : "p-8"
                } transition-all duration-500 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <NestedMaskedComponentMini isMobile={isMobile} />
              </div>
            </div>
            {showContent && (
              <div
                className={`absolute bg-secondary ${
                  isMobile
                    ? "rounded-[15px] px-3 py-4"
                    : "rounded-[30px] lg:rounded-[40px] xl:rounded-[50px] px-6 py-8 lg:px-8 lg:py-10 xl:px-10 xl:py-14"
                } text-white font-semibold transition-all duration-600 delay-200 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={contentMaskStyles}
              >
                <div
                  className={`flex ${
                    isMobile ? "flex-col gap-3" : "justify-between items-start"
                  }`}
                >
                  <div className={isMobile ? "flex-1" : ""}>
                    <h2
                      className={`leading-tight ${
                        isMobile
                          ? "text-lg"
                          : "text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
                      }`}
                    >
                      SF Pro
                      <br />
                      <span className="hidden xl:inline">Display</span>
                    </h2>
                    <div
                      className={`flex ${
                        isMobile ? "gap-3 mt-3" : "gap-4 lg:gap-6 mt-6 lg:mt-8"
                      }`}
                    >
                      <IoIosNotificationsOutline
                        size={isMobile ? 16 : 20}
                        className={`${
                          isMobile ? "w-4 h-4" : "lg:w-6 lg:h-6"
                        } flex-shrink-0`}
                      />
                      <IoWalletOutline
                        size={isMobile ? 16 : 20}
                        className={`${
                          isMobile ? "w-4 h-4" : "lg:w-6 lg:h-6"
                        } flex-shrink-0`}
                      />
                      <IoGridOutline
                        size={isMobile ? 16 : 20}
                        className={`${isMobile ? "w-4 h-4" : "lg:w-6 lg:h-6"}`}
                      />
                      <CiSearch
                        size={isMobile ? 16 : 20}
                        className={`${
                          isMobile ? "hidden" : "lg:w-6 lg:h-6"
                        } flex-shrink-0`}
                      />
                    </div>
                  </div>
                  <div className="xl:flex hidden flex-col gap-3 lg:gap-5">
                    <IoSunny
                      size={20}
                      className="lg:w-6 lg:h-6 flex-shrink-0"
                    />
                    <IoMdMoon
                      size={20}
                      className="lg:w-6 lg:h-6 rotate-90 flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            )}
            <div
              className={`absolute bg-black bottom-0 right-0 ${
                isMobile
                  ? "hidden w-12 h-12 rounded-tl-[25px] rounded-tr-[10px] rounded-bl-[8px] rounded-br-[25px]"
                  : "w-23 h-24 rounded-tl-[50px] rounded-tr-[20px] rounded-bl-[17px] rounded-br-[50px]"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NestedMaskedComponent;
