import { useRef } from "react";
import generator from "../../assets/generator.png";

const BestSeller = () => {
  const carouselRef = useRef(null); // Reference to the carousel container

  const items = [
    {
      id: 1,
      title: "Cummins",
      description: "Diesel Generator Set K19 Series - 600/625 kVA, 480/500 kWe Prime",
      image: generator, // Store only the image path
    },
    {
      id: 2,
      title: "Cummins",
      description: "Diesel Generator Set K19 Series - 600/625 kVA, 480/500 kWe Prime",
      image: generator,
    },
    {
      id: 3,
      title: "Cummins",
      description: "Diesel Generator Set K19 Series - 600/625 kVA, 480/500 kWe Prime",
      image: generator,
    },
    {
      id: 4,
      title: "Cummins",
      description: "Diesel Generator Set K19 Series - 600/625 kVA, 480/500 kWe Prime",
      image: generator,
    },
  ];

  // Scroll the carousel left or right
  const scrollCarousel = (direction) => {
    const scrollAmount = 300; // Adjust the scroll amount
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="py-8 px-4 bg-white">
      <h2 className="text-2xl font-bold text-yellow-500 text-start mb-8">Best Sellers</h2>

      <h2 className="text-2xl font-bold uppercase text-center mb-8">GENERATORS</h2>
      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-6 scroll-smooth scrollbar-hide"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[300px] max-w-[320px] bg-gray-100 rounded-lg shadow-md p-6 flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-700">{item.title}</h3>
              <p className="mt-2 text-sm font-bold text-gray-600 leading-relaxed">
                {item.description}
              </p>
              <button className="mt-6 bg-black text-white py-2 px-6 rounded-lg hover:bg-blue-800 shadow-md">
                Order Now
              </button>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-200"
        >
          ◀
        </button>
        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-200"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default BestSeller;
