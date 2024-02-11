//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import GithubIcon from "@material-ui/icons/GitHub";
//import { redirectToLinkedIn, redirectToGithub } from "../helpers/Redirects";

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
  ];

  return (
    <>
      <section className="mb-24 scroll-mt-16 md:mb-24 lg:scroll-mt-24">
        <h1 className="italic pb-10 lg:pb-20 text-3xl sm:text-5xl font-bold tracking-tight text-gray-200 mt-0">
          <a href="/">__About</a>
        </h1>
        <p className="mb-4">
          Electrical Engineer by profession, I first encountered Python in 2019
          while working on my university thesis. Since then, I have been using
          it for backend development. Currently, I am learning React to expand
          my skill set and create Full-Stack digital solutions.
        </p>
        <p className="mb-4">
          I identify as a customer-centric developer, engaging with clients to
          thoroughly comprehend their business requirements. Here are some of
          the tools I use:
        </p>
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
