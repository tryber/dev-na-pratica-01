import React, { useState } from "react";
import Link from "next/link";
import { User } from "@/types/User";
import Project from "@/types/Project";
import Star from "./Star";


// função que renderiza os projetos do estudante
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

// função que renderiza os projetos do estudante e cria o efeito de zoom na tela
export const CardItem: React.FC<{ project: Project }> = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseOver = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={`flex justify-center w-24 h-20 md:w-[200px] lg:w-[300px] xl:w-[400px] items-center  md:h-40 bg-[#14532d] rounded-lg overflow-hidden relative transition-transform duration-300 transform ${
        isVisible ? "scale-150" : ""
      }`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: isVisible ? 2 : 1 }}
    >
      <div
        data-testid="background-image-div"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      {isVisible && (
        <div
          className="absolute inset-0 bg-[#14532d] opacity-90 flex justify-center items-center"
          style={{ zIndex: 3 }}
        >
          <div className="bg-[#14532d] p-4 rounded-lg w-full h-full shadow-black shadow-lg text-white hidden md:flex md:flex-col">
            <div className="overflow-auto max-h-full text-center">
            <Link href={project.projectLink}>
              <h3 className="text-lg font-semibold mb-2">{project.project}</h3>
              </Link>
            </div>
            <Star />
          </div>
          <div className="bg-[#14532d] p-4 rounded-lg w-full h-full shadow-black shadow-lg text-white md:hidden flex md:flex-col">
            <div className="overflow-auto max-h-full text-center">
            <Link href={project.projectLink}>
              <h3 className="text-lg font-semibold mb-2">{project.project}</h3>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
