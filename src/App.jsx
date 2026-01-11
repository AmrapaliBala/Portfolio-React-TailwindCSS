import { useRef } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import { Education } from "@/sections/Education";

function App() {
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen overflow-x-hidden"> 
      <Navbar onContactClick={scrollToContact}/>
      <main>
        <Hero onContactClick={scrollToContact} />
        <About />
        <Projects />
        <Education />
        <Contact ref={contactRef}/>
      </main>
      <Footer/>
    </div>
  );
}

export default App
