import React from 'react';

const FloatingNav = ({ sections, scrollToSection }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {sections.map(({ ref, label, icon }) => (
        <button
          key={label}
          onClick={() => scrollToSection(ref)}
          className="btn-lift-glow group relative w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border-2 border-purple-200"
        >
          <span className="text-lg">{icon}</span>
          <div className="absolute right-14 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
            {label}
          </div>
        </button>
      ))}
    </div>
  );
};

export default FloatingNav;
