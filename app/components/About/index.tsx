"use client";
import React, { useState, useEffect, useMemo } from "react";

const About = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [typedDeveloperItems, setTypedDeveloperItems] = useState<string[]>([]);
  const [typedInfoItems, setTypedInfoItems] = useState<string[]>([]);

  const developerItems = useMemo(
    () => ["e-Commerce,", "Blockchain,", "Project Mgmt.,", "Blog,", "Bots,", "Real Estate"],
    []
  );

  const infoItems = useMemo(
    () => ["Year: 1998,", "Location: .ph🇵🇭,", "Gender: Male"],
    []
  );

  useEffect(() => {
    if (showDeveloper) {
      let index = -1;
      setTypedDeveloperItems([]);
      const interval = setInterval(() => {
        setTypedDeveloperItems((prev) => [...prev, developerItems[index]]);
        index++;
        if (index === developerItems.length) {
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [developerItems, showDeveloper]);

  useEffect(() => {
    if (showInfo) {
      let index = -1;
      setTypedInfoItems([]);
      const interval = setInterval(() => {
        setTypedInfoItems((prev) => [...prev, infoItems[index]]);
        index++;
        if (index === infoItems.length) {
          clearInterval(interval);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [infoItems, showInfo]);

  const toggleDeveloper = () => {
    setShowDeveloper(!showDeveloper);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "JohnAlesiResurreccion_Resume.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col items-start">
      <code className="text-2xl md:text-4xl">John Alesi Resurreccion</code>

      {/* Developer Section */}
      <code
        onClick={toggleDeveloper}
        className="cursor-pointer text-[11.5px] md:text-base font-bold"
      >
        Developer: {"{"}
        {showDeveloper ? (
          <div className="flex flex-col ml-1 md:ml-4 font-normal">
            {typedDeveloperItems.map((item, index) => (
              <code key={index} className="typing-animation">
                {item}
              </code>
            ))}
          </div>
        ) : (
          "..."
        )}
        {"},"}
      </code>
      <code
        onClick={toggleInfo}
        className="cursor-pointer text-[11.5px] md:text-base font-bold"
      >
        Info: {"{"}
        {showInfo ? (
          <div className="flex flex-col ml-1 md:ml-4 font-normal">
            {typedInfoItems.map((item, index) => (
              <code key={index} className="typing-animation">
                {item}
              </code>
            ))}
          </div>
        ) : (
          "..."
        )}
        {"},"}
      </code>
      <code className="flex flex-row cursor-pointer" onClick={handleDownloadResume}>
        Resume <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-4 h-4 fill-current ml-1 mt-0.5"
        >
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
        </svg>
      </code>
    </div>
  );
};

export default About;
