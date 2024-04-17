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
      <section id="about" className="mb-24 scroll-mt-16 md:mb-24 lg:scroll-mt-24 ">
        <h1 className="text-center pb-10 lg:pb-20 text-3xl sm:text-5xl font-bold tracking-tight">
          <a href="/">About</a>
        </h1>
        <div className="p-4 bg-base-200 hover:bg-base-300 hover:shadow-2xl rounded-lg">
        <p className="mb-4 ">
          Back in 2019, I first encountered Python while working on my
          university thesis for ultrasound signal analysis. Since then, I have
          been using it for backend development in four projects at some of the
          biggest companies in Chile. Currently, I am expanding my skill set
          with React to create full-stack digital solutions.
        </p>
        <p className="mb-2">
          I identify as a customer-centric developer, engaging with clients to
          thoroughly comprehend their business requirements. Here are some of
          the tools I use to address them:
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
