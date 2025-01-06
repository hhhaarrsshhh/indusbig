import React, { useState } from "react";

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Toggle between Sign Up and Sign In

  const toggleAuthMode = () => {
    setIsSignUp((prevMode) => !prevMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-black">IndusBig</h1>
          <p className="text-sm text-gray-500">Your trusted online B2B market</p>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-black mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <p className="text-center text-gray-600 mb-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={toggleAuthMode}
            className="text-yellow-500 font-semibold hover:underline"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </p>

        {/* Form */}
        <form className="space-y-4">
          {isSignUp && (
            <>
              {/* First Name */}
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 shadow-md"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
