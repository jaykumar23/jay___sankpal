import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-8 py-6 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm text-gray-600 gap-2 md:gap-0">
        <p>
          © 2025{" "}
          <span className="font-semibold text-purple-600">
            Jaykumar Sankpal
          </span>
        </p>
        <p>All rights reserved</p>
        <p>
          Made with <span className="text-purple-600">💜</span> by Jaykumar
        </p>
      </div>
    </footer>
  );
};
export default Footer;
