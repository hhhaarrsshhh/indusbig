import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for active route tracking
import logo from "../../assets/logo.png"; // Import logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu
  const location = useLocation(); // Get the current location (route)

  const links = [
    "Home",
    "About Us",
    "Categories",
    "Blogs",
    "Bulk Enquiry",
    "We Find For You",
    "Contact Us",
  ];

  const getLinkClass = (path) => {
    // Add yellow text if the link is active
    return location.pathname === `/${path.replace(/\s+/g, "").toLowerCase()}`
      ? "text-yellow-400"
      : "text-black hover:text-yellow-400 transition duration-200";
  };

  return (
    <header className="bg-white shadow-md p-4 sticky">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-black font-semibold text-sm">
          {links.map((link) => (
            <Link
              key={link}
              to={`/${link.replace(/\s+/g, "").toLowerCase()}`} // Replace space with no space and convert to lowercase
              className={getLinkClass(link)} // Apply dynamic class for active link
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
          {links.map((link) => (
            <Link
              key={link}
              to={`/${link.replace(/\s+/g, "").toLowerCase()}`} // Replace space with no space and convert to lowercase
              className={`block text-lg font-semibold ${getLinkClass(link)}`} // Apply dynamic class for active link
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
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
