const ContactUs = () => {
  return (
    <div className="bg-yellow-50 min-h-screen px-6 py-12">
      {/* Hero Section */}
      <div className="bg-yellow-100 py-0 px-6 rounded-lg shadow-md text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 text-start">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700 text-start text-wrap">
          We're here to help! Have questions, need assistance, or want to learn
          more about our services? Feel free to reach out to us.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information */}
        <div className="bg-yellow-200 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Phone:</span> +012 3456 789
            </li>
            <li>
              <span className="font-semibold">Email:</span> demo@gmail.com
            </li>
            <li>
              <span className="font-semibold">Address:</span> 123 Dartmouth Street, Boston, MA 02156, USA
            </li>
          </ul>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8">
            {['FB', 'TW', 'IG'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center text-gray-800 shadow-md hover:bg-yellow-400"
                aria-label={platform}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <select
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              <option value="">Select Subject</option>
              <option value="general-inquiry">General Inquiry</option>
              <option value="support">Support</option>
              <option value="feedback">Feedback</option>
            </select>
            <textarea
              placeholder="Message"
              rows="5"
              className="p-4 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-3 rounded-md font-semibold hover:bg-yellow-600 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
