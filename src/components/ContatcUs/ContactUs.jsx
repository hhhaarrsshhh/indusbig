const ContactUs = () => {
    return (
      <div className="bg-yellow-50 min-h-screen">
        {/* Hero Section */}
        <div className="text-start bg-customBgCreamcolor py-8 px-4 rounded-lg mb-8 shadow-md">
          <h1 className="text-4xl font-bold ml-4 text-black">Contact Us</h1>
        </div>
        <p className="text-lg font-semibold text-black mt-4 ml-8">
          We're Here to Help!<br /> Have questions, need assistance, or want to learn
          more about our services?<br /> We'd love to hear from you! Our team is
          dedicated to providing prompt and <br /> reliable support for all your
          inquiries.
        </p>
  
        {/* Contact Information & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 items-start mb-4">
          {/* Contact Information */}
          <div className="bg-yellow-300  p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-black mb-4">
              Contact Information
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Phone:</span> +012 3456 789
              </li>
              <li>
                <span className="font-semibold">Email:</span> demo@gmail.com
              </li>
              <li>
                <span className="font-semibold">Address:</span> 123 Dartmouth
                Street,<br /> Boston, Massachusetts 02156, United States
              </li>
            </ul>
  
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-md hover:bg-yellow-300"
              >
                FB
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-md hover:bg-yellow-300"
              >
                TW
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-md hover:bg-yellow-300"
              >
                IG
              </a>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-black mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <select
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
              >
                <option value="">Select Subject</option>
                <option value="general-inquiry">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
              <textarea
                placeholder="Message"
                rows="4"
                className="p-3 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
              ></textarea>
              <button
                type="submit"
                className="w-6/12 bg-gray-900 text-white py-2 rounded-md hover:bg-yellow-500 shadow-md"
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
  