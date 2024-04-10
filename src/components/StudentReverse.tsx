import React from "react";
import Card from "./Card";
import Image from "next/image";
import { StudentProps } from "@/types/StudentsProps";
import ImageSvg from "./ImageSvg";
import Svg from "./Svg";

const StudentReverse: React.FC<StudentProps> = ({ image, student_user }) => {
  return (
    <div className="flex justify-center items-center mb-48 md:mt-32  w-full">
      <div>
        <div className="flex flex-row lg:ml-48">
          <ImageSvg image={image} />
          <Svg linkedin={student_user.linkedin} />
          <div className="text-white w-3/5 flex-col flex justify-start mr-8">
            <h1 className="text-5xl "> {student_user.name}</h1>
            <h3 className="text-base md:text-2xl lg:text-3xl mt-2">
              {student_user.phrase}
            </h3>
            <h4 className="flex mt-4 justify-center items-center text-xs md:text-base ">
              <i>{student_user.about}</i>
            </h4>
          </div>
        </div>
        <div className="mt-4 mx-8">
          <Card user={student_user} />
        </div>
      </div>
    </div>
  );
};

export default StudentReverse;
