/** @format */

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to="/login" aria-label="instagram logo">
                <img
                  src="/images/logo.png"
                  alt="instagram"
                  className="mt-2 w-6/12"
                />
              </Link>
            </h1>
          </div>
          <div className="text-gray-700 text-center flex items-center align-items"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
