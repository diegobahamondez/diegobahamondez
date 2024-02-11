import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../styles/Button.css";

const NavigationLinks = () => {
  const links = [
    { to: "about", label: "__About" },
    { to: "experience", label: "__Experience" },
    { to: "contact", label: "__Contact" },
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
