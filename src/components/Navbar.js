import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "../styles/Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  closeMenu = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">DB</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.url}
                  onClick={this.closeMenu}
                >
                  <i className={item.icon} aria-hidden="true"></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

