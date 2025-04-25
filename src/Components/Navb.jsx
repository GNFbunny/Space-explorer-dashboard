import React from "react";

function Navb () {
    return (
              <nav className="flex items-center px-6 py-4 bg-gray-900 text-white space-x-6">
                {/* Logo + Name */}
                <div className="flex items-center space-x-2">
                  <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                  <span className="text-xl font-bold">Spex</span>
                </div>
          
                {/* Navigation Buttons */}
                <button className="hover:text-blue-400">Pricing</button>
                <button className="hover:text-blue-400">Resources</button>
                <button className="hover:text-blue-400">Community</button>
          
                {/* Spacer to push profile to the right */}
                <div className="ml-auto">
                  <img src="/profile-icon.png" alt="Profile" className="h-8 w-8 rounded-full" />
                </div>
              </nav>
            )
          }

export default Navb;