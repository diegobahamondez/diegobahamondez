import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import { redirectToLinkedIn, redirectToGithub } from "../helpers/Redirects";

export default function Contact() {
  return (
    <>
      <section className="mt-36 scroll-mt-16 md:mb-18 lg:mb-36 lg:scroll-mt-24">
        <p className="mb-4 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Hola!
        </p>
        <div className="mb-4 pt-20">
          whether you need a website or just want to say hello, let's be in touch! just click one of these:
        </div>
        <div className="mb-4">
          <mail className="mb-4">
            mail
          </mail>
          <linkedin className="mb-4">
            linkedin
          </linkedin>
          <github className="mb-4">
            github
          </github>
        </div>
      </section>
    </>
  );
}
