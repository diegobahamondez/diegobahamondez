import React from "react";
import { Link as ScrollLink } from "react-scroll";

const NavigationLinks = () => {
  return (
    <nav className="p-4">
      <ul className="flex flex-col items-start space-y-4">
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="paragraph hover"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="paragraph hover"
          >
            Experience
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="paragraph hover"
          >
            Projects
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
