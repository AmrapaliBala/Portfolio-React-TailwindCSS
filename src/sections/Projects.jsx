import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Penny flow",
    description:"This project is a fully responsive Expense Tracker web application that helps users monitor their income and expenses in real time. It dynamically calculates total income, total expenses, and the remaining balance based on user input, providing a clear financial overview at a glance.",
    image: "/projects/Pennyflow.png",
    tags: ["HTML", "CSS", "Javascript"],
    link: "#",
    github: "https://github.com/AmrapaliBala/penny-flow-html-css-javascript",
  },
  {
    title: "Pulp",
    description: "Pulp is a fully responsive, animated web application built using HTML, CSS, and JavaScript. The project focuses on delivering a smooth and visually engaging user experience through modern layouts, animations, and responsive design techniques.",
    image: "/projects/Pulp.png",
    tags: ["HTML", "CSS", "Javascript"],
    link: "#",
    github: "https://github.com/AmrapaliBala/pulp-html-css-javascript",
  },
  {
    title: "Quiz game",
    description: "The quiz provides instant visual feedback, highlighting correct answers in green and incorrect answers in red. To ensure fairness, once an answer is selected, it cannot be changed, even if the user navigates back and forth between questions.",
    image: "/projects/Quiz.png",
    tags: ["HTML", "CSS", "Javascript"],
    link: "#",
    github: "https://github.com/AmrapaliBala/quiz-time-html-css-javascript",
  },
  {
    title: "Rhythm",
    description: "Rhythm is a responsive music web application that allows users to play, pause, and switch between songs seamlessly. The application features an interactive UI with a dynamic bottom music player that displays the currently playing track, enhancing the overall user experience. Built using HTML, CSS, and JavaScript, the project focuses on smooth interactivity, clean design, and responsive behavior across different screen sizes.",
    image: "/projects/Rhythm.png",
    tags: ["HTML", "CSS", "Javascript"],
    link: "#",
    github: "https://github.com/AmrapaliBala/rhythm-html-css-javascript",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">

      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-blue/25 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/25 rounded-full blur-2xl" />

      <div className="container mx-auto px-10 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">

          <span className="text-cyan-blue text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-cyan-blue">
            Projects
            <span className="font-serif italic font-normal text-white">
              {" "}
              I’ve enjoyed building.
            </span>
          </h2>

          <p className="text-faded-blue animate-fade-in animation-delay-200">
            A collection of my recent projects,ranging from responsive designs to functional code.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}>

              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inky-blue via-inky-blue/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className="p-3 rounded-full glass hover:bg-cyan-blue hover:text-white transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <a href={project.github} className="p-3 rounded-full glass hover:bg-cyan-blue hover:text-white transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                </div>

              </div>

              {/* Content */}
              <div className="p-6 space-y-4">

                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-cyan-blue transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-5 h-5  text-faded-blue group-hover:text-cyan-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-faded-blue text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-faded-blue hover:border-cyan-blue/50 hover:text-cyan-blue transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>

      </div>

    </section>
  );
};