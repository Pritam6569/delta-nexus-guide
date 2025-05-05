
import React from "react";
import { Download, ExternalLink, ShieldCheck } from "lucide-react";

const DownloadSection = () => {
  const officialLinks = [
    {
      title: "Official Website",
      description: "Find options, socials and news of Delta Exploits",
      link: "https://deltaexploits.gg/",
      buttonText: "Visit Website"
    },
    {
      title: "Android Download",
      description: "Download the latest version of Delta Executor for Android",
      link: "https://deltaexploits.gg/delta-executor-mobile",
      buttonText: "Download Now"
    },
    {
      title: "Lifetime Key Shop",
      description: "Tired of keys? Get a lifetime key from our shop",
      link: "https://shop.deltaexploits.gg/",
      buttonText: "Visit Shop"
    }
  ];

  return (
    <section id="downloads" className="py-16 bg-gradient-to-b from-delta-dark to-delta-darker relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Official Downloads & Links</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            To ensure your safety and security, only use these official links verified by the Delta team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officialLinks.map((link, index) => (
            <div 
              key={index}
              className="glass-card p-6 border border-gray-800 bg-opacity-60 flex flex-col h-full transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-[0_5px_20px_rgba(44,127,255,0.3)]"
              style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 0,
                animation: `fadeIn 0.6s ease-out ${index * 150}ms forwards`
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-delta-blue-glow flex items-center justify-center mr-3">
                  {index === 0 ? (
                    <ShieldCheck size={20} className="text-delta-blue" />
                  ) : index === 1 ? (
                    <Download size={20} className="text-delta-blue" />
                  ) : (
                    <ShieldCheck size={20} className="text-delta-blue" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white">{link.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 flex-grow">{link.description}</p>
              
              <div className="mt-auto">
                <a
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={index === 1 
                    ? "delta-button w-full" 
                    : "delta-button-secondary w-full"
                  }
                >
                  {link.buttonText}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-delta-card-bg border border-gray-800 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="w-16 h-16 bg-green-500 bg-opacity-10 rounded-full flex items-center justify-center">
                <ShieldCheck size={32} className="text-green-500" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Security Notice</h3>
              <p className="text-gray-300">
                The links provided on this page are the only official sources for Delta Executor. 
                Using unofficial sources may expose you to malware or modified versions. Always verify 
                you're downloading from our official website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
