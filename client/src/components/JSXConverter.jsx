import React, { useState } from 'react';
import * as Babel from '@babel/standalone';

export default function JSXConverter() {
  const [jsxCode, setJsxCode] = useState('');
  const [output, setOutput] = useState('');

  const transformJsx = () => {
    try {
      const result = Babel.transform(jsxCode, {
        presets: ['react']
      });
      setOutput(result.code);
    } catch (err) {
      setOutput(err.message);
    }
  };

  return (
    <div>
      <h2>JSX to JS Transformer</h2>
      <textarea
        rows={5}
        cols={50}
        value={jsxCode}
        onChange={(e) => setJsxCode(e.target.value)}
      />
      <button onClick={transformJsx}>Transform</button>
      <pre>{output}</pre>
    </div>
  );
}
