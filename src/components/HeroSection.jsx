"use client";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../../public/assets/photo.jpg"; // ✅ Ensure this path is correct

export default function HeroSection() {
  return (
    <section
      className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 
                 bg-gradient-to-b from-white to-blue-100 dark:from-gray-900 dark:to-black transition-all duration-300"
    >
      {/* Profile Picture */}
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-blue-500 shadow-lg">
        <Image
          src={profilePic}
          alt="Ashwin's Profile"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
        Hi, I'm Ashwin 👋
      </h1>

      {/* Intro */}
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-4">
        A passionate Frontend Developer building modern web apps using React,
        Next.js & Tailwind CSS.
      </p>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-4">
        I am also familiar with backend frameworks like Node.js and Express.js.
      </p>

      {/* Educational Details */}
      <div className="text-md md:text-lg text-gray-700 dark:text-gray-400 max-w-xl mb-8 space-y-2">
        <p>🎓 <strong>B.Sc. IT</strong> — Sahyog College of Management Studies, Thane (2022–2025)</p>
        <p>🎓 <strong>12th Science</strong> — B.N.N College, Bhiwandi (2021–2022)</p>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap">
        <Link
          href="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow transition"
        >
          View Projects
        </Link>

        <Link
          href="/contact"
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
