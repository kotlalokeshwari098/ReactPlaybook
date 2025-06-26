import React, { useEffect, useState } from 'react';
import * as Babel from '@babel/standalone';
import '../App.css'

import { parseTree } from '../ParseReactTree';
import TreeVisualizer from '../components/TreeVisualizer';
import Tree from 'react-d3-tree';
import { convertTreeToNodes } from '../ConvertTreeToNodes';
import JSXPanel from '../components/JSXPanel';

export default function JSXConverter() {
  const [jsxCode, setJsxCode] = useState('');
  const [output, setOutput] = useState('');
  const [tree, setTree] = useState('')
  const [treeNodes, setTreeNodes] = useState();
  const [activeTab, setActiveTab] = useState('simple'); // 'simple' or 'd3'

  const transformJsx = () => {
    try {
      const result = Babel.transform(jsxCode, {
        presets: ['react']
      });
      setOutput(result.code);
      setTree(parseTree(result.code));
      //type,props,children form it is
      console.log(tree);
      convertTreeToNodes(tree);
    } catch (err) {
      setOutput(err.message);
    }
  };

  useEffect(() => {
    console.log(tree);
    setTreeNodes(convertTreeToNodes(tree));
  }, [setTree, tree]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 inline-block">
            JSX Playground
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your JSX code into JavaScript and visualize the React element tree structure.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            {/* Left Panel - Input */}
           <JSXPanel jsxcode={jsxCode} setJsxCode={setJsxCode} transformJsx={transformJsx} />

            {/* Right Panel - Output and Visualization */}
            <div className="bg-gray-50 ">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex">
                  <button
                    className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                      activeTab === 'simple'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab('simple')}
                  >
                    JavaScript Output
                  </button>
                  <button
                    className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                      activeTab === 'd3'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    onClick={() => setActiveTab('d3')}
                  >
                    Tree Visualization
                  </button>
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'simple' && (
                  <div className="bg-gray-900 rounded-lg shadow-inner overflow-hidden">
                    <div className="flex bg-gray-800 px-4 py-2">
                      <div className="flex space-x-1">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="flex-1 text-center text-xs text-gray-400">JavaScript Output</div>
                    </div>
                    <pre className="text-green-400 p-4 overflow-auto font-mono text-sm" style={{ height: "400px" }}>
                      {output || 'Transformed code will appear here...'}
                    </pre>
                  </div>
                )}

                {activeTab === 'd3' && (
                  <div className="bg-white rounded-lg border border-gray-200 shadow-inner overflow-hidden" style={{ height: "450px" }}>
                    <div className="flex justify-between items-center border-b px-4 py-2">
                      <h3 className="text-sm font-medium text-gray-700">Component Tree</h3>
                    </div>
                    <div className="p-4 h-full">
                      {tree ? (
                        <div className="w-full h-full overflow-auto">
                          <TreeVisualizer data={tree} />
                          <div className="mt-4">
                            {treeNodes && (
                              <div className="w-full" style={{ height: "300px" }}>
                                <Tree
                                  data={treeNodes}
                                  rootNodeClassName="node__root"
                                  branchNodeClassName="node__branch"
                                  leafNodeClassName="node__leaf"
                                  pathFunc="straight"
                                  orientation="vertical"
                                  collapsible={true}
                                  translate={{ x: 200, y: 50 }}
                                  zoomable={true}
                                  scaleExtent={{ min: 0.1, max: 2 }}
                                  separation={{ siblings: 1, nonSiblings: 1.5 }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          Transform some JSX to see the tree visualization
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="text-indigo-600 font-medium mb-2">1. Write JSX</div>
              <p className="text-sm text-gray-600">Enter your JSX code in the editor and click the transform button.</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="text-indigo-600 font-medium mb-2">2. Transform</div>
              <p className="text-sm text-gray-600">Babel transforms your JSX into JavaScript React.createElement calls.</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="text-indigo-600 font-medium mb-2">3. Visualize</div>
              <p className="text-sm text-gray-600">See the output code and visualize the component tree structure.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
