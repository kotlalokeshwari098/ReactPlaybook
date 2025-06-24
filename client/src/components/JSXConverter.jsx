import React, {  useEffect, useState } from 'react';
import * as Babel from '@babel/standalone';

import { parseTree } from '../ParseReactTree';
import TreeVisualizer from './TreeVisualizer';


export default function JSXConverter() {
  const [jsxCode, setJsxCode] = useState('');
  const [output, setOutput] = useState('');
  const [tree,setTree]=useState('')

  const transformJsx = () => {
    try {
      const result = Babel.transform(jsxCode, {
        presets: ['react']
      });
      console.log(result.code)
      setOutput(result.code);
      setTree(parseTree(result.code));
      //type,props,children form it is
     
    } catch (err) {
      setOutput(err.message);
    }
  };

  useEffect(()=>{
     console.log(tree)
  },[setTree,tree])


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 border-b pb-3 border-gray-200">
          JSX to JS Transformer
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-150px)]">
          {/* Left Panel - Input */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="bg-white rounded-lg shadow-md p-4 flex-grow">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter JSX Code:
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md h-full bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 font-mono"
                value={jsxCode}
                onChange={(e) => setJsxCode(e.target.value)}
                placeholder="Enter your JSX code here..."
              />
            </div>
            <button 
              className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150 ease-in-out shadow-md font-medium"
              onClick={transformJsx}
            >
              Transform
            </button>
          </div>
          
          {/* Right Panel - Output and Visualization */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 h-full">
            <div className="bg-white rounded-lg shadow-md p-4 flex-1">
              <h3 className="text-lg font-semibold mb-2 text-gray-700 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                JavaScript Output
              </h3>
              <pre className="bg-gray-800 text-green-400 p-4 rounded-md overflow-auto h-[calc(100%-40px)] font-mono text-sm">{output}</pre>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 flex-1">
              <h3 className="text-lg font-semibold mb-2 text-gray-700 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />
                </svg>
                Tree Visualization
              </h3>
              <div className="overflow-auto bg-gray-50 p-3 rounded-md h-[calc(100%-40px)] border border-gray-100">
                <TreeVisualizer data={tree}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
