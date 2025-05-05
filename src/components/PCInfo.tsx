
import React from "react";
import AnimatedCard from "./AnimatedCard";
import { AlertTriangle, ExternalLink } from "lucide-react";

const PCInfo = () => {
  const emulators = [
    {
      name: "Nox Player",
      link: "https://es.bignox.com/",
      description: "Popular Android emulator with good gaming performance"
    },
    {
      name: "Bluestacks",
      link: "https://www.bluestacks.com/",
      description: "Well-known emulator with extensive compatibility"
    },
    {
      name: "Memu Player",
      link: "https://www.memuplay.com/es/",
      description: "High-performance gaming emulator with great stability"
    },
    {
      name: "LD Player",
      link: "https://es.ldplayer.net/",
      description: "Lightweight emulator focused on gaming performance"
    },
    {
      name: "Gameloop",
      link: "https://www.gameloop.com/",
      description: "Tencent's official emulator with excellent game compatibility"
    }
  ];

  return (
    <section id="pc-info" className="py-16 bg-delta-darker bg-opacity-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">PC Information</h2>
            <div className="bg-yellow-500 bg-opacity-20 p-4 rounded-md border border-yellow-500 border-opacity-20 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="text-yellow-500 mr-3 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">PC Version Discontinued</h3>
                  <p className="text-gray-300">Sadly, PC has been discontinued for over a year now. But don't worry, you still have emulators as a choice!</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              If you don't know what emulators are, they're basically apps which represent mobile functions and UI, meaning you have a mobile inside an app! Below are some recommended emulators that work well with Delta Executor.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-delta-blue-glow animate-pulse-glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="bg-delta-card-bg border border-gray-800 p-8 rounded-lg relative z-10">
                <h3 className="text-2xl font-bold text-center mb-4 gradient-text">Emulator Solution</h3>
                <p className="text-gray-300 text-center">
                  Use Android emulators to run Delta Executor on your PC
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {emulators.map((emulator, index) => (
            <AnimatedCard 
              key={index}
              delay={index * 100}
              className="transform transition-all border border-gray-800 hover:border-delta-blue"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{emulator.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{emulator.description}</p>
              <a
                href={emulator.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-delta-blue hover:text-blue-400 transition-colors flex items-center"
              >
                Visit Website <ExternalLink size={16} className="ml-2" />
              </a>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PCInfo;
