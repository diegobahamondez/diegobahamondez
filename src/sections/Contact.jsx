import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const contactItems = [
  {
    icon: <MdEmail />,
    text: "diego.bahamondezm@gmail.com",
    link: "mailto:diego.bahamondezm@gmail.com",
    fontSize: "2rem",
  },
  {
    icon: <FaLinkedin />,
    text: "linkedin.com/in/diegobahamondezm",
    link: "https://www.linkedin.com/in/diegobahamondezm",
    fontSize: "2rem",
  },
  {
    icon: <FaGithub />,
    text: "github.com/diegobahamondez",
    link: "https://github.com/diegobahamondez",
    fontSize: "2rem",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="text-center mb-0">
      <h2 className="pb-12 lg:pb-20 text-3xl sm:text-5xl font-bold tracking-tight mt-0">
        <a href="/" className="">
          Contact
        </a>
      </h2>
      <div className="flex flex-col justify-between">
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
              <div className="rounded p-1 transition-all duration-300 ease-in-out group-hover:text-base-100  group-hover:bg-base-content">
                {React.cloneElement(item.icon, {
                  style: { fontSize: item.fontSize },
                })}
              </div>
              <div className="my-auto pl-3 text-xs sm:text-base group-hover:underline decoration-solid">
                {item.text}
              </div>
              <div className="my-auto pl-2 group-hover:scale-150">&#8599;</div>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
