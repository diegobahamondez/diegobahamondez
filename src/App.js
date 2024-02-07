import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import Contact from "./routes/Contact"
//import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">

      <Navbar />  

    </div>
  );
}

export default App;
