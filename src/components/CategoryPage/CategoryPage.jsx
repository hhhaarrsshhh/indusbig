import { useState } from "react";
import gen from "../../assets/gen.png";

const CategoryPage = () => {
  // Product data
  const products = [
    {
      category: "Generators",
      image: gen,
      title: "Diesel Generator Set K19",
      description: "Series - 600/625 kVA, 480/500 kWe Prime",
    },
    {
      category: "Fenders",
      image: gen,
      title: "Cylindrical Rubber Fenders",
      description: "High durability and performance.",
    },
    {
      category: "Generators",
      image: gen,
      title: "Diesel Generator Set K19 (2nd Model)",
      description: "Series - 500/525 kVA, 400/450 kWe Prime",
    },
    {
      category: "Fenders",
      image: gen,
      title: "Square Rubber Fenders",
      description: "Designed for marine applications.",
    },
    {
      category: "Fenders",
      image: gen,
      title: "Square Rubber Fenders",
      description: "Designed for marine applications.",
    },
  ];

  // State for filtering
  const [filter, setFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filtered products based on search input and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  // Sidebar categories
  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 border-r sticky top-0 h-screen">
        <h2 className="text-xl font-bold text-customGray mb-4">Filter</h2>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-full mb-4"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <h3 className="text-lg font-semibold mb-2">Category</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() =>
                setSelectedCategory(category === "All" ? "" : category)
              }
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {/* Product Details */}
                <div className="p-4">
                  <h2 className="text-lg font-bold">{product.title}</h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-xs text-blue-600 font-semibold mt-2">
                    Category: {product.category}
                  </p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Order Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No products found. Try a different search or category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
