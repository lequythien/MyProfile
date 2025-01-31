import React from "react";
import { FaFacebookF, FaTiktok, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import LeQuyThien from '../assets/LeQuyThien2.png';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-5">
      <div className="bg-gray-100 shadow-lg rounded-2xl p-8 max-w-lg text-center">
        {/* Avatar & Name */}
        <motion.img
          src={LeQuyThien}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-pink-400"
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">Lê Quý Thiện</h2>
        <p className="text-gray-600">INTER FRONTEND DEVELOPER</p>

        {/* Social Links */}
        <motion.div className="flex space-x-4 mt-4 justify-center text-pink-400 text-2xl">
          <a href="https://www.facebook.com/quythien.le.50" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
          </a>
          <a href="https://www.tiktok.com/@zacubj2" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-black cursor-pointer transition" />
          </a>
          <a href="https://github.com/lequythien" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-500 cursor-pointer transition" />
          </a>
        </motion.div>

        {/* Contact Form */}
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400"
            rows="4"
          ></textarea>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
