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
    </div>
  );
};

export default About;
