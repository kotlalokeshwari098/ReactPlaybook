import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">React Playbook</h1>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "text-white font-medium border-b-2 border-white pb-1" 
                : "text-indigo-100 hover:text-white transition-colors duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/jsxconverter" 
            className={({ isActive }) => 
              isActive 
                ? "text-white font-medium border-b-2 border-white pb-1" 
                : "text-indigo-100 hover:text-white transition-colors duration-200"
            }
          >
            JSX Converter
          </NavLink>
          <NavLink 
            to="/diffingDemo" 
            className={({ isActive }) => 
              isActive 
                ? "text-white font-medium border-b-2 border-white pb-1" 
                : "text-indigo-100 hover:text-white transition-colors duration-200"
            }
          >
            Diffing Demo
          </NavLink>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-700 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 px-4 bg-indigo-800 rounded text-white" 
                  : "block py-2 px-4 hover:bg-indigo-800 rounded text-indigo-100"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/jsxconverter" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 px-4 bg-indigo-800 rounded text-white" 
                  : "block py-2 px-4 hover:bg-indigo-800 rounded text-indigo-100"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              JSX Converter
            </NavLink>
            <NavLink 
              to="/diffingDemo" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 px-4 bg-indigo-800 rounded text-white" 
                  : "block py-2 px-4 hover:bg-indigo-800 rounded text-indigo-100"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Diffing Demo
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;