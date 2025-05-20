// import React, { useEffect, useState } from 'react';
// import { FaJs, FaReact, FaNodeJs, FaJava, FaDatabase, FaGitAlt, FaHtml5, FaCss3, FaGithub} from "react-icons/fa";
// import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
// import { Github, Linkedin, Mail, Twitter, Download, ExternalLink, BookOpen, Code, Cpu } from 'lucide-react';

// const Portfolio = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

  

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       setScrolled(offset > 100);

//       // Update active section based on scroll position
//       const sections = document.querySelectorAll('section');
//       sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
//           setActiveSection(section.getAttribute('id') || 'home');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (id: String) => {
//     const element = document.getElementById(id.toLowerCase());
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // SVG Background Components
  

//   const WaveBackground = () => (
//     <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10">
//       <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
//         <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="currentColor">
//           <animate attributeName="d" 
//                    dur="10s" 
//                    repeatCount="indefinite"
//                    values="M0,50 Q25,30 50,50 T100,50 V100 H0 Z;
//                           M0,50 Q25,70 50,50 T100,50 V100 H0 Z;
//                           M0,50 Q25,30 50,50 T100,50 V100 H0 Z"/>
//         </path>
//       </svg>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100">
//       {/* Floating Navbar */}
      

//       {/* Main Content */}
//       <div className="pt-16">
//         {/* Home Section with Enhanced Background & Memoji */}
      


// {/* About Section - Enhanced & Professional */}




//         {/* Skills Section */}
        

//         {/* Projects Section */}
        

//     {/* Education Section with Tree Visualization */}
    

//         {/* Contact Section */}
        
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
