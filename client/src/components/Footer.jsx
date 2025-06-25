import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              React Playbook
            </h3>
            <p className="text-sm">An interactive platform to learn and experiment with React concepts.</p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">React Documentation</a></li>
              <li><a href="https://babeljs.io/docs/en/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Babel Documentation</a></li>
              <li><a href="https://github.com/kotlalokeshwari098/ReactPlaybook" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub Repository</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About</h3>
            <p className="text-sm mb-4">ReactPlaybook is an educational tool designed to help developers understand React's inner workings.</p>
            <p className="text-sm">© {new Date().getFullYear()} React Playbook</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;