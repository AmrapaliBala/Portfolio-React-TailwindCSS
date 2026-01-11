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
              Design-driven frontend developer 
              <span className="font-serif italic font-normal text-white">
               {" "} crafting clean, responsive web experiences.
              </span>
            </h2>

            <div className="space-y-4 text-faded-blue animate-fade-in animation-delay-200">
              <p>I’m a frontend developer who enjoys building clean, responsive, and visually
                 refined web interfaces. I work with HTML, CSS, JavaScript, React, and Tailwind CSS,
                  and I have a foundational understanding of Node.js, Express.js, and Java.
              </p>

              <p>I’m passionate about clean code, thoughtful layouts, and creating user experiences
                 that feel both functional and elegant. Design plays a big role in how I build— I 
                 enjoy translating ideas and UI concepts into polished, responsive interfaces that
                  work seamlessly across devices.
              </p>

              <p>I’m always learning, improving, and refining my approach to both design and development.
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