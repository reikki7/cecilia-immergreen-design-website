import { useState, useMemo } from "react";

const BottomRightWithOffsets = ({
  radius = 20,
  curve = 55,
  offsetX = -30,
  offsetY = -13,
  width = 170,
  height = 110,
}) => {
  const maskStyles = useMemo(() => {
    return {
      "--r": `${radius}px`,
      "--s": `${curve}px`,
      "--x": `${offsetX}px`,
      "--y": `${offsetY}px`,
      "--_m": `/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%, #0000 72%)`,
      "--_g": `conic-gradient(from 90deg at calc(100% - var(--r)) calc(100% - var(--r)), #0000 25%, #000 0)`,
      "--_d": `calc(var(--s) + var(--r))`,
      WebkitMask: `
        calc(100% - var(--_d) - var(--x)) 100% var(--_m),
        100% calc(100% - var(--_d) - var(--y)) var(--_m),
        radial-gradient(var(--s) at 98.5% 98.5%, #0000 99%, #000 calc(100% + 1px))
          calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
        var(--_g) calc(-1*var(--_d) - var(--x)) 100%,
        var(--_g) 100% calc(-1*var(--_d) - var(--y))
      `,
      mask: `
        calc(100% - var(--_d) - var(--x)) 100% var(--_m),
        100% calc(100% - var(--_d) - var(--y)) var(--_m),
        radial-gradient(var(--s) at 98.5% 98.5%, #0000 99%, #000 calc(100% + 1px))
          calc(-1*var(--r) - var(--x)) calc(-1*var(--r) - var(--y)),
        var(--_g) calc(-1*var(--_d) - var(--x)) 100%,
        var(--_g) 100% calc(-1*var(--_d) - var(--y))
      `,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      width: `${width}px`,
      height: `${height}px`,
    };
  }, [radius, curve, offsetX, offsetY, width, height]);

  return (
    <div className="relative inline-block">
      <div className="rounded-[40px] bg-white" style={maskStyles}>
        <div className="flex items-center justify-start p-8 gap-2 h-full">
          <div className="flex items-start justify-center gap-2">
            <span className="text-4xl">25</span>
            <span className="text-gray-400">protocols</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomRightWithOffsets;
