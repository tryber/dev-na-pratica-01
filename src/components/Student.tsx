import React from "react";
import Card from "./Card";
import Image from "next/image";
import { StudentProps } from "@/types/StudentsProps";
import ImageSvg from "./ImageSvg";
import Svg from "./Svg";

// codigo foto direita

const StudentReverse: React.FC<StudentProps> = ({ image, student_user }) => {
  return (
    <div className="flex justify-center items-center md:mb-48 mb-32 mt-12 md:mt-32 md:w-full mx-4">
      <div>
        <div className="flex flex-row lg:ml-36">
          <Svg linkedin={student_user.linkedin} />
          <div className="text-white w-3/5 flex-col flex justify-start md:mr-8">
            <h1 className="text-5xl "> {student_user.name}</h1>
            <h3 className="text-base md:text-2xl lg:text-3xl mt-2">
              {student_user.phrase}
            </h3>
            <h4 className="flex mt-4 justify-center items-center text-xs md:text-base ">
              <i>{student_user.about}</i>
            </h4>
          </div>
          <ImageSvg image={image} />
        </div>
        <div className="mt-4">
          <Card user={student_user} />
        </div>
      </div>
    </div>
  );
};

export default StudentReverse;
