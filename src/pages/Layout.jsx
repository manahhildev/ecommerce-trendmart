import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons for mobile menu

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="p-4 bg-gray-900 text-white flex justify-between items-center relative">
        {/* Left: Logo */}
        <div className="text-4xl font-extrabold italic tracking-wide bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 text-transparent bg-clip-text">
          Trend<span className="text-white">Mart</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 pr-10 text-lg">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "underline text-yellow-400" : "hover:text-yellow-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline text-yellow-400" : "hover:text-yellow-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "underline text-yellow-400" : "hover:text-yellow-400"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-yellow-400" : "hover:text-yellow-400"
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Links */}
        {isOpen && (
          <div className="absolute top-16 right-4 bg-gray-800 rounded-lg shadow-lg flex flex-col gap-4 p-6 md:hidden z-50">
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400"
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>

      {/* Page content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
