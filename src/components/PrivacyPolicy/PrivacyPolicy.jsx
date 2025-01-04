import { useState, useEffect } from "react";
import { privacyQuestions } from "../dataQuestions/privacyPolicyQuestion"; // Adjust the path as needed

const PrivacyPolicy = () => {
  // Scroll to top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to track which question is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-black">
  <span
    className="bg-yellow-500 py-2 px-6 relative z-10"
    style={{
      clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
      display: 'inline-block',
    }}
  >
    Privacy
  </span>
  Policy
</h2>




        <p className="text-gray-600 mt-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
        </p>
        <div className="mt-8">
          <ul className="space-y-4">
            {privacyQuestions.map((question, index) => (
              <li key={index} className="border rounded-lg">
                <button
                  className="w-full text-left px-4 py-3 flex justify-between items-center"
                  onClick={() => toggleAnswer(index)}
                >
                  <span className="font-bold">{question.question}</span>
                  <span className="text-gray-500">{expandedIndex === index ? '-' : '+'}</span>
                </button>
                {expandedIndex === index && (
                  <div className="px-4 py-3 bg-gray-100 rounded-b-lg">
                    <p>{question.answer}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 text-gray-600">
          If you have any questions, reach out to us via{" "}
          <a href="mailto:customerservice@indusbig.com" className="text-yellow-500 underline">
            customerservice@indusbig.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
