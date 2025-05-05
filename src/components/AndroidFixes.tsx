
import React from "react";
import AnimatedCard from "./AnimatedCard";
import { Download, ExternalLink, Info } from "lucide-react";

const AndroidFixes = () => {
  const fixes = [
    {
      title: "Restart Your Device",
      description: "Restarting your device refreshes the system and fixes temporary glitches in the Executor.",
      icon: "refresh"
    },
    {
      title: "Clear App Cache and Data",
      description: "Go to Settings > Apps > Select the app > Storage > Clear Cache/Clear Data. Either option may help resolve the issue.",
      icon: "clear"
    },
    {
      title: "Update the Executor and OS",
      description: "Make sure both the app and your device's operating system are up to date.",
      icon: "update"
    },
    {
      title: "Reinstall the App",
      description: "Uninstall the app and download it again for a fresh installation.",
      icon: "reinstall"
    },
    {
      title: "Free Up Storage",
      description: "Low storage can cause apps to malfunction. Clear some space by removing junk files, videos, and unused apps.",
      icon: "storage"
    },
    {
      title: "Lower Your Graphics Settings",
      description: "Some mobile devices struggle to load games while running Delta. Reducing your graphics settings and playing lower-quality games can help performance.",
      icon: "graphics"
    }
  ];

  return (
    <section id="android-fixes" className="py-16 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Android Guide & Fixes</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Official installation instructions and common fixes for Delta Executor on Android devices
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-1/2">
            <AnimatedCard className="h-full" glowColor="blue">
              <h3 className="text-2xl font-semibold mb-4 text-white">Official Android Download</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-delta-blue bg-opacity-20 p-2 rounded-full mr-4 shrink-0">
                    <Info size={20} className="text-delta-blue" />
                  </div>
                  <div>
                    <p className="text-gray-300">
                      Download the latest version of Delta Executor for Android from our official website:
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <a
                    href="https://deltaexploits.gg/delta-executor-mobile"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="delta-button inline-flex animate-pulse-glow"
                  >
                    <Download size={18} />
                    Download Android Version
                  </a>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-delta-green flex items-center justify-center mr-2 shrink-0">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <p className="text-gray-300">Official: Verified by the Delta team</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-delta-green flex items-center justify-center mr-2 shrink-0">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <p className="text-gray-300">Up-to-date: Latest Delta Android changes</p>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-delta-green flex items-center justify-center mr-2 shrink-0">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <p className="text-gray-300">Malware-free: Safe and secure</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>

          <div className="md:w-1/2">
            <AnimatedCard className="h-full" glowColor="purple" delay={200}>
              <h3 className="text-2xl font-semibold mb-4 text-white">Troubleshooting</h3>
              <p className="mb-4 text-gray-300">If Delta isn't loading up, here are some common fixes:</p>

              <div className="space-y-4">
                {fixes.map((fix, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-delta-purple bg-opacity-20 p-2 rounded-full mr-4 shrink-0">
                      <span className="text-delta-purple font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{fix.title}</h4>
                      <p className="text-gray-300 text-sm">{fix.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="mt-4 text-sm text-gray-400">If these steps work, you may need to repeat them occasionally.</p>
            </AnimatedCard>
          </div>
        </div>
        
        <div className="text-right">
          <p className="text-sm text-gray-400">Credits: Delta android team/Rexi</p>
        </div>
      </div>
    </section>
  );
};

export default AndroidFixes;
