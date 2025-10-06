import { memo, useState } from "react";
import { CiSearch, CiBellOn } from "react-icons/ci";

import profilePic from "../assets/profile-picture.webp";
import upgradeIcon from "../assets/upgrade-icon.svg";
import CreditsModal from "./CreditsModal";

const Navbar = memo(() => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      <div
        className="flex items-center gap-2 flex-nowrap overflow-x-auto no-scrollbar relative px-1"
        aria-label="Primary navigation"
      >
        <button
          className="bg-primary p-3 lg:p-4 rounded-full text-black hover:opacity-80 transition-opacity shrink-0"
          onClick={() => setShowSearch(!showSearch)}
        >
          <CiSearch size={20} className="lg:w-6 lg:h-6" />
        </button>

        {/* Desktop search */}
        <input
          type="text"
          className="outline-none p-2 rounded-lg mx-2 lg:mx-4 w-full min-w-0 flex-1 text-sm lg:text-base hidden sm:block"
          placeholder="Task name, status..."
        />

        {/* Mobile search overlay */}
        {showSearch && (
          <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white rounded-lg shadow-lg z-50 sm:hidden">
            <input
              type="text"
              className="outline-none p-2 rounded-lg w-full text-sm border border-gray-200"
              placeholder="Task name, status..."
              autoFocus
            />
          </div>
        )}

        <div className="flex items-center gap-2 lg:gap-6 ml-auto shrink-0">
          <div className="bg-background p-3 lg:p-5 rounded-full text-black hover:opacity-80 transition-opacity cursor-pointer shrink-0">
            <CiBellOn size={18} className="lg:w-5 lg:h-5" />
          </div>

          <div className="flex items-center py-1 gap-3 lg:gap-7 justify-between bg-background rounded-full shrink-0">
            <span className="pl-3 lg:pl-4 whitespace-nowrap text-sm lg:text-base hidden min-[390px]:inline">
              Hi, KidKat
            </span>
            <img
              src={profilePic}
              alt="profile picture"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover shrink-0"
            />
          </div>

          <button
            onClick={() => setShowCredits(true)}
            className="flex items-center py-3 lg:py-4 px-3 lg:px-5 justify-between bg-black rounded-full text-white hover:opacity-80 duration-200 transition-opacity cursor-pointer shrink-0 min-w-fit"
          >
            <img
              src={upgradeIcon}
              alt="Upgrade Icon"
              className="w-4 h-4 lg:w-5 lg:h-5 filter invert brightness-0 saturate-0"
            />
            <span className="text-sm lg:text-base ml-2 hidden min-[420px]:inline">
              Credits
            </span>
          </button>
        </div>
      </div>

      <CreditsModal
        isOpen={showCredits}
        onClose={() => setShowCredits(false)}
      />
    </>
  );
});

export default Navbar;
