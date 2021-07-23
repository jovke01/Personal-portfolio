import React from "react";
import "../styles/global.scss";
import { Helmet } from "react-helmet";
import favicon from '../images/favicon.ico'
import { Header } from "../Components/Header";
import Navbar from "../Components/Navbar";
import Features from "../Components/Features";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";

const index = () => {
  <Helmet defer={false}>
    <title>Pavle Jovanovic | početna</title>
    <meta name="description" content="Sve sto je potrebno za izradu vašeg sajta, web dizajn" />
    <link rel="icon" href={favicon} />
  </Helmet>
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
