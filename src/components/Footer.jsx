import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-10 bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
        </div>
        <p className="text-sm">&copy; {currentYear} KuickTech. Semua Hak Dilindungi.</p>
        <p className="text-xs mt-2">
        </p>
      </div>
    </footer>
  );
};

export default Footer;