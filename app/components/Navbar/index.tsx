"use client";
import React, { useState } from "react";
import { navItems } from "./config"; // Import the nav items config
import Stacks from "../Stacks"; // Import components as needed
import Projects from "../Projects";
import Contact from "../Contact";
import Experience from "../Experience";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeComponent, setActiveComponent] = useState<string>("");

  const handleClick = (component: string) => {
    setActiveComponent(component); // Set the active component
    setIsOpen(false); // Close the menu
  };

  const renderComponent = (component: string) => {
    switch (component) {
      case "Projects":
        return <Projects />;
      case "Stacks":
        return <Stacks />;
      case "Contact":
        return <Contact />;
      case "Experience":
        return <Experience />;
      default:
        return null;
    }
  };

  return (
    <nav>
      {/* Hamburger Menu */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:text-yellow-400 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navigation Items */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute md:static w-60 md:w-auto bg-transparent md:bg-transparent md:flex md:flex-row gap-6 justify-end text-lg`}
      >
        {navItems.map((item) => (
          <li key={item.label} className="text-center">
            <code
              onClick={() => handleClick(item.component)} // Close menu on click
              className="cursor-pointer"
            >
              {item.label}
            </code>
          </li>
        ))}
      </ul>

      {/* Render Active Component */}
      <div className="mt-4">{renderComponent(activeComponent)}</div>
    </nav>
  );
};

export default Nav;
