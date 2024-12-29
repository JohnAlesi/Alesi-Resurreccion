import React from "react";
import { projectList } from "./config"; // Import the project list

const Projects = () => {
  return (
    <div className="text-start flex flex-col">
      <code className="underline font-extrabold mt-8">Projects:</code>
      <div className="overflow-y-auto max-h-[75vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 mt-8">
        {projectList.map((project) => (
          <div key={project.id}>
            {/* Title */}
            <div>
              {project.src ? (
                <a
                  href={project.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl font-[20] hover:underline"
                >
                  {project.title}
                </a>
              ) : (
                <h1 className="text-4xl font-[20]">{project.title}</h1>
              )}
            </div>
            <div>
              <code className="text-[8px] md:text-base">
                {project.date} | {project.description}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
