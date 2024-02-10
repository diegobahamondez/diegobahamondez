//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import GithubIcon from "@material-ui/icons/GitHub";
//import { redirectToLinkedIn, redirectToGithub } from "../helpers/Redirects";

export default function About() {
  return (
    <>
      <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <h1 className="italic pb-20 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mt-0">
          <a href="/">__About</a> 
        </h1>
        <p className="mb-4">
          Electrical Engineer, with 3+ years of experience in backend
          development with Python and AWS
        </p>
        <p className="mb-4">
          I work passionately with agile software development on multicultural
          teams, speaking directly with customers to fully understand the
          business needs, and then write software that solves them and is easy
          to maintain, scale and test.
        </p>
        <p className="mb-4">
          Solid background on different programming languages, such as Python,
          SQL, YAML (for infrastructure as code), Arduino and now delving into
          frontend development with React.
        </p>
        <div className="mb-4 pt-20 text-lg">
          -------------stack-----------
        </div>
      </section>
    </>
  );
}
