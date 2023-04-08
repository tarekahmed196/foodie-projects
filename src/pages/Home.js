import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import JumpButton from "../components/JumpButton";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider/>
      <JumpButton/>
      <Products/>
      <Footer/>
    </>
  );
};

export default Home;
