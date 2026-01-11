const educations = [
  {
    period: "2023 — 2025",
    degree: "Master of Computer Applications(MCA)",
    institution: "RCC Institute of Information Technology| Maulana Abul Kalam Azad University of Technology",
    location: "Kolkata",
    current: true,
  },
  {
    period: "2020 — 2023",
    degree: "Bachelor of Computer Science(Hons)",
    institution: "Bethune College | University of Calcutta ",
    location:"Kolkata",
    current:false,
  },
  {
    period: "2020",
    degree: "Higher Secondary (Science)",
    institution: "St.Stephen’s School(ICSE) ",
    location: "Kolkata",
    current:false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-blue/20 rounded-full blur-2xl -translate-y-1/2" />

      <div className="container mx-auto px-10 pt-32 pb-20 relative z-10">

        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-cyan-blue text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-cyan-blue">
            My academic journey <span className="font-serif italic font-normal text-white">{" "}so far</span>
          </h2>

          <p className="text-faded-blue animate-fade-in animation-delay-200">
            A little about my learning journey.
          </p>

        </div>

        {/* timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-blue/70 via-cyan-blue/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Education */}
          <div className="space-y-10">
            {educations.map((exp, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: `${(idx + 1) * 150}ms` }}>

                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-cyan-blue rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-cyan-blue animate-ping opacity-75" />
                  )}
                </div>

                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>

                  <div className={`glass p-6 rounded-2xl border border-cyan-blue/30 hover:border-cyan-blue/50 transition-all duration-500`}>
                    <span className="text-sm text-cyan-blue font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.degree}</h3>
                    <p className="text-faded-blue">{exp.institution}</p>
                    <p className="text-sm text-faded-blue mt-4">{exp.location}</p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};