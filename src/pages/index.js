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
  return (
    <div>
      <Helmet defer={false}>
        <title>Web dizajn - izrada web sajtova | Pavle Jovanovic</title>
        <meta name="description" content="Sve sto je potrebno za izradu vašeg sajta, web dizajn Beograd" />
        <link rel="icon" href={favicon} />
      </Helmet>
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
