import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const links = [
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <nav className="p-4 flex justify-center">
      <ul className="">
        {links.map((link, index) => (
          <li key={index} className="flex my-4 justify-center">
            <ScrollLink
              to={link.to}
              smooth={true}
              spy={true}
              duration={500}
              className=""
            >
              <div className="flex items-center">
              {activeLink === link.to && (
                  <BiSolidRightArrow />
                )}
                <button className="btn btn-sm btn-info w-20">
                  {link.label}
                </button>
                {activeLink === link.to && (
                  <BiSolidLeftArrow />
                )}
              </div>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
