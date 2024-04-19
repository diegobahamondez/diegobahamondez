import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Footer from "./Footer";
import { FaExternalLinkAlt } from "react-icons/fa";

const contactItems = [
  {
    icon: <MdEmail />,
    text: "diego.bahamondezm@gmail.com",
    link: "mailto:diego.bahamondezm@gmail.com",
    fontSize: "1.5rem",
  },
  {
    icon: <FaLinkedin />,
    text: "linkedin.com/in/diegobahamondezm",
    link: "https://www.linkedin.com/in/diegobahamondezm",
    fontSize: "1.5rem",
  },
  {
    icon: <FaGithub />,
    text: "github.com/diegobahamondez",
    link: "https://github.com/diegobahamondez",
    fontSize: "1.5rem",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="flex flex-col text-center mb-0">
      <h2 className="pb-8 lg:pb-16 text-3xl sm:text-5xl font-bold tracking-tight mt-4">
        <a href="/" className="">
          Contact
        </a>
      </h2>
      <div className="card p-8 bg-base-200 hover:bg-base-300 hover:shadow-2xl flex flex-col flex-grow justify-between">
        <h2 className="pb-12 text-3xl font-bold tracking-tight sm:text-4xl">
          Hola!
        </h2>
        <div className="text-lg pb-12">
        Whether you need a developer or just want to say hello, let&rsquo;s be in touch!
        </div>

        <div className="flex flex-col">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-center cursor-pointer"
            >
              <div className="flex flex-row content-center rounded p-1 transition-all duration-300 ease-in-out group-hover:text-base-100  group-hover:bg-base-content">
                {React.cloneElement(item.icon, {
                  style: { fontSize: item.fontSize, "margin-right": "4px" },
                })} {} {item.text} <FaExternalLinkAlt className="ml-1 mt-1"  size={18}/>
              </div>
              <div className="extlink my-auto ml-3 text-xs sm:text-base decoration-solid">
                
              </div>
              <div className="my-auto pl-2 group-hover:scale-150"></div>

            </a>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;
