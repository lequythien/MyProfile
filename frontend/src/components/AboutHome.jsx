import React from "react";
import LeQuyThien from "../assets/LeQuyThien2.png";

const AboutHome = () => {
  return (
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex-3 flex justify-center md:justify-start">
        <img
          src={LeQuyThien}
          alt="Your Profile"
          className="rounded-full w-48 h-48 shadow-lg object-cover"
        />
      </div>

      <div className="flex-7 text-left md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          LET ME INTRODUCE MYSELF
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          I fell in love with programming and I have at least learnt something,
          I think...{" "}
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I am fluent in classics like{" "}
          <span className="font-bold text-blue-500">HTML</span>,{" "}
          <span className="font-bold text-blue-500">CSS</span>,{" "}
          <span className="font-bold text-blue-500">JavaScript</span>,{" "}
          <span className="font-bold text-blue-500">ReactJS</span>,{" "}
          <span className="font-bold text-blue-500">Tailwind CSS</span>,{" "}
          <span className="font-bold text-blue-500">GitHub</span> ..v.v...
        </p>
        <p className="text-lg text-gray-700 mb-4">
          My field of interests are building new{" "}
          <span className="font-bold text-blue-500">Web Technologies</span> and{" "}
          <span className="font-bold text-blue-500">Products</span>.
        </p>
        <p className="text-lg text-gray-700">
          Whenever possible, I also apply my passion for developing products
          with <span className="font-bold text-blue-500">ReactJS</span>.
        </p>
      </div>
    </div>
  );
};

export default AboutHome;
