import { useState } from "react";

const BulkEnquiry = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="bg-yellow-50 min-h-screen px-4 py-8 sm:px-8 sm:py-12">
      {/* Hero Section */}
      <div className="flex flex-wrap sm:flex-nowrap justify-between items-center bg-customBgCreamcolor py-8 px-4 rounded-lg shadow-md w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-0 flex-shrink-0">
          Bulk Enquiry
        </h1>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg shadow-md flex-shrink-0"
          onClick={handleOpenForm}
        >
          Bulk Enquiry Form
        </button>
      </div>

      {/* How It Works Section */}
      <div className="mt-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4">
          How Does It Work?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 font-semibold">
          IndusBig is here to simplify bulk orders for you. Let's get started!
          Fill in your details now.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="text-left p-4 sm:p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img
                src="step1-icon.png"
                alt="Step 1"
                className="mx-auto h-12 w-12 sm:h-16 sm:w-16"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
              Step 1
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Fill in your details and kickstart the process.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-left p-4 sm:p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img
                src="step2-icon.png"
                alt="Step 2"
                className="mx-auto h-12 w-12 sm:h-16 sm:w-16"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
              Step 2
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Our team will contact you to understand your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-left p-4 sm:p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img
                src="step3-icon.png"
                alt="Step 3"
                className="mx-auto h-12 w-12 sm:h-16 sm:w-16"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
              Step 3
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              We will submit your quote for tailored solutions.
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-left p-4 sm:p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
              <img
                src="step4-icon.png"
                alt="Step 4"
                className="mx-auto h-12 w-12 sm:h-16 sm:w-16"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-black mb-2">
              Step 4
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              Place your order and experience a smooth process.
            </p>
          </div>
        </div>
      </div>

      {/* Modal for Bulk Enquiry Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black">
                Bulk Enquiry Form
              </h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleCloseForm}
              >
                ✖
              </button>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <textarea
                placeholder="Details about your bulk enquiry"
                rows="4"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BulkEnquiry;
