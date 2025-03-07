import React from "react";
import { logo1 } from "./assets";
import { styles } from "./styles";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={`bg-primary ${styles.paddingX} pt-24 pb-10 bg-gradient-to-b from-[#000] to-[#1a1a2e] `}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img src={logo1} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-lg font-bold">LIVIARTO</p>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-secondary text-sm font-medium mt-6 md:mt-0">
          <li className="hover:text-white cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#work">Work</a>
          </li>
          <li className="hover:text-white cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          <a href="#" className="text-secondary hover:text-white text-lg">
            <FaFacebookF />
          </a>
          <a href="#" className="text-secondary hover:text-white text-lg">
            <FaTwitter />
          </a>
          <a href="#" className="text-secondary hover:text-white text-lg">
            <FaInstagram />
          </a>
          <a href="#" className="text-secondary hover:text-white text-lg">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-secondary text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} LIVIARTO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
