import React from "react";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import StudentsRender from "@/utils/StudentsRender";

const History: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-[#184327] via-[#141517] to-[#184327] w-full h-full overflow-auto">
        <Headline title="histórico" />
        <StudentsRender symbol="!" />
        <div className="mt-32">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default History;
