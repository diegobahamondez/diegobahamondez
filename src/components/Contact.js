import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import {
  redirectToLinkedIn,
  redirectToGithub,
  redirectToMail,
} from "../helpers/Redirects";

export default function Contact() {
  return (
    <>
      <section id="contact" className="mt-36 scroll-mt-16 md:mb-18 lg:mb-36 lg:scroll-mt-24">
        <p className="mb-4 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Hola!
        </p>
        <div className="mb-4 pt-20 text-lg">
          Whether you need a website or just want to say hello, let's be in
          touch! Just click one of these:
        </div>
        <div className="mb-4 pt-20 pb-10">
          <MailIcon
            onClick={redirectToMail}
            className="transition-colors duration-300 ease-in-out hover:text-white"
            style={{ fontSize: "2rem", marginRight: "1rem" }}
          />
          <LinkedInIcon
            onClick={redirectToLinkedIn}
            className="transition-colors duration-300 ease-in-out hover:text-white"
            style={{ fontSize: "2rem", marginRight: "1rem" }}
          />
          <GithubIcon
            onClick={redirectToGithub}
            className="transition-colors duration-300 ease-in-out hover:text-white"
            style={{ fontSize: "2rem" }}
          />
        </div>
      </section>
    </>
  );
}
