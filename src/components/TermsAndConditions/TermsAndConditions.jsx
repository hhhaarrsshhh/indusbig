import { useEffect } from "react";

const TermsAndConditions = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl p-6">
        <h1 className="text-2xl font-bold text-yellow-400 mb-4">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-600 mb-2">Last Revised: December 16, 2013</p>
        <p className="text-gray-800 leading-6 mb-4">
          Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.
        </p>
        <h2 className="text-lg font-bold mb-2">1. YOUR AGREEMENT</h2>
        <p className="text-gray-800 leading-6 mb-4">
          By using this site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.
        </p>
        <p className="text-gray-800 leading-6 mb-4">
          PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions.
        </p>
        <h2 className="text-lg font-bold mb-2">2. PRIVACY</h2>
        <p className="text-gray-800 leading-6 mb-4">
          Please review our Privacy Policy, which also governs your visit to this site, to understand our practices.
        </p>
        <h2 className="text-lg font-bold mb-2">3. LINKED SITES</h2>
        <p className="text-gray-800 leading-6">
          This site may contain links to other independent third-party websites ("Linked Sites"). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and do not endorse the content of these Linked Sites.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
