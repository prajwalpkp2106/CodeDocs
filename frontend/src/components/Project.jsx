import React, { useState } from "react";

function Project() {
  // State to track the current step/page
  const [currentStep, setCurrentStep] = useState(1);

  // Array of steps for sidebar and content
  const steps = [
    {
      title: "Before you begin",
      content: (
        <>
          <p>
            Before starting with React, make sure you have the following prerequisites:
          </p>
          <ul className="list-disc pl-5 mt-2 text-gray-300">
            <li>Node.js installed on your machine (you can download it from <a href="https://nodejs.org/" target="_blank" className="text-green-500">Node.js</a>)</li>
            <li>A code editor (e.g., VS Code)</li>
            <li>Basic understanding of JavaScript and HTML</li>
          </ul>
        </>
      ),
    },
    {
      title: "Install Node and npm",
      content: (
        <>
          <p>
            First, ensure you have Node.js and npm installed. Run the following commands in your terminal to check:
          </p>
          <code className="block bg-gray-800 p-2 mt-2 rounded">node -v</code>
          <code className="block bg-gray-800 p-2 mt-2 rounded">npm -v</code>
          <p className="mt-4">
            If you don’t have them installed, download Node.js from <a href="https://nodejs.org/" target="_blank" className="text-green-500">Node.js</a>.
          </p>
        </>
      ),
    },
    {
      title: "Create a new React app",
      content: (
        <>
          <p>
            Now, let's create a new React app using Create React App. Run the following command in your terminal:
          </p>
          <code className="block bg-gray-800 p-2 mt-2 rounded">npx create-react-app my-app</code>
          <p className="mt-4">
            This will set up a new React project in the "my-app" directory. You can replace "my-app" with your project name.
          </p>
        </>
      ),
    },
    {
      title: "Navigate into your app folder",
      content: (
        <>
          <p>
            After the app is created, navigate into your app folder:
          </p>
          <code className="block bg-gray-800 p-2 mt-2 rounded">cd my-app</code>
          <p className="mt-4">You are now inside your React app’s directory.</p>
        </>
      ),
    },
    {
      title: "Start the development server",
      content: (
        <>
          <p>
            To see your React app in action, start the development server:
          </p>
          <code className="block bg-gray-800 p-2 mt-2 rounded">npm start</code>
          <p className="mt-4">
            This will open the app in your default browser at <a href="http://localhost:3000" target="_blank" className="text-green-500">http://localhost:3000</a>. You should see a page that says "Edit src/App.js and save to reload."
          </p>
        </>
      ),
    },
    {
      title: "Edit the app",
      content: (
        <>
          <p>
            Now you can start editing your React app. Open <code>src/App.js</code> in your code editor and make changes to see how the app updates automatically.
          </p>
          <p className="mt-4">
            For example, replace the default content with:
          </p>
          <code className="block bg-gray-800 p-2 mt-2 rounded">
            {`function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
}

export default App;`}
          </code>
          <p className="mt-4">Save the file and see the changes reflected in your browser.</p>
        </>
      ),
    },
    {
      title: "Conclusion",
      content: (
        <>
          <p>
            Congratulations! You’ve successfully created your first React app. Explore more components and features to expand your app.
          </p>
          <p className="mt-4">
            You can now dive deeper into React’s concepts such as components, state, props, and hooks.
          </p>
        </>
      ),
    },
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
        <div className="mt-2">
          <h1 className="text-green-600 text-2xl text-center font-bold bg-slate-900 p-2 mb-6">Create React app</h1>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25a3.75 3.75 0 00-7.5 0V9M6 11.25V19.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 19.5v-8.25M9.75 14.25h4.5" />
            </svg>
            <span className="text-sm text-green-600">Written by Pratik Patil</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5m7.5-1.5V4.5m-7.5 0h7.5m-7.5 0H5.25A2.25 2.25 0 003 6.75v12A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75v-12A2.25 2.25 0 0018.75 4.5h-2.25m-7.5 0V3m7.5 9H9" />
            </svg>
            <span className="text-sm text-green-600">Last updated: Oct 4, 2024</span>
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
      </main>
    </div>
  );
}

export default Project;
