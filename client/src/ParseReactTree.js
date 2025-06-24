import * as parser from "@babel/parser";
// const parser =  parserPkg.default||parserPkg;

import traversePkg from "@babel/traverse";
const traverse = traversePkg.default || traversePkg;

// const code = `
//   React.createElement("div", null, React.createElement("p", null, "Hello "), React.createElement("p", null,React.createElement("span", null, "hello")));
// `;
let ast;
export function parseTree(code) {
  console.log(code);
  ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  console.log(buildElementTree(ast.program.body[0].expression));
  return buildElementTree(ast.program.body[0].expression);
}
console.log(ast);
// console.log(ast.program.body);
// console.log(ast.program.body[0].expression);

// console.log(buildElementTree(ast.program.body[0].expression))

export function buildElementTree(node) {
  console.log(node);
  if (
    node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.object.name === "React" &&
    node.callee.property.name === "createElement"
  ) {
    const element = {
      type: node.arguments[0].value,
      props: {},
      children: [],
    };

    //Extract props
    if (node.arguments[1] && node.arguments[1].type === "ObjectExpression") {
      node.arguments[1].properties.forEach((prop) => {
        if (prop.type === "Objectproperty") {
          if (prop.value.type === "StringLiteral") {
            element.props[prop.key.name] = prop.value.value;
          } else if (prop.value.type === "NumericalLiteral") {
            element.props[prop.key.name] = prop.value.value;
          } else if (prop.value.type === "BooleanLiteral") {
            element.props[prop.key.name] = prop.value.value;
          }
        } else {
          console.log("unknown prop");
        }
      });
    }

    //extract chilren
    for (let i = 2; i < node.arguments.length; i++) {
      const child = node.arguments[i];
      if (
        child.type === "StringLiteral" ||
        child.type === "NumericalLiteral" ||
        child.type === "BooleanLiteral"
      ) {
        element.children.push(child.value);
      } else if (child.type === "CallExpression") {
        element.children.push(buildElementTree(child));
      } else {
        console.log("unknown child type");
      }
    }
    console.log(element);
    return element;
  }
}
