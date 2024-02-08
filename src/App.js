import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Home from "./routes/Home";
import Experience from "./routes/Experience";
import Projects from "./routes/Projects";

import Footer from "./components/Footer";
import { React, useEffect, useRef } from "react";

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!appRef.current) return;
      const { clientX, clientY } = ev;
      appRef.current.style.setProperty("--x", `${clientX}px`);
      appRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div ref={appRef} className="App">
      <style jsx>{`
        .App {
          background-image: radial-gradient(
            circle farthest-side at var(--x, 100px) var(--y, 100px),
            #1250aa 0%,
            transparent 100%
          );
        }
      `}</style>
      <ol>
        <li>
          <Link smooth to="/#aboutSection">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="/#experienceSection">
            Experience
          </Link>
        </li>
        <li>
          <Link smooth to="/#projectSection">
            Projects
          </Link>
        </li>
      </ol>
      <section id="aboutSection">
        <Home></Home>
      </section>
      <section id="experienceSection">
        <Experience></Experience>
      </section>
      <section id="projectSection">
        <Projects></Projects>
      </section>
      <Footer />
    </div>
  );
}



