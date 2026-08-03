import { Code2, Rocket, Slack, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean & Maintainable Code",
    description:"I focus on writing structured, readable, and scalable code that’s easy to understand and maintain.",
  },
  {
    icon: Rocket,
    title: "Responsive Design",
    description:"I build interfaces that adapt smoothly across devices, ensuring a consistent experience on mobile, tablet, and desktop.",
  },
  {
    icon:Slack,
    title: "Interactive Web Experiences",
    description: "I enjoy creating engaging UI interactions using modern frontend tools to make websites feel dynamic and intuitive.",
  },
  {
    icon: Users,
    title: "Collaboration & Communication",
    description:"I work well with others, value feedback, and enjoy collaborating to turn ideas into well-designed, functional products.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden scroll-mt-28">

      <div className="container mx-auto px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* left column */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="text-cyan-blue text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-cyan-blue">
             Full-Stack Developer
              <span className="font-serif italic font-normal text-white">
               {" "}building scalable applications with clean, responsive user experiences.
              </span>
            </h2>

            <div className="space-y-4 text-faded-blue animate-fade-in animation-delay-200">
              <p>I am a full-stack web developer with experience building modern, responsive, 
                and user-friendly web applications using React.js, JavaScript, Node.js, Express.js,
                and MongoDB. I enjoy developing end-to-end solutions, from creating intuitive user
                interfaces to building RESTful APIs and integrating databases. While 
                I particularly enjoy crafting clean and engaging frontend experiences, I also 
                appreciate working on backend logic and developing scalable, efficient 
                applications.
              </p>

              <p>My experience includes REST API integration and development, JWT authentication, 
                password encryption using bcrypt, file uploads with Multer, and database management
                with MongoDB and Mongoose. I have worked with technologies such as React Hooks,
                React Router, Axios, HTML5, CSS3, Tailwind CSS, and have a basic understanding
                of SQL and Core Java with strong object-oriented programming fundamentals.
              </p>

              <p>I am proficient with development tools including Git, GitHub, Postman, Figma, and 
                Vercel, and I value writing clean, maintainable, and efficient code. I am currently
                expanding my skills by learning Next.js and TypeScript to build more scalable and 
                production-ready applications. I enjoy solving real-world problems, continuously 
                learning new technologies, and collaborating to create high-quality software.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-whitish-grey">
                I like my code clean and my designs responsive.
              </p>
            </div>

          </div>

          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in " style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-cyan-blue/30 flex items-center justify-center mb-4 hover:bg-cyan-blue/40">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-faded-blue">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};