import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaTiktok } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import Button from "../components/ui/Button";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-full px-6 sm:px-16 md:px-20 py-16 md:py-32 text-white overflow-x-hidden">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="space-y-4 text-center md:text-left"
      >
        <h1 className="text-2xl sm:text-3xl text-red-500 font-bold flex items-center justify-center md:justify-start">
          Hi There!{" "}
          <motion.span
            animate={{ rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            👋
          </motion.span>
        </h1>

        <h2 className="text-3xl sm:text-4xl h-20 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
          <Typewriter
            options={{
              strings: ["I'm Lê Quý Thiện", "Frontend Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="text-red-400 text-lg font-medium">FRONTEND DEVELOPER</p>

        {/* Social Icons */}
        <motion.div className="flex space-x-4 text-pink-400 text-2xl justify-center md:justify-start">
          <a
            href="https://www.facebook.com/quythien.le.50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-blue-500 cursor-pointer transition" />
          </a>
          <a
            href="https://www.tiktok.com/@zacubj2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="hover:text-black cursor-pointer transition" />
          </a>
          <a
            href="https://github.com/lequythien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-500 cursor-pointer transition" />
          </a>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 justify-center md:justify-start">
          <motion.div>
            <Button className="bg-gray-700 px-6 py-3 rounded-lg hover:bg-gray-600 transition">
              MY SKILL 🔥
            </Button>
          </motion.div>

          <motion.div>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 rounded-lg items-center gap-2 shadow-lg">
              GET RESUME <i class="fa-solid fa-download"></i>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Code Display */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 p-6 rounded-xl shadow-lg text-sm font-mono mt-8 md:mt-0 w-full md:w-1/2 animate-border"
      >
        <div className="overflow-x-auto">
          <pre className="text-white whitespace-pre">
            <span className="text-blue-400">const </span>
            <span className="text-white">developer</span>
            <span className="text-blue-400"> = </span>
            <span className="text-green-400">{"{"}</span>
            <br />
            <span className="text-white ml-6">name</span>:
            <span className="text-yellow-400 ml-1">"Lê Quý Thiện"</span>,<br />
            <span className="text-white ml-6">skills</span>:
            <span className="text-yellow-400 ml-1">
              ['HTML', 'CSS', 'JS', 'React', 'Tailwind CSS', 'GitHub', '...']
            </span>
            ,<br />
            <span className="text-white ml-6">hardWorker</span>:
            <span className="text-green-400 ml-1">true</span>,<br />
            <span className="text-white ml-6">quickLearner</span>:
            <span className="text-green-400 ml-1">true</span>,<br />
            <span className="text-white ml-6">problemSolver</span>:
            <span className="text-green-400 ml-1">true</span>,<br />
            <span className="text-white ml-6">hireable</span>:
            <span className="text-blue-400 ml-1">function ()</span>
            <span className="text-green-400">{" {"}</span>
            <br />
            <span className="text-blue-400 ml-12">return</span>
            <span className="text-green-400">{" ("}</span>
            <br />
            <span className="text-white ml-16">this</span>.
            <span className="text-white">hardWorker</span>
            <span className="text-blue-400 ml-1">&&</span>
            <br />
            <span className="text-white ml-16">this</span>.
            <span className="text-white">problemSolver</span>
            <span className="text-blue-400 ml-1">&&</span>
            <br />
            <span className="text-white ml-16">this</span>.
            <span className="text-white">skills.length</span>
            <span className="text-blue-400 ml-1">=</span>
            <span className="text-green-400 ml-1">2</span>
            <br />
            <span className="text-green-400 ml-12">{"};"}</span>
            <br />
            <span className="text-green-400 ml-6">{"};"}</span>
            <br />
            <span className="text-green-400">{"};"}</span>
          </pre>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
