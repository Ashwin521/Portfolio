// components/About.jsx
"use client";
import React from "react";

const About = () => {
  return (
    <div className="py-12 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        I'm a passionate Frontend Developer skilled in building beautiful, fast,
        and accessible web apps. I enjoy transforming UI/UX designs into clean
        code and always aim to deliver pixel-perfect results.
      </p>
      <a
        href="/assets/ashwin_resume.pdf"
        className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        download
      >
        Download Resume
      </a>
    </div>
  );
};

export default About;
