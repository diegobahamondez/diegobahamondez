const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self Employed",
    date: "2024",
    description:
      "Started building this portfolio to learn frontend, and then built up a full stack project for language learning.",
    technologies: [
      "Python",
      "Django Rest Framework",
      "OpenAI",
      "React",
      "Javascript",
      "TailwindCSS",
    ],
  },
  {
    title: "Tech Development Engineer",
    company: "COPEC SA",
    date: "2020-2023",
    description:
      "Developed innovative projects leveraging Python, AWS services and electronic sensors. Developed the backend of IoEnergy, an IoT gasoline inventory app with Python and AWS, reducing downtime from shortages. Developed the backend for Codex, a civil engineering project management web app with Python, GraphQL, and Pandas, acclaimed for improving project organization and cost estimation in construction.",
    technologies: [
      "Python",
      "GraphQL",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "AWS IoT Core",
    ],
  },
  {
    title: "Python Developer",
    company: "Steer Davies & Gleave",
    date: "2019-2020",
    description:
      "Developed an app for the Ministry of Transportation of Chile to estimate product transportation costs using Python, PostgreSQL, and PyQt5.",
    technologies: ["Python", "Pandas", "PostgreSQL", "PyQt5"],
  },
  {
    title: "Student Researcher",
    company: "CIMS JRI",
    date: "2018-2019",
    description:
      "Implemented a laboratory for viscosity measurement with ultrasonic signal generators and oscilloscopes, and utilized Python's scientific libraries for signal analysis and viscosity calculations.",
    technologies: ["Python", "Pandas", "Electronics Sensors", "PCB Design"],
  },
  {
    title: "Electrical Engineering",
    company: "Universidad de Santiago de Chile",
    date: "2019",
    description:
      "Specialized in industrial control systems, learned several programming languages and won the 2016's electrical engineering fair in the innovation category.",
    technologies: [
      "Electromechanics",
      "Electronics",
      "Arduino",
      "C",
      "PLCs",
      "Matlab",
      "Networking",
      "Power Electronics",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="lg:pt-28">
      <h1 className="text-center pb-10 sm:pb-20 text-3xl sm:text-5xl font-bold tracking-tight mt-0">
        <a href="/">Experience</a>
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {experiences.map((experience) => (
          <article
            key={`${experience.title}-${experience.company}`}
            className="card md:flex md:flex-row pb-4 p-4 bg-base-200 hover:bg-base-300 text-base-content  hover:shadow-2xl"
          >
            <time
              dateTime={experience.date}
              className="text-start pr-2 md:min-w-24"
            >
              {experience.date}
            </time>
            <div>
              <div className="flex items-center">
                <h3 className="font-bold text-lg">{experience.title}</h3>
              </div>
              <p className="pb-2">
                <span className="font-bold">{experience.company}</span>
              </p>
              <p className="text-sm">{experience.description}</p>
              <ul className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, index) => (
                  <li key={index} className="badge bg-gray-300 text-gray-800">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
