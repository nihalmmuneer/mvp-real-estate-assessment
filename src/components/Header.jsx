import React, { useState } from "react";
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className="bg-white flex items-center justify-between p-4 md:p-8 lg:p-10 px-4 md:px-16 relative overflow-hidden">
        <div>
          <img src="/header-logo.png" alt="header-logo" className="h-10 md:h-[40px]" />
        </div>
        <div className="hidden md:inline-block">
          <ul className="font-davidLibre flex gap-6 md:gap-8 text-xs">
            <li>Properties</li>
            <li>Projects</li>
            <li>Communities</li>
            <li>Locations</li>
            <li>Blog</li>
          </ul>
        </div>
        <button
          className="md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaAlignJustify className="text-2xl" />
          )}
        </button>
      </div>

      {showMenu && (
        <div className="h-screen w-[75%] sm:w-[400px] md:w-[600px] absolute right-0 top-0 bg-white shadow-lg z-50">
          <div className="p-8">
            <img src="/header-logo.png" alt="header-logo" className="h-10" />
          </div>
          <div className="text-center">
            <ul onClick={() => setShowMenu(false)}>
              <li className="bg-white p-5 text-lg border-b">Properties</li>
              <li className="bg-white p-5 text-lg border-b">Projects</li>
              <li className="bg-white p-5 text-lg border-b">Communities</li>
              <li className="bg-white p-5 text-lg border-b">Locations</li>
              <li className="bg-white p-5 text-lg border-b">Blog</li>
              <li className="pt-3">
                <button type="button" className="bg-cyan-600 rounded-full py-3 px-5 text-white">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
