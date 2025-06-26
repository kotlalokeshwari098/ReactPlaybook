import React from 'react';

const JSXPanel = ({ jsxcode, setJsxCode, transformJsx, className }) => {
  return (
    <div className={`p-6 flex flex-col h-full ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">JSX Code</h3>
        <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
          Edit &amp; Transform
        </div>
      </div>
      
      <div className="flex-1 flex flex-col h-full">
        <div className="flex-1 relative mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg" style={{ padding: "2px" }}>
            <textarea
              value={jsxcode}
              onChange={(e) => setJsxCode(e.target.value)}
              className="w-full h-full p-3 bg-gray-50 rounded-md focus:outline-none font-mono text-sm resize-none"
              placeholder="Enter your JSX code here... e.g. <div className='container'><h1>Hello World</h1></div>"
            />
          </div>
        </div>
        
        <div className="flex justify-center pb-4">
          <button
            onClick={transformJsx}
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity duration-200 shadow-md flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Transform
          </button>
        </div>
      </div>
    </div>
  );
};

export default JSXPanel;