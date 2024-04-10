import React from "react";
import Card from "./Card";
import Image from "next/image";
import { StudentProps } from "@/types/StudentsProps";
import ImageSvg from "./ImageSvg";
import Svg from "./Svg";
import AboutPhrase from "./AboutPhrase";

// codigo foto direita

const StudentReverse: React.FC<StudentProps> = ({ image, student_user }) => {
  return (
    <div className="flex justify-center items-center md:mb-48 mb-32 mt-12 md:mt-32 md:w-full mx-4">
      <div>
        <div className="flex flex-row lg:ml-36">
          <Svg linkedin={student_user.linkedin} />
          <AboutPhrase name={student_user.name} phrase={student_user.phrase} about={student_user.about} />
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
