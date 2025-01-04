import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className=" text-center py-4" style={{ backgroundColor: 'rgba(255, 198, 51, 1)' }} >
        <h3 className="font-bold text-lg">
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
              <a href="#" className="text-sm hover:underline">
                Terms & Conditions
              </a>
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
          <img src="/images/visa.png" alt="Visa" className="h-6" />
          <img src="/images/paypal.png" alt="PayPal" className="h-6" />
          <img src="/images/mastercard.png" alt="MasterCard" className="h-6" />
          <img src="/images/gpay.png" alt="Google Pay" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
