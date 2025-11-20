import React from 'react';
import { BrainCircuitIcon } from './icons/BrainCircuitIcon';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg shadow-md shadow-green-500/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <BrainCircuitIcon className="w-8 h-8 text-green-400" />
          <h1 className="text-base md:text-lg font-bold text-white tracking-tight">
            Comparative EEG Neural Pattern Analysis of Occupant Responses to Window Configurations in Educational Environments
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;