import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto pt-12 pb-16 px-4 sm:pt-16 sm:pb-24 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="lg:col-span-1">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Understand React</span>
                <span className="block text-indigo-600">Under the Hood</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500 max-w-3xl">
                ReactPlaybook is an interactive educational tool that helps you
                visualize and understand key React concepts like JSX transformation,
                component trees, and diffing algorithm.
              </p>
              <div className="mt-8 flex space-x-4">
                <Link
                  to="/jsxconverter"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Try JSX Converter
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  to="/diffingDemo"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Diffing Demo
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <pre
                  className="p-4 bg-gray-50 text-sm font-mono text-gray-800 overflow-auto"
                  style={{ height: '260px' }}
                >
                  {`// JSX Code
function Welcome() {
  return (
    <div className="greeting">
      <h1>Hello, React!</h1>
      <p>Welcome to ReactPlaybook</p>
    </div>
  );
}

// Transforms to:
function Welcome() {
  return React.createElement(
    "div",
    { className: "greeting" },
    React.createElement("h1", null, "Hello, React!"),
    React.createElement("p", null, "Welcome to ReactPlaybook")
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Features
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Learn React's core concepts through interactive visualizations
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-indigo-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="bg-indigo-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  JSX Converter
                </h3>
                <p className="text-gray-600">
                  Instantly transform JSX into JavaScript and see how React
                  interprets your code.
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="bg-purple-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Tree Visualization
                </h3>
                <p className="text-gray-600">
                  See the component tree hierarchy visually and understand how
                  components nest.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Diffing Algorithm
                </h3>
                <p className="text-gray-600">
                  Explore how React's diffing algorithm efficiently updates the
                  DOM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;