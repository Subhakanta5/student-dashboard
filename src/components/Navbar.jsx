import React from "react";
import { FaRocket } from "react-icons/fa";
import { Gi3dHammer, GiThorHammer } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          <div>
            <Link to={"/home"} className="flex justify-center gap-2 text-white text-3xl font-bold tracking-wide">
              <GiThorHammer size={35} color="gray"/>
              Project<span className="text-blue-500">S</span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-12">
          <li>
            <Link
              to="/home"
              className="text-gray-300 hover:text-white transition duration-300 font-medium relative group"
            >
              Home
              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link 
              to="/about"
              className="text-gray-300 hover:text-white transition duration-300 font-medium relative group"
            >
              About
              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Link to={"/login"} className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition duration-300 shadow-lg shadow-blue-600/20">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;