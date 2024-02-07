/*import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
 */

import { Component } from "react";
import "../styles/Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";



class Navbar extends Component{
  state = { clicked: false };
  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked })
  }

  render(){
    return(
      <nav className="NavbarItems">
          <h1 className="navbar-logo">DB</h1>

          <div className="menu-icons" onClick = {this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times"
            : "fas fa-bars"}></i>
          </div>

          <ul className={this.state.clicked ? 
          "nav-menu active": "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (            
              <li key = {index}>
                <a className={item.cName} href = "/">
                  <i className={item.icon} aria-hidden="true">
                  </i>{item.title}
                </a>
              </li>)
            })}
          </ul>
      </nav>

    )
  }

}

export default Navbar



