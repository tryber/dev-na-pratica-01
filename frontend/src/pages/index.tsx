import React from "react";
import Link from "next/link";
import data from "../../data.json";
import Image from "next/image";
import User from "@/types/User";
import Project from "@/types/Project";
import Achievement from "@/types/Achievement";
import Card from "../components/card";
import Header from "@/components/Header";

const Home: React.FC = () => {
  return (
    <main>
      <Header />
      <Card />
    </main>
  );
};

export default Home;
