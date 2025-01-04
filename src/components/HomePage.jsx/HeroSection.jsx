import ship from "../../assets/ship.png";
import waterImg from '../../assets/shipping-industry-carries-cargo-large-container-ships-generative-ai 1.png';

const HeroSection = () => {
  return (
    <section
      className="relative text-white h-[400px] md:h-[500px] flex flex-col md:flex-row items-center justify-center md:justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/rec.png')" }}
    >
      <div className="text-center md:text-left space-y-4 px-6 md:px-16 lg:px-44 flex flex-col md:flex-row items-center md:items-start mt-12 md:mt-20 mb-16 md:mb-0">
        <div className="space-y-4 md:pr-10">
          <h1 className="text-3xl md:text-4xl font-bold whitespace-nowrap">
            ANCHORED IN <span className="text-yellow-400">EXCELLENCE</span>
          </h1>
          <p className="text-lg md:text-xl">Find Everything Your Ship Needs</p>
          <p className="text-sm">Your Marine Supply Partner</p>
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold shadow-lg">
            Shop Now <span>⚓</span>
          </button>
        </div>
        {/* Ship Image Positioned Left */}
        <div className="md:w-1/2  justify-center md:justify-start mt-8 md:mt-20 w-full  md:block">
          <img
            src={ship}
            alt="Ship"
            className="w-full max-w-xs md:max-w-none h-auto -mt-16 ml-32"
          />
        </div>
      </div>

      {/* Water Image */}
      <img 
        src={waterImg} 
        alt="Water" 
        className="absolute bottom-0 left-0 w-full h-10 object-cover hidden md:block" 
      />
    </section>
  );
};

export default HeroSection;
