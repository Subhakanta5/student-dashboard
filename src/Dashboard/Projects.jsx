import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaShoppingCart,
  FaTasks,
  FaGlobe,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    description:
      "A modern online shopping application with cart, authentication, and product management.",
    tech: "React • Tailwind CSS • Axios",
    icon: <FaShoppingCart className="text-5xl text-blue-500" />,
  },
  {
    id: 2,
    title: "Task Management",
    description:
      "Organize daily tasks, track progress, and manage productivity with an intuitive dashboard.",
    tech: "React • JSON Server • Tailwind",
    icon: <FaTasks className="text-5xl text-green-500" />,
  },
  {
    id: 3,
    title: "Solar System",
    description:
      "Interactive website exploring the planets with videos, animations, and detailed information.",
    tech: "React • Tailwind CSS",
    icon: <FaGlobe className="text-5xl text-cyan-500" />,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A professional portfolio showcasing projects, skills, and contact information.",
    tech: "React • Tailwind CSS",
    icon: <FaReact className="text-5xl text-sky-400" />,
  },
];

const Projects = () => {
  return (
    <>
    <main className="flex-1 min-h-screen bg-slate-950 text-white flex justify-center px-8 py-20">
  <div className="w-full max-w-6xl">

    {/* Heading */}
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold">
        My <span className="text-blue-500">Projects</span>
      </h1>

      <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
        Explore some of my latest web development projects.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition duration-300"
        >
          {/* Card Header */}
          <div className="h-48 flex items-center justify-center">
            {project.icon}
          </div>

          {/* Card Body */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3 text-center">
              {project.title}
            </h2>

            <p className="text-gray-400 text-sm leading-7 text-center">
              {project.description}
            </p>

            <div className="mt-5 text-center">
              <span className="text-blue-400 text-sm font-medium">
                {project.tech}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>

</main>

</>
  );
};

export default Projects;