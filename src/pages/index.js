import React from "react";
import { Header } from "../Components/Header";
import Navbar from "../Components/Navbar";
import Features from "../Components/Features";
import "../styles/global.scss";

const index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
    </div>
  );
};

export default index;
