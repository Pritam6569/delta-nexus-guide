
import React from "react";
import Navbar from "@/components/Navbar";
import KeyGuide from "@/components/KeyGuide";
import AndroidFixes from "@/components/AndroidFixes";
import PCInfo from "@/components/PCInfo";
import ScriptLinks from "@/components/ScriptLinks";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Download, Code, Info } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-delta-dark text-white relative">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-delta-blue-glow blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-delta-purple-glow blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-10 md:mb-0">
              <div 
                className="animated-list-item delay-100"
                style={{ 
                  opacity: 0,
                  animation: 'fadeIn 0.6s ease-out forwards'
                }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="gradient-text">Delta Executor</span> <br />
                  <span className="text-white">Official Guide</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 max-w-xl">
                  Your comprehensive resource for instructions, downloads, troubleshooting, and script links for Delta Executor.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a href="#get-key" className="delta-button">
                    Get Started <ArrowRight size={18} className="ml-2" />
                  </a>
                  <a 
                    href="https://deltaexploits.gg/delta-executor-mobile" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="delta-button-secondary"
                  >
                    Download Now <Download size={18} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/5">
              <div 
                className="bg-delta-card-bg border border-gray-800 rounded-lg p-6 shadow-lg backdrop-blur-sm relative overflow-hidden"
                style={{ 
                  opacity: 0,
                  animation: 'fadeIn 0.6s ease-out 0.3s forwards'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-delta-blue to-delta-purple"></div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Shield className="mr-2 text-delta-blue" size={20} />
                  Official & Secure
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">Official links & resources</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">Up-to-date guides & fixes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">Verified by Delta team</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mr-2 mt-0.5 shrink-0">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span className="text-gray-300">Malware-free downloads</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Navigation Cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                title: "Get Key",
                description: "Step-by-step key acquisition guide",
                icon: <Shield size={24} />,
                link: "#get-key",
                delay: 400
              },
              {
                title: "Android Fixes",
                description: "Solutions for common Android issues",
                icon: <Info size={24} />,
                link: "#android-fixes",
                delay: 500
              },
              {
                title: "PC Info",
                description: "Emulator options for PC users",
                icon: <Code size={24} />,
                link: "#pc-info",
                delay: 600
              },
              {
                title: "Script Links",
                description: "Verified script resources",
                icon: <Download size={24} />,
                link: "#scripts",
                delay: 700
              }
            ].map((card, index) => (
              <a 
                key={index} 
                href={card.link}
                className="bg-delta-card-bg border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:bg-delta-card-hover hover:border-delta-blue hover:-translate-y-1"
                style={{ 
                  opacity: 0,
                  animation: `fadeIn 0.5s ease-out ${card.delay}ms forwards`
                }}
              >
                <div className="text-delta-blue mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
                <div className="mt-4 flex items-center text-delta-blue text-sm font-medium">
                  Learn More 
                  <ArrowRight size={14} className="ml-2" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <KeyGuide />
      <AndroidFixes />
      <PCInfo />
      <ScriptLinks />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
