
import React from "react";
import AnimatedCard from "./AnimatedCard";
import { ExternalLink, Code, Search } from "lucide-react";

const ScriptLinks = () => {
  const scriptResources = [
    {
      name: "Script Blox",
      description: "Most visited script repository with a wide range of scripts for popular games",
      link: "https://scriptblox.com/",
      highlight: "Most visited"
    },
    {
      name: "Script Dee",
      description: "Specialized repository focused on Blox Fruit scripts",
      link: "https://scriptdee.com/",
      highlight: "Blox fruit scripts"
    },
    {
      name: "Script Pastebin",
      description: "Collection of scripts for popular games and various others",
      link: "https://scriptpastebin.com/",
      highlight: "Popular games"
    },
    {
      name: "Copy Pastebin",
      description: "General script resource with an extensive collection",
      link: "https://copypastebin.com/",
      highlight: ""
    }
  ];

  return (
    <section id="scripts" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Scripts</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tired of searching scripts through social media? Don't worry, we've got you covered! Below are trusted script websites verified by the Delta team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {scriptResources.map((resource, index) => (
            <AnimatedCard 
              key={index} 
              delay={index * 150}
              glowColor={index % 2 === 0 ? "blue" : "purple"}
              className="flex flex-col h-full"
            >
              <div className="flex items-start mb-4">
                <div className="bg-delta-card-hover p-3 rounded-md mr-4">
                  <Code size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{resource.name}</h3>
                  {resource.highlight && (
                    <span className="inline-block bg-delta-purple bg-opacity-20 text-delta-purple text-xs px-2 py-1 rounded-full mt-1">
                      {resource.highlight}
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">{resource.description}</p>
              
              <div className="mt-auto">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center text-delta-blue hover:text-blue-400 transition-colors"
                >
                  Visit Website
                  <ExternalLink 
                    size={16} 
                    className="ml-2 transform transition-transform group-hover:translate-x-1" 
                  />
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="bg-delta-card-bg border border-gray-800 rounded-lg p-6 animate-float">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Need help finding a specific script?</h3>
              <p className="text-gray-300">
                Use the search function on any of these websites to find scripts for your favorite games.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-12 h-12 bg-delta-blue bg-opacity-10 rounded-full flex items-center justify-center animate-bounce-subtle">
                <Search size={24} className="text-delta-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScriptLinks;
