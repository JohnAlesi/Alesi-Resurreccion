"use client";
import React, { useState } from "react";

const About = () => {
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [showInfo, setShowInfo] = useState<boolean>(false)

  const toggleDeveloper = () => {
    setShowDeveloper(!showDeveloper);
  };
  const toggelInfo = () => {
    setShowInfo(!showInfo);
  };
  return (
    <div className="flex flex-col items-start">
      <code className="text-sm md:text-4xl">John Alesi Resurreccion</code>
      <code onClick={toggleDeveloper} className="cursor-pointer text-xs md:text-base font-bold">
        Developer: {"{"}
        {showDeveloper ? (
          <div className="flex flex-col ml-4 mt-2 font-normal">
            <code>Blog,</code>
            <code>e-Commerce,</code>
            <code>Blockchain,</code>
            <code>Project Management</code>
          </div>
        ) : (
          "..."
        )}
        {"},"}
      </code>
      <code onClick={toggelInfo} className="cursor-pointer text-xs md:text-base font-bold">
        Info: {"{"}
        {showInfo ? (
          <div className="flex flex-col ml-4 mt-2 font-normal">
            <code>Year: 1998,</code>
            <code>Location: Philippines,</code>
            <code>Gender: Male</code>
          </div>
        ) : (
          "..."
        )}
        {"},"}
      </code>
      {/* <code className="mt-2">
        <h3>I believe that web development</h3>
        <h3>is one of the keys to progress</h3>
        <h3>and that being a developer</h3>
        <h3>cannot be rendered obsolete simply</h3>
        <h3>by Artificial Intelligence.</h3>
      </code> */}
    </div>
  );
};

export default About;
