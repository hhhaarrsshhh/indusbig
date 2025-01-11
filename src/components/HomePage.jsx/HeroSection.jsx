import shp3 from "../../assets/shp3.png";
import rec from '../../assets/rec.png';


const HeroSection = () => {
  return (
    <section className="relative text-white h-[400px] md:h-[500px] flex flex-col md:flex-row items-center"
    style={{
      backgroundImage: `url(${rec})`, // Use dynamic path for background image
      backgroundSize: 'cover', // Ensure the image fully covers the container
      backgroundPosition: 'center', // Keep the image centered
    }}>
      {/* Image as background using img tag */}
      <img
        src={shp3}
        alt="Hero Image"
        className="absolute top-0 left-0 max-sm:mt-20 max-sm:opacity-50  w-full h-full max-sm:h-52  md:object-cover z-0"
      />

      <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 lg:px-44 mt-12 md:mt-20 relative z-10">
        {/* Left Text Content */}
        <div className="space-y-4 md:w-1/2 text-start md:text-left max-sm:mt-14">
          <h1 className="text-3xl md:text-4xl max-sm:text-2xl font-bold whitespace-nowrap">
            ANCHORED IN <span className="text-yellow-400">EXCELLENCE</span>
          </h1>
          <p className="text-lg md:text-xl">Find Everything Your Ship Needs</p>
          <p className="text-sm">Your Marine Supply Partner</p>
          <button className="bg-yellow-400 text-gray-900 px-6 max-sm:px-3 max-sm:py-2 py-3 rounded-md font-semibold shadow-lg">
            Shop Now <span>⚓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
