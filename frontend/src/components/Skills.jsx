import React from "react";
import Marquee from "react-fast-marquee";

import skillNodeJs from "../assets/nodejs.png";
import skillHtml from "../assets/html.png";
import skillCss from "../assets/css.png";
import skillJavascript from "../assets/js.png";
import skillReact from "../assets/react.png";
import skillBootstrap5 from "../assets/bootrap.png";
import skillPhotoshop from "../assets/photoshop.png";
import skillVsCode from "../assets/vscode.png";
import skillWordPress from "../assets/wordpress.png";
import skillTailwind from "../assets/tailwind.png";
import skillTs from "../assets/typescript.png";
import skillFigma from "../assets/figma.png";
import skillMongoDB from "../assets/mongodb.svg";

import skillGitHub from "../assets/github.png";
import skillCapCut from "../assets/capcut.webp";

const skills = [
  { name: "HTML", icon: skillHtml },
  { name: "CSS", icon: skillCss },
  { name: "Javascript", icon: skillJavascript },
  { name: "Bootstrap 5", icon: skillBootstrap5 },
  { name: "React", icon: skillReact },
  { name: "Node JS", icon: skillNodeJs },
  { name: "WordPress", icon: skillWordPress },
  { name: "Typescript", icon: skillTs },
  { name: "Tailwind", icon: skillTailwind },
  { name: "VS Code", icon: skillVsCode },
  { name: "Photoshop", icon: skillPhotoshop },
  { name: "Figma", icon: skillFigma },
  { name: "MongoDB", icon: skillMongoDB },
  { name: "GitHub", icon: skillGitHub },
  { name: "CapCut", icon: skillCapCut },
];

const Skills = () => {
  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl my-4">Skills</h2>
      <Marquee gradient={false} speed={50}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col w-36 md:w-60 items-center bg-gray-100 shadow-lg p-4 rounded-md mx-4"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
