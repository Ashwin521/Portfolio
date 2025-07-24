"use client";
import React from "react";
import { projectData } from "../data/ProjectData";

const Projects = () => {
  return (
    <div className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div
            key={project.key}
            className="bg-white dark:bg-gray-800 shadow-md border dark:border-gray-700 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400 hover:underline transition">
              {project.name}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded transition-transform duration-200 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.Visit}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-all duration-200 transform hover:scale-105"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
