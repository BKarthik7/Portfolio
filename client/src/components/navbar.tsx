import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: "https://drive.google.com/file/d/1mrtdwbfZP6yJLb5U2lUt2qJTtYJfJ7o6/view?usp=sharing", label: "Resume", external: true },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [location] = useLocation();

  // Handle smooth scrolling for anchor links and external links
  const handleClick = (link: typeof navigationLinks[0]) => {
    setIsMenuOpen(false);
    if (link.external) {
      window.open(link.href, "_blank");
      return;
    }
    const element = document.getElementById(link.href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all sections and find which one is currently in view
      const sections = navigationLinks.filter(link => !link.external).map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const isInView = top <= 100 && bottom >= 100;
          if (isInView) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Call once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1">
            <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">BK</span>
            </div>
            <span className="text-lg font-semibold font-display">B Karthik</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-indicator font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link);
                  }}
                  className={`nav-link-indicator font-medium ${
                    activeSection === link.href.substring(1) ? "active" : ""
                  }`}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4 pb-4">
              {navigationLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link);
                    }}
                    className="font-medium"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
