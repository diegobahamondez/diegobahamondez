//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import GithubIcon from "@material-ui/icons/GitHub";
//import { redirectToLinkedIn, redirectToGithub } from "../helpers/Redirects";
import "../styles/TitleLCD.css";

export default function About() {
  const stackTechnologies = [
    "Python",
    "AWS Lambda",
    "DynamoDB",
    "Serverless Framework",
    "React",
    "TailwindCSS",
    "Flask",
    "Docker",
    "Github Actions",
    "PostgreSQL",
    "GraphQL",
  ];

  return (
    <>
      <section className="mb-24 scroll-mt-16 md:mb-24 lg:scroll-mt-24 ">
        <h1 className="italic pb-10 lg:pb-20 text-3xl sm:text-5xl font-bold tracking-tight text-gray-200">
          <a href="/">__About</a>
        </h1>
        <section className="p-4 bg-slate-800/30 backdrop-blur-sm shadow-sm shadow-slate-400 rounded-lg">
        <p className="mb-4 ">
          Back in 2019, I first encountered Python while working on my
          university thesis for ultrasound signal analysis. Since then, I have
          been using it for backend development in four projects at some of the
          biggest companies in Chile. Currently, I am expanding my skill set
          with React to create full-stack digital solutions.
        </p>
        <p className="mb-4">
          I identify as a customer-centric developer, engaging with clients to
          thoroughly comprehend their business requirements. Here are some of
          the tools I use to address them:
        </p>
        </section>
        <p className="mb-0"></p>
        <div className="mb-4 pt-3 text-lg">
          {stackTechnologies.map((tech, index) => (
            <div
              key={index}
              className=" bg-gray-100 opacity:50 shadow-lg shadow-gray-100/50 py-1 px-2 rounded-full text-linux text-opacity-100 mr-2 my-2 inline-block "
            >
              {tech}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
