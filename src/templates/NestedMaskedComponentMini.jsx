import { useMemo, memo } from "react";
import { CiHeart, CiStar, CiBookmarkMinus } from "react-icons/ci";

const NestedMaskedComponentMini = memo(
  ({
    radius = 40,
    curve = 43,
    offsetX = 15,
    offsetY = 15,
    width = 400,
    height = 210,
    showContent = true,
    isMobile = false,
    date = new Date(),
  }) => {
    const currentDate = useMemo(() => {
      const dateObj = new Date(date);
      const month = dateObj.toLocaleDateString("en-US", { month: "short" });
      const year = dateObj.getFullYear();
      const day = dateObj.getDate().toString().padStart(2, "0");

      return {
        month,
        year,
        day,
        monthYear: `${month}, ${year}`,
      };
    }, [date]);

    if (isMobile) {
      return (
        <div className="relative inline-block w-full min-w-[190px] xs:min-w-[240px] max-w-[280px]">
          <div className="bg-white/65 backdrop-blur-sm rounded-[25px] p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-col items-center">
                <span className="text-xs text-gray-500">
                  {currentDate.monthYear}
                </span>
                <span className="text-4xl font-bold text-gray-800">
                  {currentDate.day}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-full px-5 py-3">
              <div className="flex justify-between items-center">
                <div className="flex flex-col items-center">
                  <CiHeart className="text-lg text-gray-600 mb-1" />
                  <span className="text-[11px] sm:text-xs text-gray-600">
                    36.5k
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <CiStar className="text-lg text-gray-600 mb-1" />
                  <span className="text-[11px] sm:text-xs text-gray-600">
                    12.3k
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <CiBookmarkMinus className="text-lg text-gray-600 mb-1" />
                  <span className="text-[11px] sm:text-xs text-gray-600">
                    8.9k
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile-specific */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 6V2H8" />
                <path d="M15 11v2" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
                <path d="M9 11v2" />
              </svg>
            </div>
          </div>
        </div>
      );
    }

    // Desktop version
    const responsiveWidth = width;
    const responsiveHeight = height;
    const responsiveRadius = radius;
    const responsiveCurve = curve;
    const responsiveOffsetX = offsetX;
    const responsiveOffsetY = offsetY;

    const maskStyles = useMemo(() => {
      return {
        "--r": `${responsiveRadius}px`,
        "--s": `${responsiveCurve}px`,
        "--x": `${responsiveOffsetX}px`,
        "--y": `${responsiveOffsetY}px`,
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
        width: `${responsiveWidth}px`,
        height: `${responsiveHeight}px`,
      };
    }, [
      responsiveRadius,
      responsiveCurve,
      responsiveOffsetX,
      responsiveOffsetY,
      responsiveWidth,
      responsiveHeight,
    ]);

    const contentStyles = useMemo(() => {
      const contentWidth = responsiveOffsetX + responsiveRadius * 2;
      const contentHeight = responsiveOffsetY + responsiveRadius * 2;

      return {
        width: `${contentWidth - 5}px`,
        height: `${contentHeight - 5}px`,
        bottom: 0,
        right: 0,
      };
    }, [responsiveRadius, responsiveOffsetX, responsiveOffsetY]);

    return (
      <div className="relative inline-block">
        <div
          className="bg-white/85 rounded-[50px] rounded-tl-[250px]"
          style={{
            ...maskStyles,
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="w-full h-full flex items-end p-2 justify-start text-gray-800 font-semibold">
            <div>
              <div className="text-xl flex justify-between items-center w-full mb-7 ml-20">
                <span className="ml-6">Engagements</span>
                <div className="flex flex-col items-center">
                  <span className="text-xs">{currentDate.monthYear}</span>
                  <span className="text-5xl">{currentDate.day}</span>
                </div>
              </div>
              <div className="flex justify-between w-full mr-35 bg-white rounded-full px-8 py-5">
                <div className="flex gap-2 items-center justify-center flex-col">
                  <CiHeart className="text-2xl" />
                  <span className="text-xs">36.5k</span>
                </div>
                <div className="flex gap-2 items-center justify-center flex-col">
                  <CiStar className="text-2xl" />
                  <span className="text-xs">12.3k</span>
                </div>
                <div className="flex gap-2 items-center justify-center flex-col">
                  <CiBookmarkMinus className="text-2xl" />
                  <span className="text-xs">8.9k</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showContent && (
          <div
            className="absolute bg-secondary bg-opacity-30 rounded-full flex items-center justify-center text-white font-semibold"
            style={contentStyles}
          >
            <span className="text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bot-message-square-icon lucide-bot-message-square"
              >
                <path d="M12 6V2H8" />
                <path d="M15 11v2" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
                <path d="M9 11v2" />
              </svg>
            </span>
          </div>
        )}
      </div>
    );
  }
);

export default NestedMaskedComponentMini;
