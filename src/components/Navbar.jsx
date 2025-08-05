"use client";
import React, { useEffect, useState } from "react";
import navItems from "../data/navItems";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buffer = 100;

      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - buffer) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <ul className="flex space-x-6 rounded-full px-6 py-3 mt-4 backdrop-blur-sm bg-white/70 dark:bg-black/60 shadow-md dark:shadow-white/10 transition-all duration-300">
        {navItems.map(({ id, label }) => (
          <li key={id} className="relative group">
            <a
              href={`#${id}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === id
                  ? "text-accent"
                  : "text-black dark:text-white group-hover:text-accent"
              }`}
            >
              {label}
            </a>
            <span
              className="absolute left-0 -bottom-1 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
