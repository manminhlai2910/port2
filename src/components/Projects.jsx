import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-gray-200 pb-4 text-gray-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold text-emerald-600"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded border border-gray-200 shadow-sm"
              />
              {project.title === "Resume" && (
                <a
                  href="../../public/Resume.pdf" // Link to the PDF file in public/assets folder
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // For security reasons
                  className="block mx-0 my-4 px-6 py-2 rounded-full w-fit border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Download CV
                </a>
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-full lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-indigo-500 text-xl">
                {project.title}
              </h6>
              <p className="mb-4 text-gray-600">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <>
                    <span
                      key={index}
                      className="mr-2 mb-2 inline-block rounded bg-emerald-100 px-2 py-1 text-sm font-medium text-emerald-700"
                    >
                      {tech}
                    </span>
                  </>
                ))}
              </div>
              <button
                key={index}
                className="px-6 py-2 rounded-full border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-all duration-300 cursor-pointer"
                onClick={() => (window.location.href = project.links)}
              >
                Github
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
