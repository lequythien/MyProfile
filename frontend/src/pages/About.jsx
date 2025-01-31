import React from "react";
import { motion } from "framer-motion";
import LeQuyThien from '../assets/LeQuyThien2.png';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="bg-gray-100 shadow-lg rounded-2xl p-4 md:p-8 w-full max-w-4xl text-center">
        {/* Avatar */}
        <motion.img
          src={LeQuyThien}
          alt="Profile"
          className="w-32 h-32 mx-auto mt-4 md:mt-2 rounded-full border-4 border-blue-400"
        />
        
        {/* Thông tin cá nhân */}
        <h2 className="text-3xl font-bold text-gray-800 mt-4">Lê Quý Thiện</h2>
        <p className="text-lg text-gray-600">INTER FRONTEND DEVELOPER</p>

        {/* Mô tả ngắn */}
        <p className="mt-4 text-gray-700 text-lg">
          Tôi là một lập trình viên Frontend với đam mê xây dựng giao diện web đẹp, mượt mà và tối ưu trải nghiệm người dùng. Tôi có kinh nghiệm làm việc với <strong>ReactJS</strong>, <strong>PHP</strong>, và thiết kế UI/UX.
        </p>

        {/* Kinh nghiệm & Kỹ năng */}
        <div className="mt-6 text-left">
          <h3 className="text-2xl font-semibold text-gray-800">🔹Kỹ năng chính:</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2 text-lg">
            <li>⚡Xây dựng giao diện với TailwindCSS & Bootstrap</li>
            <li>⚡Backend cơ bản với PHP & MySQL</li>
            <li>⚡Responsive Design, tối ưu SEO & Performance</li>
            <li>⚡Git, REST API, MongoDB, Firebase Authentication</li>
          </ul>
        </div>

        {/* Mục tiêu nghề nghiệp */}
        <div className="mt-6 text-left">
          <h3 className="text-2xl font-semibold text-gray-800">🎯 Mục tiêu & Định hướng:</h3>
          <p className="text-gray-700 mt-2 text-lg">
            Tôi mong muốn phát triển sự nghiệp trong lĩnh vực Frontend, không ngừng nâng cao kỹ năng lập trình và đóng góp vào các dự án thực tế. Mục tiêu trong tương lai là trở thành một <strong>Frontend Developer</strong> với chuyên môn cao.
          </p>
        </div>

        {/* Hiệu ứng */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-8 py-4 bg-blue-500 text-white text-lg rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Liên hệ với tôi
        </motion.button>
      </div>
    </div>
  );
};

export default About;
