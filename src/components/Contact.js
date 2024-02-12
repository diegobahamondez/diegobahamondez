import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const contactItems = [
  {
    icon: <MailIcon />,
    text: "diego.bahamondezm@gmail.com",
    onClick: () =>
      (window.location.href = "mailto:diego.bahamondezm@gmail.com"),
    fontSize: "2rem",
  },
  {
    icon: <LinkedInIcon />,
    text: "linkedin.com/in/diegobahamondezm",
    onClick: () =>
      (window.location.href = "https://www.linkedin.com/in/diegobahamondezm"),
    fontSize: "2rem",
  },
  {
    icon: <GithubIcon />,
    text: "github.com/diegobahamondez",
    onClick: () =>
      (window.location.href = "https://github.com/diegobahamondez"),
    fontSize: "2rem",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mb-0">
      <h1 className="italic pb-12 lg:pb-20 text-3xl sm:text-5xl font-bold tracking-tight text-gray-200 mt-0">
        <a href="/" className="">
          __Contact
        </a>
      </h1>
      <div className="flex flex-col justify-between">
        <p className="pb-12 text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          Hola!
        </p>
        <div className="text-lg pb-12">
          Whether you need a developer or just want to say hello, let's be in
          touch!
        </div>

        <div className="flex flex-col">
          {contactItems.map((item, index) => (
            <div
              key={index}
              onClick={item.onClick}
              className="flex items-center cursor-pointer"
            >
              <div className="transition-all duration-300 ease-in-out hover:text-green-950 hover:bg-white hover:rounded p-1">
                {React.cloneElement(item.icon, {
                  style: { fontSize: item.fontSize},
                })}
              </div>
              <span className="pl-3">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

