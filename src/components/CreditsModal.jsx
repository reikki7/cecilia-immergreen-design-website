import { memo, useState } from "react";
import { IoClose, IoInformationCircle, IoSparkles } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import howardleImage from "../assets/howardle.jpg";

const ProfilePicture = ({
  platform,
  username,
  fallbackIcon: FallbackIcon,
  gradientFrom,
  gradientTo,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getProfileImageUrl = () => {
    switch (platform) {
      case "instagram":
        return `https://unavatar.io/instagram/${username}`;
      case "twitter":
        return `https://unavatar.io/x/${username}`;
      case "youtube":
        return `https://unavatar.io/youtube/${username}`;
      default:
        return null;
    }
  };

  const imageUrl = getProfileImageUrl();

  if (!imageUrl || imageError) {
    return (
      <div
        className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full`}
      >
        <FallbackIcon className="text-white text-lg" />
      </div>
    );
  }

  return (
    <div className="relative w-10 h-10">
      {isLoading && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo} rounded-full animate-pulse`}
        >
          <FallbackIcon className="text-white text-lg opacity-50" />
        </div>
      )}
      <img
        src={imageUrl}
        alt={`${username} profile picture`}
        className={`w-10 h-10 rounded-full object-cover transition-opacity duration-200 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
};

const CreditsModal = memo(({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[32px] max-w-md w-full relative transform transition-all animate-in zoom-in-95 duration-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-primary/10 p-8 pb-6">
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 p-2 hover:bg-white/50 rounded-full transition-all duration-200"
            aria-label="Close credits"
          >
            <IoClose size={20} className="text-gray-700" />
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
              <IoSparkles className="text-[#00ff90] text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Credits & Thanks
            </h2>
            <p className="text-sm text-gray-600">
              Made with appreciation for amazing creators
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 pt-6 space-y-6">
          {/* UI Design Credit */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-800">
                UI Design Inspiration
              </h3>
            </div>
            <a
              href="https://www.instagram.com/uxui_howard.le/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-all duration-200 group border border-pink-200"
            >
              <img
                src={howardleImage}
                alt="Howard Le profile picture"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-800">Howard Le</p>
                <p className="text-sm text-gray-600">@uxui_howard.le</p>
              </div>
              <FaInstagram className="text-pink-500 text-lg" />
            </a>
          </div>

          {/* Artwork Credits */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <h3 className="text-lg font-semibold text-gray-800">Artworks</h3>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200">
              <div className="flex items-center gap-3 mb-3">
                <ProfilePicture
                  platform="youtube"
                  username="holoen_raorapanthera"
                  fallbackIcon={FaYoutube}
                  gradientFrom="from-orange-500"
                  gradientTo="to-red-600"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">Raora Panthera</p>
                  <p className="text-sm text-gray-600">hololive-EN -Justice-</p>
                </div>
              </div>

              <div className="space-y-2 ml-13">
                <a
                  href="https://x.com/raorapanthera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors group text-sm"
                >
                  <FaTwitter className="text-blue-500" />
                  <span>@raorapanthera</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@holoen_raorapanthera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors group text-sm"
                >
                  <FaYoutube className="text-red-500" />
                  <span>@holoen_raorapanthera</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-2xl">
              <div className="w-6 h-6 flex items-center justify-center">
                <IoInformationCircle className="text-gray-500 text-lg" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                This is a non-commercial, fan-made project and is not affiliated
                with hololive or Cover Corp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CreditsModal;
