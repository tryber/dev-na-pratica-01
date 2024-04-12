import React from "react";
import Card from "./Card";
import { StudentProps } from "@/types/StudentsProps";
import ImageSvg from "./ImageSvg";
import AboutPhrase from "./AboutPhrase";

// codigo foto direita
// codigo novo

const Student: React.FC<StudentProps> = ({ image, student_user }) => {

  return (
    <div className="justify-center items-center md:mb-48 mb-32 mt-12 md:mt-32 md:w-full m-auto md:w-full w-[85%]">
      <div>
        <div className="flex-col md:flex-row lg:ml-12 hidden md:flex">
          <AboutPhrase name={student_user.name} phrase={student_user.phrase} about={student_user.about} date={student_user.date}/>
          <ImageSvg image={image} linkedin={student_user.linkedin} />
        </div>
        <div className="flex-col md:hidden flex">
          <ImageSvg image={image} linkedin={student_user.linkedin} />
          <AboutPhrase name={student_user.name} phrase={student_user.phrase} about={student_user.about} date={student_user.date}/>
        </div>
        <div className="mt-4">
          <Card user={student_user} />
        </div>
      </div>
    </div>
  );
};

export default Student;
