import React from "react";
import Hero from "../components/home/Hero";
import Main from "../components/home/Main";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
