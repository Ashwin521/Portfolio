"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-[#0a0e1a] dark:bg-[#0a0e1a] text-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Brand */}
        <Link href="/" className="text-xl font-bold text-blue-500">
          Ashwin.dev
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-blue-700 dark:text-white">
          <Link href="/" className="hover:text-purple-500 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-purple-500 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-purple-500 transition">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button className="md:hidden text-3xl text-white" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 text-blue-400">
          <Link href="/" onClick={toggleMenu} className="hover:text-purple-500">
            Home
          </Link>
          <Link
            href="/projects"
            onClick={toggleMenu}
            className="hover:text-purple-500"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="hover:text-purple-500"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
