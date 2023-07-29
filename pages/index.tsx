import dynamic from "next/dynamic";
import BoosterCard from "components/home/cards/BoosterCard";
import { NextPage } from "next";
import React from "react";

const BoosterChart = dynamic (import ("components/home/charts/BoosterChart"), {ssr: false});

const HomePage: NextPage = () => {
  return (
    <div className="container">
      <p className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 font-bold text-xl mb-2">Bem Vindo!</p>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <BoosterCard></BoosterCard>
        <BoosterCard></BoosterCard>
      </div>
      <BoosterChart></BoosterChart>
    </div>
  );
};

export default HomePage;
