import React from "react";
import HeroSection from "../src/components/HeroSection";
import TechStack from "../src/components/TechStack";
import About from "../src/components/About";

const page = () => {
  return (
    <>
      {" "}
      <HeroSection />
      <TechStack />
      <About />
    </>
  );
};

export default page;
