import React from "react";

interface HeadlineProps {
  title: string;
}

const Headline: React.FC<HeadlineProps> = ({ title }) => {
  return (
    <div className="py-14">
      <div className="py-8 bg-[#0C6D18]">
        <h4 className="py-4 mx-80 text-white underline underline-offset-4">
          EXPLORANDO A CATEGORIA
        </h4>
        <h1 className="text-6xl font-bold my-8 mx-80 text-white uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Headline;
