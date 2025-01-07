import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { BsFillFlagFill } from "react-icons/bs";

const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div
      className={`flex items-center justify-between py-3 px-4 sm:px-8 shadow-md sticky top-0 z-50 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <img
        onClick={() => navigate("/")}
        className="w-32 sm:w-40 cursor-pointer"
        src={logo}
        alt="Logo"
      />

      {/* Desktop Navigation Menu */}
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${
                  darkMode ? "underline text-blue-300" : "underline text-blue-500"
                }`
              : `hover:${
                  darkMode ? "text-blue-300" : "text-blue-500"
                } cursor-pointer`
          }
        >
          <li className="py-1 text-base">
            {language === "en" ? "Home" : "Trang chủ"}
          </li>
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive
              ? `${
                  darkMode ? "underline text-blue-300" : "underline text-blue-500"
                }`
              : `hover:${
                  darkMode ? "text-blue-300" : "text-blue-500"
                } cursor-pointer`
          }
        >
          <li className="py-1 text-base">
            {language === "en" ? "Projects" : "Dự án"}
          </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${
                  darkMode ? "underline text-blue-300" : "underline text-blue-500"
                }`
              : `hover:${
                  darkMode ? "text-blue-300" : "text-blue-500"
                } cursor-pointer`
          }
        >
          <li className="py-1 text-base">
            {language === "en" ? "Contact" : "Liên hệ"}
          </li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? `${
                  darkMode ? "underline text-blue-300" : "underline text-blue-500"
                }`
              : `hover:${
                  darkMode ? "text-blue-300" : "text-blue-500"
                } cursor-pointer`
          }
        >
          <li className="py-1 text-base">
            {language === "en" ? "About" : "Giới thiệu"}
          </li>
        </NavLink>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-2xl focus:outline-none"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white text-gray-800 shadow-lg p-4 md:hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${
                    darkMode
                      ? "underline text-blue-300"
                      : "underline text-blue-500"
                  }`
                : `hover:${
                    darkMode ? "text-blue-300" : "text-blue-500"
                  } cursor-pointer`
            }
          >
            <li className="py-2 text-base">
              {language === "en" ? "Home" : "Trang chủ"}
            </li>
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? `${
                    darkMode
                      ? "underline text-blue-300"
                      : "underline text-blue-500"
                  }`
                : `hover:${
                    darkMode ? "text-blue-300" : "text-blue-500"
                  } cursor-pointer`
            }
          >
            <li className="py-2 text-base">
              {language === "en" ? "Projects" : "Dự án"}
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `${
                    darkMode
                      ? "underline text-blue-300"
                      : "underline text-blue-500"
                  }`
                : `hover:${
                    darkMode ? "text-blue-300" : "text-blue-500"
                  } cursor-pointer`
            }
          >
            <li className="py-2 text-base">
              {language === "en" ? "Contact" : "Liên hệ"}
            </li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${
                    darkMode
                      ? "underline text-blue-300"
                      : "underline text-blue-500"
                  }`
                : `hover:${
                    darkMode ? "text-blue-300" : "text-blue-500"
                  } cursor-pointer`
            }
          >
            <li className="py-2 text-base">
              {language === "en" ? "About" : "Giới thiệu"}
            </li>
          </NavLink>
        </ul>
      )}

      {/* Group Theme Toggle and Language Selector */}
      <div className="flex items-center sm:gap-4">
        <div
          onClick={toggleTheme}
          className={`relative mx-2 w-14 h-7 flex items-center bg-gray-200 rounded-full p-1 cursor-pointer transition-colors ${
            darkMode ? "bg-blue-400" : ""
          }`}
        >
          <div
            className={`absolute left-1 text-xl text-gray-700 transition-all duration-300 ${
              darkMode ? "translate-x-6" : ""
            }`}
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </div>
        </div>

        <select
          onChange={toggleLanguage}
          value={language}
          className={`p-1 rounded-md px-1 border border-gray-300 bg-white flex items-center gap-2 ${
            darkMode ? "text-black bg-gray-800" : "text-gray-800"
          }`}
        >
          <option value="en" className="flex items-center">
            <BsFillFlagFill className="mr-2" /> English
          </option>
          <option value="vi" className="flex items-center">
            <BsFillFlagFill className="mr-2" /> Tiếng Việt
          </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
