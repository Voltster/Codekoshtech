import "./Reset.css";
import "./App.css";

import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import InfiniteScroll from "./components/home/InfiniteScroll";
import Testimonials from "./components/home/Testimonials";
import Project from "./components/home/Project";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className=" relative  h-[100%]   shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]">
      <div className="heroBg">
        <Hero />
        <Services />
        <About />
        <Project />
        <Testimonials />
        <Contact />
        <InfiniteScroll />
      </div>
      <div className="w-screen h-[80vh] md:h-screen bg-transparent relative z-[-10] overflow-x-hidden"></div>
      <Footer />
    </div>
  );
}

export default App;
