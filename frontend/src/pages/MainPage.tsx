import React from "react";
import Card from "../components/card";
import Header from "@/components/Header";
import Headline from "@/components/Headline";

const MainPage: React.FC = () => {
  return (
    <main>
      <Header />
      <Headline title="destaques do mês" />
      <Card />
    </main>
  );
};

export default MainPage;
