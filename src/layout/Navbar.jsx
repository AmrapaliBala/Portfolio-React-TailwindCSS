import { Button } from "@/components/Button";
import { Menu,X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export const Navbar = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled?"glass-strong py-3":"bg-transparent py-5"}`}>
      <nav className="container mx-auto px-10 flex items-center justify-between">

        <a href="#" className="text-xl front-bold tracking-tight hover:text-cyan-blue">
          AB<span className="text-cyan-blue">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-2 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-faded-blue hover:text-whitish-grey rounded-full hover:bg-surface">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
            <Button onClick={onContactClick}>Contact Me</Button>
        </div>

        <button className="md:hidden p-2 text-whitish-grey cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24}/>:<Menu size={24}/>}
        </button>

      </nav>

      {isMobileMenuOpen && (<div className="md:hidden glass-strong animate-fade-in">
        <div className="container mx-auto px-10 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <a href={link.href}
              key={index} className="text-lg text-faded-blue hover:text-whitish-grey py-2"
              onClick={()=>setIsMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button onClick={() => {onContactClick();setIsMobileMenuOpen(false);}}>
            Contact Me
          </Button>
        </div>
      </div>)}
    </header>
  );
} 