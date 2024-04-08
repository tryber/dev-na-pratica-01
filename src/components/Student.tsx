import React from "react";
import Card from "./Card";
import Image from "next/image";
import { StudentProps } from "@/types/StudentsProps";

const Student: React.FC<StudentProps> = ({ image, student_user }) => {
  return (
    <div className="flex justify-center items-center mb-48 mt-32 w-full">
      <div className="text-white w-3/5 flex-col flex justify-start mr-8">
        <h1 className="text-5xl "> {student_user.name}</h1>
        <h3 className="text-3xl mt-2">{student_user.phrase}</h3>
        <h4 className="flex mt-4 justify-center items-center ">
          <i>{student_user.about}</i>
        </h4>
        <div className="mt-4">
          <Card user={student_user} />
        </div>
      </div>
      <div className="flex relative justify-end ml-16 rounded-[40px] hover:bg-black/80 group hover:scale-105 ease-in duration-500">
        <Image
          src={image}
          alt="foto"
          className="rounded-[40px] w-72 group-hover:opacity-10"
          width={80}
          height={80}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center py-3">
            <a href={student_user.linkedin} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Student;
