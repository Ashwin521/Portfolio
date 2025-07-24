// app/projects/page.js
import React from "react";
import Projects from "../../src/pages/Projects";

const ProjectsPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Projects />
    </main>
  );
};

export default ProjectsPage;
