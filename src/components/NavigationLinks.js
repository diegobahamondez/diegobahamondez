import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./NavigationLinks.css";

const NavigationLinks = () => {
  const links = [
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="p-4">
      <ul className="flex flex-col items-start space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <ScrollLink
              to={link.to}
              smooth={true}
              duration={500}
              className="glass-button"
              activeClassName="pressed"
            >
              {link.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationLinks;


