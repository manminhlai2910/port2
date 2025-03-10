import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { gitUrls } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-e-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
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
                className="mb-6 rounded"
              />
              {project.title === "Resume" && (
                <a
                  href="../../public/Resume-2.pdf" // Link to the PDF file in public/assets folder
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // For security reasons
                  className="block mx-0 my-4 px-6 py-2 rounded-full w-39 border-2 border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white hover:border-purple-900 transition-all duration-300 cursor-pointer"
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
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <>
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                </>
              ))}
              <button
                key={index}
                className="block mx-0 my-4 px-6 py-2 rounded-full border-2 border-purple-900 text-purple-900 hover:bg-purple-900 hover:text-white hover:border-purple-900 transition-all duration-300 cursor-pointer"
                onClick={() =>
                  (window.location.href = "https://github.com/manminhlai2910")
                }
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
