import Header from "./sections/Header/Header";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";


const App = () => {
  return (
    <div id="background" className="text-base-300 text-justify min-h-dvh">
        <div
          id="content"
          className="lg:flex text-base-content pb-0 min-h-screen max-w-screen px-2 py-12 md:px-12 md:pt-20 lg:px-24 lg:py-0"
        >
          <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:max-h-screen lg:w-1/2  lg:justify-between lg:py-24">
            <Header/>
          </header>
          <main
            id="about"
            className="relative flex flex-col right-0 px-4 lg:px-0 pb-0px pt-12 lg:pt-24 lg:w-1/2"
          >
            <About/>
            <Experience/>
            <Contact/>
          </main>
        </div>
    </div>
  );
};

export default App;
