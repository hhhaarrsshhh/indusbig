import wefind from "../../assets/wefind.png";
const WeFindForYou = () => {
  return (
    <div className="bg-customGray text-white  px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-yellow-400 text-4xl font-semibold mb-4">
            WE FIND FOR YOU
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Sit back as we tirelessly locate any spare part you need, provide a
            competitive quotation, and handle the logistics for swift and
            stress-free delivery.
          </p>
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500">
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src={wefind}
            alt="Marine Diesel Engine"
            className="ml-8"          />
          <div className="absolute bottom-4 left-4  bg-opacity-75 p-4 rounded-lg">
            <p className="text-white text-3xl ml-7 font-medium">
              ONLINE HUB FOR MARINE DIESEL ENGINE SPARE PARTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeFindForYou;
