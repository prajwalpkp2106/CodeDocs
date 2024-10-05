import React, { useState } from "react";

function Project() {
  // State to track the current step/page
  const [currentStep, setCurrentStep] = useState(1);

  // Array of steps for sidebar and content
  const steps = [
    { title: "Before you begin", content: "This is the content for 'Before you begin'." },
    { title: "Prompt design", content: "This is the content for 'Prompt design'." },
    { title: "Update Gradle imports", content: "This is the content for 'Update Gradle imports'." },
    { title: "Kotlin integration", content: "This is the content for 'Kotlin integration'." },
    { title: "Conclusion", content: "This is the content for 'Conclusion'." }
  ];

  // Handlers for Next and Back buttons
  const handleNext = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar Navigation */}
      <aside className="w-1/4 bg-slate-950 border-4 border-slate-800 shadow-lg p-4 flex flex-col justify-between">
       
        <div className="mt-2"> {/* Reduced margin */}
        <h1 className="text-green-600 text-2xl text-center font-bold bg-slate-900 p-2 mb-6">Project Name</h1>
          <ul className="space-y-2">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 rounded ${
                  currentStep === index + 1
                    ? "border-l-4 border-green-600 text-green-600 font-bold bg-green-50"
                    : "text-gray-400"
                }`}
                onClick={() => setCurrentStep(index + 1)}
              >
                {index + 1}. {step.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Author and Date Information */}
        <div className="mt-0 text-gray-400">
          <div className="flex items-center mb-2">
            {/* Author SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="green"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25a3.75 3.75 0 00-7.5 0V9M6 11.25V19.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 19.5v-8.25M9.75 14.25h4.5"
              />
            </svg>
            <span className="text-sm text-green-600">Written by John Doe</span>
          </div>
          <div className="flex items-center">
            {/* Calendar SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="green"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5m7.5-1.5V4.5m-7.5 0h7.5m-7.5 0H5.25A2.25 2.25 0 003 6.75v12A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75v-12A2.25 2.25 0 0018.75 4.5h-2.25m-7.5 0V3m7.5 9H9"
              />
            </svg>
            <span className="text-sm text-green-600">Last updated: Oct 2, 2024</span>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-slate-900 p-8">
        {/* Step Header */}
        <h1 className="text-2xl text-green-500 font-bold mb-2">
          {currentStep}. {steps[currentStep - 1].title}
        </h1>
        <p className="text-gray-400 mb-4">{steps[currentStep - 1].content}</p>

        {/* Example Box (optional, you can conditionally show this if needed) */}
        <div className="bg-gray-50 border border-gray-300 rounded p-4 mt-6">
          <h3 className="font-semibold text-lg mb-2">Example:</h3>
          <p className="text-gray-600">
            This is an example content box. It can contain additional information related to the current step.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button className="px-4 py-2 rounded bg-gray-300 text-gray-800" onClick={handleBack}>
              Back
            </button>
          )}
          {currentStep < steps.length && (
            <button className="px-4 py-2 rounded bg-green-600 text-white" onClick={handleNext}>
              Next
            </button>
          )}
        </div>

<button
          onClick={() => {
            navigate("/addproject");
            console.log("Add tutorial button clicked");
          }}
          className="absolute bottom-6 right-8 flex items-center px-4 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200"
        >
        
          
          Update File
        </button>

        <button
          onClick={() => {
            navigate("/addproject");
            console.log("Add tutorial button clicked");
          }}
          className="absolute bottom-20 left-6 flex items-center px-2 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 transition duration-200"
        >
          {/* Plus SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add More 
        </button>
      </main>
    </div>
  );
}

export default Project;
