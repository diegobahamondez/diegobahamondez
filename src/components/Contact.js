import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const contactItems = [
  {
    icon: <MailIcon />,
    text: "diego.bahamondezm@gmail.com",
    link: "mailto:diego.bahamondezm@gmail.com",
    fontSize: "2rem",
  },
  {
    icon: <LinkedInIcon />,
    text: "linkedin.com/in/diegobahamondezm",
    link: "https://www.linkedin.com/in/diegobahamondezm",
    fontSize: "2rem",
  },
  {
    icon: <GithubIcon />,
    text: "github.com/diegobahamondez",
    link: "https://github.com/diegobahamondez",
    fontSize: "2rem",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="mb-0">
      <h2 className="italic pb-12 lg:pb-20 text-3xl sm:text-5xl font-bold tracking-tight text-gray-200 mt-0">
        <a href="/" className="">
          __Contact
        </a>
      </h2>
      <div className="flex flex-col justify-between">
        <h2 className="pb-12 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          Hola!
        </h2>
        <div className="text-lg pb-12">
          Whether you need a developer or just want to say hello, let's be in
          touch!
        </div>

        <div className="flex flex-col">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center cursor-pointer"
            >
              <div className="transition-all duration-300 ease-in-out hover:text-green-950 hover:bg-white hover:rounded p-1">
                {React.cloneElement(item.icon, {
                  style: { fontSize: item.fontSize },
                })}
              </div>
              <span className="pl-3 text-xs sm:text-base hover:underline decoration-solid">
                {item.text}
              </span>
              <span className="pl-2 hover:scale-150">&#8599;</span>

            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
