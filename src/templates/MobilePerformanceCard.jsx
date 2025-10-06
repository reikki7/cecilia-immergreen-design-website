import { useState, useEffect } from "react";

const MobilePerformanceCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const targetValue = 35;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500;
      const increment = targetValue / (duration / 16);
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(counter);
    }
  }, [isVisible]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="p-4 flex items-center gap-4">
        <div className="flex-1">
          <h3
            className={`text-lg font-semibold mb-2 transition-all duration-500 delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            System Status
          </h3>
          <div
            className={`flex justify-between text-xs text-gray-400 mb-1 transition-all duration-500 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span>00</span>
            <span>41</span>
            <span>82</span>
          </div>
          <div
            className={`w-full bg-black border-2 flex items-center rounded-full h-3 transition-all duration-500 delay-400 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="bg-white h-2 rounded-full transition-all duration-1000 delay-500"
              style={{ width: isVisible ? "42%" : "0%" }}
            ></div>
          </div>
        </div>
        <div
          className={`text-center transition-all duration-500 delay-600 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <p className="text-gray-400 text-xs">Core Output</p>
          <div className="relative w-16 h-16 text-3xl flex items-center justify-center">
            <div className="absolute w-full h-full flex items-end justify-end font-bold">
              82
            </div>
            <div
              className="absolute w-full h-full flex items-start justify-start font-bold"
              style={{
                clipPath: "polygon(0 0, 85% 0, 0% 92%, 0 100%)",
              }}
            >
              {count}
            </div>
            <div
              className="bg-black absolute w-full h-full pointer-events-none"
              style={{
                clipPath: "polygon(84% 0, 83% 0, 0% 90%, 0 91%)",
              }}
            ></div>
          </div>
          <p className="text-gray-400 text-xs mt-1">
            Max
            <br />
            Output
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobilePerformanceCard;
