import React from 'react';
import { navItems } from '../data/navItems';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps & { scrolled?: boolean }> = ({ activeSection, scrollToSection, scrolled = false }) => (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'w-[90%] md:w-[900px]' : 'w-[95%] md:w-[1200px]'}`}>
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-full border border-gray-700 shadow-lg shadow-purple-500/20">
          <div className="flex justify-center items-center h-16 px-6">
            <div className="flex space-x-18">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-lg font-semibold transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                    ? 'text-purple-400 scale-125'
                    : 'text-gray-400 hover:text-purple-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
);
export default Navbar;