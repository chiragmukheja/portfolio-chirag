
import { projects } from '../data/projects';
import { Github, ExternalLink } from 'lucide-react';
const ProjectsSection = () => (
    <section id="projects" className="min-h-screen flex flex-col items-center bg-gray-800">
    <div className="max-w-8xl w-full mx-auto px-20 py-16">
      <h2 className="text-7xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text leading-tight pb-2">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden transform hover:scale-105 transition-transform scroll-animation flex flex-col"
          >
            <img
              src={project.image}
              alt={`Project ${project.name}`}
              className="w-full h-64 object-contain mx-auto"
            />
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-semibold text-xl text-gray-200 mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.id === 1 &&
                    "A React-based task management platform where admins can assign tasks to employees in real time. The dashboard reflects task status dynamically — categorized into New, Pending, Completed, and Deleted — for both admins and employees."}
                  {project.id === 2 &&
                    "A scalable backend architecture for an e-commerce platform built with Node.js, featuring secure authentication using JWT, session handling, and cookies. Includes robust add-to-cart functionality and route protection — structured for extensibility."}
                  {project.id === 3 &&
                    "A Chrome Extension built with JavaScript and Manifest V3 that allows users to bookmark moments within YouTube videos for quick revisit without searching again."}
                </p>
              </div>

              <div className="flex justify-end space-x-6 mt-6">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 flex items-center"
                >
                  <Github className="mr-1" size={20} /> Code
                </a>

                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 flex items-center"
                  >
                    <ExternalLink className="mr-1" size={20} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ProjectsSection;