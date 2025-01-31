import React from "react";
import { motion } from "framer-motion";
import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.jpg';

const projects = [
  {
    id: 1,
    title: "Website Đặt Lịch Hẹn Trực Tuyến Cho Phòng Khám Sức Khỏe",
    description: "Trang web xây dựng ứng dụng đặt lịch hẹn trực truyến cho phòng khám sức khỏe",
    tech: "React JS, Vite, Tailwind CSS, Node JS, Express JS",
    image: Project1,
    link: "#"
  },
  {
    id: 2,
    title: "Website LQT Shop",
    description: "Website thương mại điện tử với chức năng giỏ hàng, thanh toán.",
    tech: "HTML, CSS, PHP, Bootstrap 5, MySQL",
    image: Project2,
    link: "#"
  },
  {
    id: 3,
    title: "Website Flipmart",
    description: "Website thương mại điện tử với các chức năng giỏ hàng, thanh toán, thêm, sửa, xóa và xem thống kê,...",
    tech: "HTML, CSS, Java, Javascript, MySQL",
    image: Project3,
    link: "#"
  }
];

const Project = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6 md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10"
      >
        My Projects
      </motion.h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
              <p className="text-sm text-blue-500 mt-2">{project.tech}</p>
              <a
                href={project.link}
                className="inline-block mt-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;