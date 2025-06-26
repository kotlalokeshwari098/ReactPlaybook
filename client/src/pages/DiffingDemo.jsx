import React, { useEffect, useState } from "react";
import * as Babel from "@babel/standalone";
import "../App.css";
import { parseTree } from "../ParseReactTree";
import Tree from "react-d3-tree";
import { convertTreeToNodes } from "../ConvertTreeToNodes";
import JSXPanel from "../components/JSXPanel";

const DiffingDemo = () => {
  const [jsxCode, setJsxCode] = useState("");
  const [output, setOutput] = useState("");
  const [tree, setTree] = useState([]);
  const [treeNodes, setTreeNodes] = useState();

  const transformJsx = () => {
    try {
      const result = Babel.transform(jsxCode, {
        presets: ["react"],
      });
      setOutput(result.code);

      setTree(parseTree(result.code));
      //type,props,children form it is
    } catch (err) {
      setOutput(err.message);
    }
  };

  useEffect(() => {
    setTreeNodes(convertTreeToNodes(tree));
  }, [setTree, tree]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 py-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 inline-block">
            React Diffing Demo
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
            Visualize how React updates the DOM efficiently using its diffing
            algorithm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - JSX Input */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[calc(400px+300px+1.5rem)] flex flex-col">
            <div className="h-full flex flex-col p-0">
              <JSXPanel
                jsxcode={jsxCode}
                setJsxCode={setJsxCode}
                transformJsx={transformJsx}
                className="flex-1 h-full"
              />
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col gap-6">
            {/* Upper Section - Node Tree */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 h-[400px]">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Component Tree
              </h3>
              <div className="h-[calc(100%-2rem)] bg-gray-50 rounded-lg border border-gray-100">
                {tree && treeNodes ? (
                  <div className="w-full h-full">
                    <Tree
                      data={treeNodes}
                      rootNodeClassName="node__root"
                      branchNodeClassName="node__branch"
                      leafNodeClassName="node__leaf"
                      pathFunc="step"
                      orientation="vertical"
                      collapsible={true}
                      translate={{ x: 200, y: 30 }}
                      zoomable={true}
                      scaleExtent={{ min: 0.1, max: 1.5 }}
                      separation={{ siblings: 0.7, nonSiblings: 1 }}
                      nodeSize={{ x: 120, y: 60 }}
                      pathClassFunc={() => "text-indigo-600 stroke-2"}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Transform some JSX to see the tree visualization
                  </div>
                )}
              </div>
            </div>

          {/* For showing the changes in nodes when made in jsx code */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 h-[300px]">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                DOM Updates
              </h3>
              <div className="h-[calc(100%-2rem)] bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center text-gray-500">
                This area is reserved for DOM update visualization
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiffingDemo;
