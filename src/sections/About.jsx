import { FaExternalLinkAlt } from "react-icons/fa";

export default function About() {
  const stackTechnologies = [
    "Python",
    "AWS Lambda",
    "DynamoDB",
    "Django",
    "React",
    "TailwindCSS",
    "Docker",
    "Github Actions",
    "PostgreSQL",
    "GraphQL",
  ];

  return (
    <>
      <section
        id="about"
        className="mb-24 scroll-mt-16 md:mb-24 lg:scroll-mt-24 "
      >
        <h1 className="text-center lg:pt-4 pb-6 lg:pb-16 text-3xl sm:text-5xl font-bold tracking-tight">
          <a href="/">About</a>
        </h1>
        <div className="card p-4 bg-base-200 hover:bg-base-300 hover:shadow-2xl">
          <p className="mb-4 ">
            Back in 2019, I first encountered Python while working on my
            university thesis for ultrasound signal analysis. Since then, I have
            been using it for a variety of purposes and specially for backend
            development in Chile. I recently learned ReactJS and now I´m working
            as a freelance developer in Berlin, while learning the german
            language. I´m also developing a { }
            <a href="https://gptandem-4e1b1.web.app/" className="extlink">
              web app<FaExternalLinkAlt className="inline-block ml-1"  size={12}/>
            </a>
            {} for language learning, would love if you give it a try!
          </p>
          <p className="mb-2">
            I really like the entrepreneur mentality and startup vibes: build
            features as fast as you can, quickly validate with your customer,
            then refine details, and repeat. Here are some of the tools I use in
            these cycles:
          </p>
          <div className="mb-4 text-lg ">
            {stackTechnologies.map((tech, index) => (
              <div
                key={index}
                className="badge text-success-content badge-lg badge-success y-1 px-2 mr-2 mt-2"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
