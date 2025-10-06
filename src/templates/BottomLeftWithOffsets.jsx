import { useState, useMemo } from "react";

const BottomLeftWithOffsets = ({
  radius = 20,
  curve = 55,
  offsetX = -30,
  offsetY = -20,
  width = 160,
  height = 170,
}) => {
  const maskStyles = useMemo(() => {
    return {
      "--r": `${radius}px`,
      "--s": `${curve}px`,
      "--x": `${offsetX}px`,
      "--y": `${offsetY}px`,
      "--_m": `/calc(2*var(--r)) calc(2*var(--r)) radial-gradient(#000 70%, #0000 72%)`,
      "--_g": `conic-gradient(from 180deg at var(--r) calc(100% - var(--r)), #0000 25%, #000 0)`,
      "--_d": `calc(var(--s) + var(--r))`,
      WebkitMask: `
        calc(var(--_d) + var(--x)) 100% var(--_m),
        0% calc(100% - var(--_d) - var(--y)) var(--_m),
        radial-gradient(var(--s) at 0% 100%, #0000 99%, #000 calc(100% + 1px))
          calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)),
        var(--_g) calc(var(--_d) + var(--x)) 100%,
        var(--_g) 0% calc(-1*var(--_d) - var(--y))
      `,
      mask: `
        calc(var(--_d) + var(--x)) 100% var(--_m),
        0% calc(100% - var(--_d) - var(--y)) var(--_m),
        radial-gradient(var(--s) at 0% 97%, #0000 100%, #000 calc(100% + 1px))
          calc(var(--r) + var(--x)) calc(-1*var(--r) - var(--y)),
        var(--_g) calc(var(--_d) + var(--x)) 100%,
        var(--_g) 0% calc(-1*var(--_d) - var(--y))
      `,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      width: `${width}px`,
      height: `${height}px`,
    };
  }, [radius, curve, offsetX, offsetY, width, height]);
  return (
    <div className="relative inline-block">
      <div className="rounded-[40px] bg-white" style={maskStyles}></div>
    </div>
  );
};
export default BottomLeftWithOffsets;
