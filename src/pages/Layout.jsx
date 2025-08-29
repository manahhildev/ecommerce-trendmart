import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Navbar */}
      <nav className="p-4 bg-gray-900 text-white flex justify-between items-center">
        {/* Left: Logo (space on left by default due to padding) */}
        <div className="text-4xl font-extrabold italic tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 text-transparent bg-clip-text">
          Trend<span className="text-white">Mart</span>
        </div>
        {/* Right: Links with spacing + right padding */}
        <div className="flex gap-6 pr-10">
          <NavLink to="/" end className={({ isActive }) => isActive ? "underline" : "hover:text-yellow-400 text-white"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : "hover:text-yellow-400 text-white-300"}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "underline" : "hover:text-yellow-300 text-white"}>
            Services
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : "hover:text-yellow-300 text-white"}>
            Contact
          </NavLink>
        </div>
      </nav>

      {/* Page content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
