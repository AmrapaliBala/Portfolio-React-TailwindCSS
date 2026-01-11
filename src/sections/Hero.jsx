import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Twitter } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "CSS",
  "HTML",
  "Figma",
  "Java",
  "Node.js",
  "Express Js",
  "GitHub Actions",
];

export const Hero = ({ onContactClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden ">
      
      <div className="absolute inset-0">
        <img src="/hero.jpg" alt="" className="w-full h-full opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }} />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-10 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* left column*/}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-cyan-blue">{/* flexbox that hugs its content */}
                <span className="w-2 h-2 bg-cyan-blue rounded-full animate-pulse" />
                Frontend developer
              </span>
            </div>

            {/* headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                 Where thoughtful <span className="text-cyan-blue glow-text">design</span>
                <br />meets clean
                <br /> <span className="font-serif italic font-normal text-white">frontend code</span>
              </h1>

              <p className="text-lg text-faded-blue max-w-lg animate-fade-in animation-delay-200">
               I’m a frontend developer who enjoys building clean, responsive user interfaces using
                HTML, CSS, JavaScript, React, and Tailwind CSS, while translating designs from
                Figma into functional web experiences
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={onContactClick}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Opens in a new tab — you can download from there">
                  <AnimatedBorderButton>
                    <Download className="w-5 h-5" />
                    Download CV
                  </AnimatedBorderButton>
              </a>
            </div>

            {/* social */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-faded-blue">Follow Me</span>
              {[
                { icon: Github, href: "https://github.com/AmrapaliBala"},
                { icon: Linkedin, href: "https://www.linkedin.com/in/amrapali-bala-546b78252/"},
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-cyan-blue/10 hover:text-cyan-blue transition-all duration-300">
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>

          </div>

          {/* right column */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
              
              <div className="relative  p-2 glow-border">
                <img src="/profile.png" alt="" className="w-full object-cover rounded-1xl" />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* skills */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-faded-blue mb-6 text-center">Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="flex-shrink-0 px-8 py-4"><span className="text-xl font-semibold text-faded-blue/50 hover:text-faded-blue transition-colors">{skill}</span></div>
               ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}