
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Get Key", href: "#get-key" },
    { title: "Android Fixes", href: "#android-fixes" },
    { title: "PC Info", href: "#pc-info" },
    { title: "Scripts", href: "#scripts" },
    { title: "Downloads", href: "#downloads" }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6", 
        isScrolled 
          ? "bg-delta-darker bg-opacity-80 backdrop-blur-lg shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Delta Nexus</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.title}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-delta-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-delta-darker bg-opacity-95 backdrop-blur-lg p-4 border-t border-gray-800 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white py-2 px-4 rounded-md hover:bg-delta-card-hover transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
