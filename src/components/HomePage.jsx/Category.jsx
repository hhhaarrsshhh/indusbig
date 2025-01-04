import gen from '../../assets/gen.png'
const categories = [
  {
    title: "Engine",
    image: gen,
    description: "Explore Items",
  },
  {
    title: "Propellers",
    image: gen,
    description: "Explore Items",
  },
  {
    title: "Pneumatic Fenders",
    image: gen,
    description: "Explore Items",
  },
];

const Category = () => {
  return (
    <div className="bg-gray-50 py-8">
      <h2 className="text-start ml-3 text-2xl font-bold text-yellow-500 mb-8">
        CATEGORY
      </h2>
      <div className="container mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg"
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-32 w-32 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {category.title}
            </h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
