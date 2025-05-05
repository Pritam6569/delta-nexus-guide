
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-delta-darker py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <img 
                src="/delta-logo.svg" 
                alt="Delta Logo" 
                className="w-6 h-6" 
              />
              <h2 className="text-xl font-bold gradient-text">Delta Guide</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Official resource for Delta Executor users
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm mb-1">
              &copy; {currentYear} Delta Team
            </p>
            <div className="text-gray-500 text-xs">
              All rights reserved
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p>Credits: Delta team 2025</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
