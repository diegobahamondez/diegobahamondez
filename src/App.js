import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
//import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px at ${cursorPosition.x}px ${
      cursorPosition.y + scrollPosition
    }px, rgba(100, 0, 115, 0.15), transparent 80%)`,
  };
  return (
    <div className="bg-gray-950 text-gray-200">
      <section style={gradientStyle}>
        <div className="pb-0 min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:pt-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className=" lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <Header />
            </header>
            <main id="about" className="right-0 pb-0px pt-24 lg:w-1/2 lg:pt-24">
              <About />
              <Experience />
              <div className="">
                <div className="relative">
                  <Contact />
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
