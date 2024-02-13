import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import "../styles/BorderGradient.css";
import "../styles/ExperienceItem.css";

const TextIconColor = "text-white";

const experiences = [
  {
    title: "Tech Development Engineer",
    company: "COPEC SA",
    date: "2020-2023",
    description:
      "Backend developer for three serverless projects with a focus on IoT, Energy Efficiency, and Civil Engineering Project Management. Used technologies include Python, GraphQL, AWS Lambda, DynamoDB, and API Gateway.",
    icon: <WorkIcon className={TextIconColor} />,
  },
  {
    title: "Python Developer",
    company: "Steer Davies & Gleave",
    date: "2019-2020",
    description:
      "Developed an app for the Ministry of Transportation of Chile to estimate product transportation costs using Python, PostgreSQL, and PyQt5.",
    icon: <WorkIcon className={TextIconColor} />,
  },
  {
    title: "Student Researcher",
    company: "CIMS JRI",
    date: "2018-2019",
    description:
      "Implemented a laboratory for viscosity measurement with ultrasonic signal generators and oscilloscopes, and utilized Python's scientific libraries for signal analysis and viscosity calculations.",
    icon: <WorkIcon className={TextIconColor} />,
  },
  {
    title: "Electrical Engineering",
    company: "Universidad de Santiago de Chile",
    date: "2019",
    description:
      "Specialized in industrial control systems, learned several programming languages and won the 2016's electrical engineering fair in the innovation category.",
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
          <borderic className = "outer-border">
          <div key={index} className="pb-4 p-2 experience-item">
            {experience.date}
            <div className="flex items-center">
              <h3 className={`${TextIconColor} font-bold text-lg`}>
                {experience.title}
              </h3>
            </div>
            <p className="text-gray-200 pb-2">
              <span className="font-bold">{experience.company}</span>
            </p>
            <p className="text-gray-400">{experience.description}</p>
          </div>
          </borderic>
        ))}
      </div>
    </div>
  );
}

export default Experience;
