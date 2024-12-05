import React from "react";

const Footer = () => {
  return (
    <div className="bg-customBlue p-4 sm:p-6 lg:p-8">
      <div className="flex  items-center justify-between">
        <div className="text-white flex items-center gap-2">
          <img src="/white-logo.png" alt="footer logo" className="w-4 h-auto" />
          <span className="uppercase font-semibold text-xs">
            Logo Here
          </span>
        </div>
        <p className="text-xs  text-white">
          © Aqarmarket 2024 all rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
