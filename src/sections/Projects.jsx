import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
    {
    title: "MediConnect",
    description: "MediConnect is a full-stack doctor appointment booking platform that connects patients, doctors, and administrators through a secure and user-friendly web application. The system provides three dedicated panels :Patient Panel,Doctor Panel,Admin Panel",
    image: "/projects/MediConnect.png",
    tags: ["React", "React Router", "Axios" ,"Tailwind CSS","Node.js","Express.js","MongoDB","MongoDB Atlas","JWT","bcrypt","Multer","Cloudinary",
      "CORS"],
    link: "https://mediconnect-frontend-owrs.onrender.com",
    github: "https://github.com/AmrapaliBala/MediConnect",
  },
  {
    title: "NoteFlow",
    description: "Created a responsive note-taking application featuring CRUD operations, search, sorting, dark mode, and localStorage persistence. Established a modern landing page and interactive dashboard using reusable React components, Motion animations, and toast notifications.",
    image: "/projects/NoteFlow.png",
    tags: ["Next.js 16","React.js","JavaScript (ES6+)","Tailwind CSS","React Context API","Motion (Framer Motion)","Lucide React","Browser Local Storage"],
    link: "https://note-flow-nextjs-reactjs-javascript.vercel.app/",
    github: "https://github.com/AmrapaliBala/noteFlow-nextjs-reactjs-javascript-tailwind-framermotion",
  },
  {
    title: "PennyflowMern",
    description: "PennyFlow MERN is a full-stack personal finance management application converted from my original frontend-only PennyFlow project. It enables users to manage income and expenses, track balances, and view transaction summaries, with secure authentication, Google Sign-In, email OTP-based password recovery, and an AI-powered financial assistant using Google Gemini to provide personalized spending insights.",
    image: "/projects/PennyFlowMern.png",
    tags: ["Reactjs", "Nodejs", "Expressjs","MongoDB","GeminiAPI","JWT","OAuth2.0"],
    link: "https://pennyflow-prjc.onrender.com",
    github: "https://github.com/AmrapaliBala/pennyFlow-Mern",
  },
    {
    title: "Dashboard",
    description: "This project is a modern analytics dashboard built using React.js, Tailwind CSS, Axios, and ApexCharts. The application provides a responsive interface for visualizing business-related data such as projects, clients, team members, and platform statistics.The dashboard integrates public REST APIs to fetch and display dynamic data in real time, demonstrating practical API consumption, state management with React Hooks, and component-based architecture.",
    image: "/projects/Dashboard.png",
    tags: ["React.js", "Tailwind CSS", "ApexCharts","React Route","REST APIs"],
    link: "https://dashboard-react-tailwind-css.vercel.app/",
    github: "https://github.com/AmrapaliBala/dashboard-react-tailwindCSS",
  },
  {
    title: "Pulp",
    description: "Pulp is a fully responsive, animated web application built using HTML, CSS, and JavaScript. The project focuses on delivering a smooth and visually engaging user experience through modern layouts, animations, and responsive design techniques.",
    image: "/projects/Pulp.png",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://pulp-html-css-javascript.vercel.app/",
    github: "https://github.com/AmrapaliBala/pulp-html-css-javascript",
  },
  {
    title: "Quiz game",
    description: "The quiz provides instant visual feedback, highlighting correct answers in green and incorrect answers in red. To ensure fairness, once an answer is selected, it cannot be changed, even if the user navigates back and forth between questions.",
    image: "/projects/Quiz.png",
    tags: ["HTML", "CSS", "Javascript"],
    link: "https://quiz-time-html-css-javascript.vercel.app/",
    github: "https://github.com/AmrapaliBala/quiz-time-html-css-javascript",
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
              {" "}I’ve enjoyed building.
            </span>
          </h2>

          <p className="text-faded-blue animate-fade-in animation-delay-200">
            A collection of my recent projects,ranging from responsive designs to functional code.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                
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

                <p className="text-faded-blue text-sm">{project.description}</p>

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
              View All Projects <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};