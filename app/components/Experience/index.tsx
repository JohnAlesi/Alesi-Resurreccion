import React from "react";

const Experience = () => {
  return (
    <div className="mt-12">
      <code className="underline font-extrabold">Work:</code>
      <div className="text-start flex flex-col text-xs md:text-base">
        <code className="font-semibold">-The Geeky Ninja</code>
        <code className="italic ml-3">2022-2024</code>
        <code className="font-semibold">-Bricksoft</code>
        <code className="italic ml-3">2022-2022</code>
        <code className="font-semibold">-Autopilot.io</code>
        <code className="italic ml-3">2021-2022</code>
        <code className="font-semibold">-Zuitt Coding Bootcamp</code>
        <code className="italic ml-3">2021</code>
      </div>
      <code className="font-extrabold underline">Education:</code>
      <div className="text-start flex flex-col text-xs md:text-base">
        <code className="font-semibold">
          -Technological Institute of the Philippines
        </code>
        <code className="font-semibold">-Zuitt Coding Bootcamp</code>
      </div>
    </div>
  );
};

export default Experience;
