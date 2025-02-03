import About from "../components/About";
import { AuroraBackgroundDemo } from "../components/AuroraBackgroundDemo";
import AutoSlidingCarousel from "../components/AutoSlidingCarousel";
import type React from "react";

const Home: React.FC = () => {
  return (
    <>
      <AuroraBackgroundDemo />
      <About />
      <AutoSlidingCarousel  />
    </>
  );
};

export default Home;
