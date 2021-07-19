import React from "react";
import "../styles/global.scss";
import { Header } from "../Components/Header";
import Navbar from "../Components/Navbar";
import Features from "../Components/Features";
import Projects from "../Components/Projects";
// import Testimonials from "../Components/Testimonials";

const index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Projects />
      {/* <Testimonials /> */}
    </div>
  );
};

export default index;
