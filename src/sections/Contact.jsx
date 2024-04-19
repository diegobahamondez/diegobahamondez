import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from "./Footer";
import { FaExternalLinkAlt } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaLinkedin />,
    text: "linkedin.com/in/diegobahamondezm",
    link: "https://www.linkedin.com/in/diegobahamondezm",
    fontSize: "1.2rem",
  },
  {
    icon: <MdEmail />,
    text: "diego.bahamondezm@gmail.com",
    link: "mailto:diego.bahamondezm@gmail.com",
    fontSize: "1.2rem",
  },
  {
    icon: <FaGithub />,
    text: "github.com/diegobahamondez",
    link: "https://github.com/diegobahamondez",
    fontSize: "1.2rem",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen pt-16 md:pt-28"
    >
      <h1 className="text-center text-3xl sm:text-5xl font-bold tracking-tight">
        <a href="/" className="">
          Contact
        </a>
      </h1>

      <div className="card items-center p-4 bg-base-200 hover:bg-base-300 hover:shadow-2xl">
        <h2 className="pb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Hola!
        </h2>
        <div className="text-lg pb-12  text-center">
          Whether you need a developer or just want to say hello, let&rsquo;s be
          in touch!
        </div>

        <div className="flex flex-col items-center">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer"
            >
              <div className="extlink text-sm flex flex-row content-center rounded p-1 mb-2 ">
                {React.cloneElement(item.icon, {
                  style: { fontSize: item.fontSize, "margin-right": "4px" },
                })}{" "}
                {} {item.text}{" "}
                <FaExternalLinkAlt className="ml-1 mt-1" size={15} />
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;
