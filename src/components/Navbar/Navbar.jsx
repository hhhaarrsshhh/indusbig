import { useState } from "react";
import logo from "../../assets/logo.png"; // Import logo
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu

  return (
    <header className="bg-white shadow-md p-4 sticky">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-black font-semibold text-sm">
          {["Home", "About Us", "Categories", "Blogs", "Bulk Enquiry", "We Find For You", "Contact Us"].map((link) => (
            <Link
              key={link}
              to={`/${link.replace(/\s+/g, '').toLowerCase()}`} // Replace space with no space and convert to lowercase
              className="hover:text-yellow-400 transition duration-200"
            >
              {link}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="relative hidden sm:block w-1/3 sm:w-1/4">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 text-xs sm:text-sm w-full"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3">
          <a href="#" className="text-gray-500 hover:text-yellow-400">
            <i className="fas fa-shopping-cart"></i> {/* Shopping cart icon */}
          </a>
          <a href="#" className="text-gray-500 hover:text-red-800">
            <i className="fas fa-heart"></i> {/* Heart icon */}
          </a>
        </div>

        {/* Sign In Button */}
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 text-xs sm:text-sm">
        <Link to="/signin" className="text-black no-underline">
          Sign In
        </Link>
        </button>

        {/* Mobile Menu Button (only visible on mobile) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-black text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle mobile menu
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-4 p-4 space-y-4">
          {["Home", "About Us", "Categories", "Blogs", "Bulk Enquiry", "We Find For You", "Contact Us"].map((link) => (
            <Link
              key={link}
              to={`/${link.replace(/\s+/g, '').toLowerCase()}`} // Replace space with no space and convert to lowercase
              className="block text-black text-lg font-semibold hover:text-yellow-400"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
