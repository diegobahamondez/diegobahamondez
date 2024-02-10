import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
//import Projects from "./components/Projects";
import Contact from "./components/Contact";
//import Footer from "./components/Footer";

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
    }px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };
  return (
    <div className="bg-gradbg leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <section style={gradientStyle}>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className=" lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <Header />
            </header>
            <main  id="about" className="pt-24 lg:w-1/2 lg:py-24">
              <About />
              <Experience />
              <Contact />
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
