import ship2 from "../../assets/ship2.png"; // Importing the image
import { Link } from "react-router-dom";

const MarinEngine = () => {

  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${ship2})` }} // Dynamically setting the background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 sm:px-16 lg:px-24 text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase">
          Marine Engines
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl max-w-2xl">
          Comprehensive inventory of marine engine spare parts, ensuring seamless maintenance and operation for maritime vessels.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg flex items-center space-x-2">
          <span> <Link to="/categories" className="text-sm hover:underline">
          View Category
            </Link></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MarinEngine;
