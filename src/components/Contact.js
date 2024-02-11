import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const contactItems = [
  {
    icon: <MailIcon />,
    onClick: () =>
      (window.location.href = "mailto:diego.bahamondezm@gmail.com"),
    fontSize: "2rem",
  },
  {
    icon: <LinkedInIcon />,
    onClick: () =>
      (window.location.href = "https://www.linkedin.com/in/diegobahamondezm"),
    fontSize: "2rem",
  },
  {
    icon: <GithubIcon />,
    onClick: () =>
      (window.location.href = "https://github.com/diegobahamondez"),
    fontSize: "2rem",
  },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="mb-0">
        <h1 className="italic pb-12 lg:pb-20 text-3xl sm:text-5xl font-bold tracking-tight text-gray-200 mt-0">
          <a href="/" className="">
            __Contact
          </a>
        </h1>
        <div className="flex flex-col justify-between">
          <p className="pb-12  text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl">
            Hola!
          </p>
          <div className="text-lg pb-12">
            Whether you need a website or just want to say hello, let's be in
            touch! Just click one of these:
          </div>

          <div className="">
            {contactItems.map((item, index) =>
              React.cloneElement(item.icon, {
                key: index,
                onClick: item.onClick,
                className:
                  "transition-all duration-300 ease-in-out hover:text-green-950 hover:bg-white hover:rounded p-1",
                style: { fontSize: item.fontSize, marginRight: "1rem" },
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}
