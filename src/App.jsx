import "./Reset.css";
import "./App.css";
import "./hooks/locomotive.css";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./Page/Home";
import Loader from "./components/common/Loader";
import { useEffect, useRef, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  const scrollRef = useRef(null);

  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });
  //   locomotiveScroll.init()
  //   return () => locomotiveScroll.destroy();
  // }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          id="main"
          ref={scrollRef}
          data-scroll-section
          className="scroll-container relative min-w-[100vw] min-h-screen z-0 heroBg "
        >
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
