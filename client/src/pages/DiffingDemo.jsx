import React, { useEffect, useState } from "react";
import * as Babel from "@babel/standalone";
import "../App.css";
import { parseTree } from "../ParseReactTree";
import Tree from "react-d3-tree";
import { convertTreeToNodes } from "../ConvertTreeToNodes";
import JSXPanel from "../components/JSXPanel";
import { compareTreeNodes } from "../CompareTreeNodes";

const DiffingDemo = () => {
  const [originalJsxCode, setOriginalJsxCode] = useState("");
  const [modifiedJsxCode, setModifiedJsxCode] = useState("");
  const [originalTree, setOriginalTree] = useState([]);
  const [modifiedTree, setModifiedTree] = useState([]);
  const [originalTreeNodes, setOriginalTreeNodes] = useState();
  const [modifiedTreeNodes, setModifiedTreeNodes] = useState();
  const [diffingTrue,setDiffingTrue]=useState(false);

  const transformOriginalJsx = () => {
    try {
      const result = Babel.transform(originalJsxCode, {
        presets: ["react"],
      });
      setOriginalTree(parseTree(result.code));
      setDiffingTrue(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const transformModifiedJsx = () => {
    try {
      const result = Babel.transform(modifiedJsxCode, {
        presets: ["react"],
      });
      setModifiedTree(parseTree(result.code));
      setDiffingTrue(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    setOriginalTreeNodes(convertTreeToNodes(originalTree));
    console.log(compareTreeNodes(originalTree))
    compareTreeNodes("original",originalTree)
  }, [originalTree]);

  useEffect(() => {
    setModifiedTreeNodes(convertTreeToNodes(modifiedTree));
    console.log(compareTreeNodes(modifiedTree))
    compareTreeNodes("modified",modifiedTree)
  }, [modifiedTree]);

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

        {/* JSX Input Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Original JSX Panel */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] flex flex-col">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 py-2 px-4">
              <h3 className="text-lg font-medium text-white">Original JSX</h3>
            </div>
            <div className="h-full flex flex-col p-0">
              <JSXPanel
                jsxcode={originalJsxCode}
                setJsxCode={setOriginalJsxCode}
                transformJsx={transformOriginalJsx}
                className="flex-1 h-full"
                diffingTrue={diffingTrue}
              />
            </div>
          </div>

          {/* Modified JSX Panel */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px] flex flex-col">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 py-2 px-4">
              <h3 className="text-lg font-medium text-white">Modified JSX</h3>
            </div>
            <div className="h-full flex flex-col p-0">
              <JSXPanel
                jsxcode={modifiedJsxCode}
                setJsxCode={setModifiedJsxCode}
                transformJsx={transformModifiedJsx}
                className="flex-1 h-full"
                diffingTrue={diffingTrue}
              />
            </div>
          </div>
        </div>

        {/* Tree Visualization Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Original Tree */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 h-[400px]">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 py-2 px-4 -mx-6 -mt-6 mb-4">
              <h3 className="text-lg font-medium text-white">Original Tree</h3>
            </div>
            <div className="h-[calc(100%-3.5rem)] bg-gray-50 rounded-lg border border-gray-100">
              {originalTree && originalTreeNodes ? (
                <div className="w-full h-full">
                  <Tree
                    data={originalTreeNodes}
                    rootNodeClassName="node__root"
                    branchNodeClassName="node__branch"
                    leafNodeClassName="node__leaf"
                    pathFunc="step"
                    orientation="vertical"
                    collapsible={true}
                    translate={{ x: 150, y: 30 }}
                    zoomable={true}
                    scaleExtent={{ min: 0.1, max: 1.5 }}
                    separation={{ siblings: 0.7, nonSiblings: 1 }}
                    nodeSize={{ x: 120, y: 60 }}
                    pathClassFunc={() => "text-indigo-600 stroke-2"}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Transform Original JSX to see the tree visualization
                </div>
              )}
            </div>
          </div>

          {/* Modified Tree */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 h-[400px]">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 py-2 px-4 -mx-6 -mt-6 mb-4">
              <h3 className="text-lg font-medium text-white">Modified Tree</h3>
            </div>
            <div className="h-[calc(100%-3.5rem)] bg-gray-50 rounded-lg border border-gray-100">
              {modifiedTree && modifiedTreeNodes ? (
                <div className="w-full h-full">
                  <Tree
                    data={modifiedTreeNodes}
                    rootNodeClassName="node__root"
                    branchNodeClassName="node__branch"
                    leafNodeClassName="node__leaf"
                    pathFunc="step"
                    orientation="vertical"
                    collapsible={true}
                    translate={{ x: 150, y: 30 }}
                    zoomable={true}
                    scaleExtent={{ min: 0.1, max: 1.5 }}
                    separation={{ siblings: 0.7, nonSiblings: 1 }}
                    nodeSize={{ x: 120, y: 60 }}
                    pathClassFunc={() => "text-purple-600 stroke-2"}
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Transform Modified JSX to see the tree visualization
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiffingDemo;
