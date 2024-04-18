const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self Employed",
    date: "2024",
    description:
      "Started building this portfolio to learn frontend, and then built up a full stack project for language learning.",
    icon: "work",
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
      "Cloud backend developer for three serverless projects with a focus on IoT, Energy Efficiency, and Civil Engineering Project Management. Used technologies include Python, GraphQL, AWS Lambda, DynamoDB, and API Gateway.",
    icon: "work",
    technologies: [
      "Python",
      "GraphQL",
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
    ],
  },
  {
    title: "Python Developer",
    company: "Steer Davies & Gleave",
    date: "2019-2020",
    description:
      "Developed an app for the Ministry of Transportation of Chile to estimate product transportation costs using Python, PostgreSQL, and PyQt5.",
    icon: "work",
    technologies: ["Python", "PostgreSQL", "PyQt5"],
  },
  {
    title: "Student Researcher",
    company: "CIMS JRI",
    date: "2018-2019",
    description:
      "Implemented a laboratory for viscosity measurement with ultrasonic signal generators and oscilloscopes, and utilized Python's scientific libraries for signal analysis and viscosity calculations.",
    icon: "work",
    technologies: ["Python"],
  },
  {
    title: "Electrical Engineering",
    company: "Universidad de Santiago de Chile",
    date: "2019",
    description:
      "Specialized in industrial control systems, learned several programming languages and won the 2016's electrical engineering fair in the innovation category.",
    icon: "education",
    technologies: [],
  },
];

function Experience() {
  return (
    <section id="experience" className="lg:pt-24">
      <h1 className="text-center pb-10 sm:pb-20 text-3xl sm:text-5xl font-bold tracking-tight mt-0">
        <a href="/">Experience</a>
      </h1>

      <div className="grid grid-cols-1 gap-6">
        {experiences.map((experience) => (
          <div
            key={`${experience.title}-${experience.company}`}
            className="card md:flex md:flex-row pb-4 p-2 bg-base-200 hover:bg-base-300 text-base-content  hover:shadow-2xl rounded-lg"
          >
            <div className="md:min-w-24">{experience.date}</div>
            <div>
              <div className="flex items-center">
                <h3 className="font-bold text-lg">{experience.title}</h3>
              </div>
              <p className="pb-2">
                <span className="font-bold">{experience.company}</span>
              </p>
              <p className="">{experience.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="badge bg-gray-300 text-gray-800">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
