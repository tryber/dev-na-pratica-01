import React from "react";
import Card from "./Card";
import Image from "next/image";
import { StudentProps } from "@/types/StudentsProps";
import ImageSvg from "./ImageSvg";
import Svg from "./Svg";
import AboutPhrase from "./AboutPhrase";

// codigo reverse
const StudentReverse: React.FC<StudentProps> = ({ image, student_user }) => {
  return (
    <div className="flex justify-center items-center mb-48 md:mt-32  w-full">
      <div>
        <div className="flex flex-row lg:ml-48">
          <ImageSvg image={image} />
          <Svg linkedin={student_user.linkedin} />
          <AboutPhrase name={student_user.name} phrase={student_user.phrase} about={student_user.about} />
        </div>
        <div className="mt-4 mx-8">
          <Card user={student_user} />
        </div>
      </div>
    </div>
  );
};

export default StudentReverse;
