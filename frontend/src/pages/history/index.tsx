import Header from "@/components/Header";
import History from "../history";
import React from "react";
import Headline from "@/components/Headline";

const page = () => {
  return (
    <div>
      <Header />
      <Headline title="histórico" />
      <History />
    </div>
  );
};

export default page;
