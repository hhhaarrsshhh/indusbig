import { Link } from "react-router-dom";
import log1 from "../../assets/Badge.png";
import log2 from "../../assets/Badge (1).png";
import log3 from "../../assets/Badge (2).png";
import log4 from "../../assets/Badge (3).png";
import log5 from "../../assets/Badge (4).png";

const Footer = () => {
  return (
    <footer className="bg-customGray text-white">
      {/* Top Section */}
      <div
        className="text-center py-2 sm:py-4 md:py-6 px-4"
        style={{ backgroundColor: "rgba(255, 198, 51, 1)" }}
      >
        <h3 className="font-bold text-lg sm:text-lg md:text-2xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h3>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="font-bold text-lg mb-4">IndusBig</h4>
          <p className="text-sm mb-4">© 2024, All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Bulk Order
              </a>
            </li>
          </ul>
        </div>

        {/* FAQ Links */}
        <div>
          <h4 className="font-bold text-lg mb-4">FAQ</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/privacypolicy" className="text-sm hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/returnpolicy" className="text-sm hover:underline">
                Return Policy
              </Link>
            </li>
            <li>
              <Link
                to="/termsandconditions"
                className="text-sm hover:underline"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-sm hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h4 className="font-bold text-lg mb-4">Top Categories</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Free eBooks
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Development Tutorials
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                How-to Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                YouTube Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-gray-800 py-4 text-center">
        <div className="flex justify-center space-x-4">
          <img src={log1} alt="Visa" className="h-14" />
          <img src={log2} alt="MasterCard" className="h-14" />
          <img src={log3} alt="PayPal" className="h-14" />
          <img src={log4} alt="applePay" className="h-14" />
          <img src={log5} alt="GooglePay" className="h-14" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
