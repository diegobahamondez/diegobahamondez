import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
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
    }px, #183057, transparent 80%)`,
  };
  return (
    <div id="background" className="bg-gradbg text-gray-200">
      <section id="gradient" style={gradientStyle}>
        <div
          id="content"
          className="lg:flex pb-0 min-h-screen max-w-screen px-6 py-12 md:px-12 md:pt-20 lg:px-24 lg:py-0"
        >
          <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:max-h-screen lg:w-1/2  lg:justify-between lg:py-24">
            <Header />
          </header>
          <main
            id="about"
            className="relative flex flex-col right-0 px-4 lg:px-0 pb-0px pt-12 lg:pt-24 lg:w-1/2 text-justify"
          >
            <About />
            <Experience />
            <div className="min-h-screen pt-24">
              <Contact />
              <Footer />
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default App;
