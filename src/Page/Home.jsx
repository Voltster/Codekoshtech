import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Project from "../components/home/Project";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/home/Contact";
import InfiniteScroll from "../components/home/InfiniteScroll";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <main
      className="main-container  heroBg  relative !-z-50  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]"
      id="main-container"
      data-scroll-container
    >
      <Navbar />
      <div className=" heroBg  relative z-10  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ">
        <Hero />
        <About />
        <Project />
        <Testimonials />
        <Contact />
        <InfiniteScroll />
      </div>
      <div className="w-screen h-[75vh] md:h-screen bg-transparent relative !-z-0 overflow-x-hidden"></div>
      <Footer />
    </main>
  );
};

export default Home;
