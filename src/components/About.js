//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import GithubIcon from "@material-ui/icons/GitHub";
//import { redirectToLinkedIn, redirectToGithub } from "../helpers/Redirects";

export default function About() {
  const stackTechnologies = [
    "Python",
    "AWS Lambda",
    "React",
    "DynamoDB",
    "TailwindCSS",
    "Flask",
    "Docker",
    "Github Actions",
    "Serverless Framework",
  ];

  return (
    <>
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <h1 className="italic pb-10 lg:pb-20 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mt-0">
          <a href="/">__About</a>
        </h1>
        <p className="mb-4">
          Electrical Engineer by profession, I first encountered Python in 
          2019 while working on my university thesis. Since then, I have been
          using it for backend development. Currently, I am learning React to
          expand my skill set and create Full-Stack digital solutions.
        </p>
        <p className="mb-4">
          I identify as a customer-centric developer, engaging with clients to
          thoroughly comprehend their business requirements. Here are some of the
          tools I use:
        </p>
        <p className="mb-0">
        </p>
        <div className="mb-4 pt-3 text-lg">
          {stackTechnologies.map((tech, index) => (
            <div
              key={index}
              className="bg-blue-500 bg-opacity-10 py-1 px-2 rounded-full text-white text-opacity-80 mr-2 my-2 inline-block"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

