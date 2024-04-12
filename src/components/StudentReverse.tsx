import React from "react";
import Card from "./Card";
import { StudentProps } from "@/types/StudentsProps";
import ImageSvg from "./ImageSvg";
import AboutPhrase from "./AboutPhrase";

// codigo reverse
const StudentReverse: React.FC<StudentProps> = ({ image, student_user }) => {
  return (
    <div className="flex justify-center items-center mb-48 md:mt-32 md:w-full w-[85%] m-auto">
      <div>
        <div className="flex flex-col md:flex-row lg:mr-64">
          <ImageSvg image={image} linkedin={student_user.linkedin}  />
          <AboutPhrase name={student_user.name} phrase={student_user.phrase} about={student_user.about} date={student_user.date} />
        </div>
        <div className="mt-4 m-auto">
          <Card user={student_user} />
        </div>
      </div>
    </div>
  );
};

export default StudentReverse;
