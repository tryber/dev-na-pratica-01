import Header from "@/components/Header";
import History from "../history";
import React from "react";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <Headline title="histórico" />
      <History />
      <Footer />
    </div>
  );
};

export default page;
