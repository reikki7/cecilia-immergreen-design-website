import { useMemo } from "react";

import { GoArrowUpRight } from "react-icons/go";

const TopRightNestedMaskedComponent = ({
  radius = 21,
  curve = 24,
  offsetX = 144,
  offsetY = 95,
  width = 400,
  height = 300,
  showContent = true,
}) => {
  const maskStyles = useMemo(() => {
    return {
      "--r": `${radius}px`,
      "--s": `${curve}px`,
      "--x": `${offsetX}px`,
      "--y": `${offsetY}px`,
      "--_m": `/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%, #0000 72%)`,
      "--_g": `conic-gradient(at calc(100% - var(--r)) var(--r), #0000 25%, #000 0)`,
      "--_d": `calc(var(--s) + var(--r))`,
      WebkitMask: `
        calc(100% - var(--_d) - var(--x)) 0 var(--_m),
        100% calc(var(--_d) + var(--y)) var(--_m),
        radial-gradient(var(--s) at 100% 0, #0000 99%, #000 calc(100% + 1px))
          calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)),
        var(--_g) calc(-1*var(--_d) - var(--x)) 0,
        var(--_g) 0 calc(var(--_d) + var(--y))
      `,
      mask: `
        calc(100% - var(--_d) - var(--x)) 0 var(--_m),
        100% calc(var(--_d) + var(--y)) var(--_m),
        radial-gradient(var(--s) at 100% 0, #0000 99%, #000 calc(100% + 1px))
          calc(-1*var(--r) - var(--x)) calc(var(--r) + var(--y)),
        var(--_g) calc(-1*var(--_d) - var(--x)) 0,
        var(--_g) 0 calc(var(--_d) + var(--y))
      `,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      width: `${width}px`,
      height: `${height}px`,
      backdropFilter: "blur(4px)",
    };
  }, [radius, curve, offsetX, offsetY, width, height]);

  const contentStyles = useMemo(() => {
    const contentWidth = offsetX + radius * 2;
    const contentHeight = offsetY + radius * 2;
    const size = Math.min(contentWidth, contentHeight);

    return {
      width: `${size - 25}px`,
      height: `${size - 25}px`,
      top: 0,
      right: 2,
    };
  }, [radius, curve, offsetX, offsetY]);

  return (
    <div className="relative inline-block">
      <div className="rounded-[60px] bg-white/80 px-8 py-10" style={maskStyles}>
        <p className="text-2xl">On going</p>
        <div className="flex items-start gap-1 mt-20">
          <span className="text-4xl">25</span>
          <span className="text-gray-400">protocols</span>
        </div>
      </div>
      {showContent && (
        <div
          className="absolute bg-black rounded-full flex items-center justify-center text-white hover:opacity-80 duration-200 transition-opacity cursor-pointer"
          style={contentStyles}
        >
          <span className="text-3xl font-bold">
            <GoArrowUpRight />
          </span>
        </div>
      )}
    </div>
  );
};
export default TopRightNestedMaskedComponent;
