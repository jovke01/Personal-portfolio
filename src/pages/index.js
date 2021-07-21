import React from "react";
import "../styles/global.scss";
import { Header } from "../Components/Header";
import Navbar from "../Components/Navbar";
import Features from "../Components/Features";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";
// import Testimonials from "../Components/Testimonials";


// add SEO data 



const index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Projects />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default index;
