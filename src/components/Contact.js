import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

const contactItems = [
  {
    icon: <MailIcon />,
    onClick: () => window.location.href = "mailto:diego.bahamondezm@gmail.com",
    fontSize: "2rem",
  },
  {
    icon: <LinkedInIcon />,
    onClick: () => window.location.href = "https://www.linkedin.com/in/diegobahamondezm",
    fontSize: "2rem",
  },
  {
    icon: <GithubIcon />,
    onClick: () => window.location.href = "https://github.com/diegobahamondez",
    fontSize: "2rem",
  },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="min-h-screen mb-0 mt-36 scroll-mt-16 lg:py-24 lg:scroll-mt-24"
      >
        <h1 className="italic pt-10 lg:pt-0 pb-20 text-3xl font-bold tracking-tight text-gray-200 sm:text-5xl mt-0">
          <a href="/">__Contact</a>
        </h1>
        <p className="pb-4 text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
          Hola!
        </p>
        <div className="mb-4 pt-20 text-lg">
          Whether you need a website or just want to say hello, let's be in
          touch! Just click one of these:
        </div>

        <div className="mb-4 pt-10 pb-0">
          {contactItems.map((item, index) => (
            React.cloneElement(item.icon, {
              key: index,
              onClick: item.onClick,
              className: "transition-colors duration-300 ease-in-out hover:text-white",
              style: { fontSize: item.fontSize, marginRight: "1rem" },
            })
          ))}
        </div>
        <div className="absolute bottom-0 pb-10 left-0 text-justify">
          <p className="flex">
            &copy; version 0.3.0, 2024, made with React JS and TailwindCSS.
            Hosted on AWS. Deployed with Github Actions.
          </p>
        </div>
      </section>
    </>
  );
}

