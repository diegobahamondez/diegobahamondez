import React from "react";
import { Link as ScrollLink } from "react-scroll";

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
              spy={true}
              duration={500}
              className="bg-green-300 bg-opacity-30 hover:bg-green-600 hover:bg-opacity-30 text-white font-bold py-1 my-0 px-2 rounded "
              activeClassName="bg-blue-100"
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
