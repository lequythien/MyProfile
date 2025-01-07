import React from "react";

const skills = [
  { name: "C", icon: "path/to/c-icon.png" },
  { name: "C++", icon: "path/to/cpp-icon.png" },
  { name: "C#", icon: "path/to/csharp-icon.png" },
  { name: "Node JS", icon: "path/to/nodejs-icon.png" },
  { name: "HTML", icon: "path/to/html-icon.png" },
  { name: "CSS", icon: "path/to/css-icon.png" },
  { name: "Javascript", icon: "path/to/javascript-icon.png" },
];

const Skills = () => {
  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl mb-4">Skills</h2>
      <div className="flex justify-center items-center gap-6 overflow-x-auto scrollbar-hide">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 shadow-lg p-4 rounded-md"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
