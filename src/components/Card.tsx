import React, { useState } from "react";
import Link from "next/link";
import { User } from "@/types/User";
import Project from "@/types/Project";
import App from "./Star";

const Card: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="container mx-auto lg:mt-8">
      <div className="grid grid-cols-3 gap-x-8 md:gap-x-16 lg:gap-x-2">
        {user.projects.map((project, index) => (
          <CardItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

const CardItem: React.FC<{ project: Project }> = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`flex justify-center w-24 h-20 md:w-[200px] lg:w-[300px] xl:w-[400px] items-center md:h-40 bg-[#14532d] rounded-lg overflow-hidden relative transition-transform duration-300 transform ${
        isVisible ? "scale-150" : ""
      }`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: isVisible ? 2 : 1 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      {isVisible && (
        <div
          className="absolute inset-0 bg-[#14532d] opacity-90 flex justify-center items-center"
          style={{ zIndex: 3 }}
        >
          <div className="bg-[#14532d] p-4 rounded-lg w-full h-full shadow-black shadow-lg text-white">
            <App />
            <div className="overflow-auto max-h-full">
              <h3 className="text-lg font-semibold mb-2">Projetos:</h3>

              <div className="mb-4">
                <p>{project.project}</p>
                <Link href={project.projectLink}>
                  <p className="text-blue-500 hover:underline">Ver mais</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
