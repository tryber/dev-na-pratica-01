import React from "react";
import Card from "../components/Card";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Footer from "@/components/Footer";
import data from "../../data.json";

const MainPage: React.FC = () => {
  return (
    <main>
      <Header />
      <Headline title="destaques do mês" />
      <Card users={data}/>
      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
};

export default MainPage;
