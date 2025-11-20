import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500">
        <p>&copy; 2024 Brainwave & Environment Research Team. All Rights Reserved.</p>
        <p className="text-sm mt-2">Presented at 2026 IAQVEC Conference, Los Angeles</p>
      </div>
    </footer>
  );
};

export default Footer;