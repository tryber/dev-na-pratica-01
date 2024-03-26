import React from "react";
import Card from "../components/card";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";

const MainPage: React.FC = () => {
  return (
    <main>
      <Header />
      <Headline title="destaques do mês" />
      <Card />
      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
