import shp3 from "../../assets/shp3.png";

const HeroSection = () => {
  return (
    <section
      className="relative text-white h-[400px] md:h-[500px] flex flex-col md:flex-row items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/shp3.png')", // Default background image for larger screens
      }}
    >
      {/* Mobile background image */}
      <div className="absolute inset-0 bg-cover bg-center md:hidden" style={{ backgroundImage: "url('/src/assets/your-mobile-image.png')" }}></div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 lg:px-44 mt-12 md:mt-20">
        {/* Left Text Content */}
        <div className="space-y-4 md:w-1/2 text-start md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold whitespace-nowrap">
            ANCHORED IN <span className="text-yellow-400">EXCELLENCE</span>
          </h1>
          <p className="text-lg md:text-xl">Find Everything Your Ship Needs</p>
          <p className="text-sm">Your Marine Supply Partner</p>
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold shadow-lg">
            Shop Now <span>⚓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
