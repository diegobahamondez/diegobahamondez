import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Button.css";

const NavigationLinks = () => {
  const links = [
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="p-4">
      <ul className="flex-col items-start space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <ScrollLink
              to={link.to}
              smooth={true}
              spy={true}
              duration={500}
              className=""
              activeclassname="active"
            >
              <button class="nav-button">{link.label}</button>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;
/*
<!-- HTML !-->
<button class="button-82-pushable" role="button">
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
    Button 82
  </span>
</button>


*/
