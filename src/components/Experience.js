import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import "../styles/BorderGradient.css";

const TextIconColor = "text-white";

const experiences = [
  {
    title: "Tech Development Engineer",
    company: "COPEC SA",
    date: "2020-2023",
    description:
      "Developed the backend for 3 projects using Python and several AWS services (Lambda, DynamoDB, API Gateway and more).",
    icon: <WorkIcon className={TextIconColor} />,
  },
  {
    title: "Python Developer",
    company: "Steer Davies & Gleave",
    date: "2019-2020",
    description:
      "Developed an App to estimate product transportation costs using Python, PostgreSQL, and PyQT5.",
    icon: <WorkIcon className={TextIconColor} />,
  },
  {
    title: "Student Researcher",
    company: "CIMS JRI",
    date: "2018-2019",
    description:
      "Led the development of a groundbreaking viscosity calculation model for flowing fluids, leveraging ultrasonic echo signals.",
    icon: <WorkIcon className={TextIconColor} />,
  },
  {
    title: "Electrical Engineering",
    company: "Universidad de Santiago de Chile",
    date: "2013-2019",
    description:
      "Specialized in industrial control systems, learned several programming languages and won the electrical engineering fair in the innovation category.",
    icon: <SchoolIcon className={TextIconColor} />,
  },
];

function Experience() {
  return (
    <div id="experience" className="experience lg:pt-24">
      <h1 className="italic pb-10 sm:pb-20 text-3xl sm:text-5xl font-bold tracking-tight text-gray-200 mt-0">
        <a href="/">__Experience</a>
      </h1>

      <div className="grid grid-cols-1 gap-6 ">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-6 p-2 border-gradient-purple">
            {experience.date}
            <div className="flex items-center">
              {experience.icon}
              <h3 className={`ml-2 ${TextIconColor} font-bold text-lg`}>
                {experience.title}
              </h3>
            </div>
            <p className="text-gray-200 pb-2">
              <span className="font-bold">{experience.company}</span>
            </p>
            <p className="text-gray-400">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
