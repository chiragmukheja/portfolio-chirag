import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaReact, FaJava, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
export const skillData = [
    { name: "HTML", icon: <FaHtml5 size={60} className="text-orange-400" /> },
    { name: "CSS", icon: <FaCss3 size={60} className="text-gray-400" />},
    { name: "JavaScript", icon: <FaJs size={60} className="text-yellow-400" />},
    { name: "Node.js", icon: <FaNodeJs size={60} className="text-green-400" /> },
    { name: "React", icon: <FaReact size={60} className="text-blue-400" />},
    { name: "Tailwind CSS", icon: <SiTailwindcss size={60} className="text-blue-300" /> },
    { name: "Express.js", icon: <SiExpress size={60} className="text-gray-300" />},
    { name: "MongoDB", icon: <SiMongodb size={60} className="text-green-500" /> },
    { name: "Java", icon: <FaJava size={60} className="text-red-400" /> },
    { name: "SQL", icon: <FaDatabase size={60} className="text-indigo-400" /> },
    { name: "Git", icon: <FaGitAlt size={60} className="text-orange-400" /> },
    { name: "GitHub", icon: <FaGithub size={60} className="text-gray-400" />},
];
