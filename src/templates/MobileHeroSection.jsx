import { useState, useEffect } from "react";
import { LuSettings2 } from "react-icons/lu";
import mainImage1 from "../assets/main-image-1.jpeg";
import TopRightNestedMaskedComponentMobile from "./TopRightNestedMaskedComponentMobile";

const MobileHeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative transition-all duration-800 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="bg-background rounded-[30px] rounded-bl-[120px] overflow-hidden h-[420px] flex flex-col">
        <div
          className={`flex justify-between p-4 transition-all duration-600 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="w-32">
            <h1 className="font-bold text-3xl leading-tight">
              The
              <br />
              Automaton
            </h1>
          </div>
          <div className="flex items-start">
            <span className="bg-primary text-black rounded-bl-[40px] rounded-tr-[20px] rounded-tl-xl rounded-br-xl text-xl p-4 transform hover:scale-105 transition-transform duration-200">
              01
            </span>
          </div>
        </div>
        <div
          className={`overflow-hidden rounded-t-[30px] flex-1 relative transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={mainImage1}
            className="w-full object-contain transition-transform duration-1000"
            style={{
              transform: isLoaded
                ? "scale(1) translate(0%, -10%)"
                : "scale(1.1) translate(0%, -8%)",
              transformOrigin: "right center",
            }}
          />
          <div
            className={`absolute bottom-5 right-5 transition-all duration-500 delay-700 ${
              isLoaded
                ? "opacity-100 translate-x-0 translate-y-0"
                : "opacity-0 translate-x-4 translate-y-4"
            }`}
          >
            <TopRightNestedMaskedComponentMobile
              width={190}
              height={150}
              radius={50}
              curve={35}
              offsetX={-30}
              offsetY={-30}
              showContent={true}
            />
          </div>
        </div>
        <button
          className={`absolute cursor-pointer bottom-0 left-0 text-lg bg-black text-white rounded-br-[10px] rounded-tl-[10px] rounded-tr-[15px] p-3 rounded-bl-[25px] transition-all duration-300 delay-600 hover:scale-110 ${
            isLoaded
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 -translate-x-2 translate-y-2"
          }`}
        >
          <LuSettings2 className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default MobileHeroSection;
