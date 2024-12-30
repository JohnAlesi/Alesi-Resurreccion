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
    if (component === "Download") {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "JohnAlesiResurreccion_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    // Set active component for other menu items
    setActiveComponent(component);
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
          className="focus:outline-none"
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
        } absolute md:static w-[365px] flex flex-col p-8 md:p-0 md:w-auto bg-white text-[#7A7A7A] md:text-white rounded-2xl left-[33px] md:bg-transparent md:flex md:flex-row gap-6 justify-end text-lg`}
      >
        {navItems.map((item) => (
          <li key={item.label} className="text-center">
            <code
              onClick={() => handleClick(item.component)}
              className="cursor-pointer hover:underline hover:font-bold"
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
