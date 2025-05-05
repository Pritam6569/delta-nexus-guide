
import React from "react";
import AnimatedCard from "./AnimatedCard";
import { ArrowRight, AlertTriangle, ExternalLink } from "lucide-react";

const KeyGuide = () => {
  const keySteps = [
    {
      title: "Loading into a game",
      description: "Loading into a game is the first step to get a key link. Without this your executor won't load. If your executor doesn't load be sure to join low quality game."
    },
    {
      title: "Clicking the button named \"Receive Key\"",
      description: "There will be a UI which will pop up in the right side of your screen. Remember to trace the button called \"Receive key\" to get the key link."
    },
    {
      title: "Head into your browser",
      description: "Everyone knows that to open a link, you need to enter a browser to paste it."
    },
    {
      title: "Pasting your key link in the browser",
      description: "Pasting the key link in your browser starts the key system."
    },
    {
      title: "Platoboost.com (Gate of the key)",
      description: "Once you've placed your key link in your browser, you will be redirected to a website called 'Platoboost.com'. If you don't get redirected to the Platoboost website, remember to cancel the upcoming website which is not Platoboost. Once you're done loading in Platoboost, click the button 'continue'."
    },
    {
      title: "Lootlinks/lootlabs (Process to get key)",
      description: "Once you've clicked 'continue', you will be redirected to a site called Lootlabs. If you're not redirected to Lootlabs, remember that it's a popup ad and you can cancel the website. There will be a few tasks to do before you can get a key."
    },
    {
      title: "Continuing to the end of the key",
      description: "Once you've done all the tasks in Lootlabs, there will be a purple button which will pop up under all the tasks. Click it and you will be redirected to Platoboost.com."
    },
    {
      title: "Platoboost.com (Generator)",
      description: "Once you've done the tasks in Lootlabs, click the purple button and you will be redirected to Platoboost.com. Remember to click back if it's not Platoboost.com. If it is Platoboost.com, then you can continue by clicking 'Create key'. Once you have clicked the button, copy the key and head back to Delta to paste it."
    }
  ];

  const troubleshootingTips = [
    {
      title: "The task 'Watch a video'",
      description: "The task 'watch a video' is very difficult and frustrating since it brings you to the app YouTube and thus does not let you pass. If you have this issue, simply use a VPN and restart your key link. Remember to use a different browser."
    },
    {
      title: "Having tasks which cannot be passed or takes forever to be done",
      description: "Having long tasks can be frustrating. To fix this, use a different browser and a VPN and restart your key link."
    },
    {
      title: "Lootlabs failure",
      description: "Lootlabs may not pop up or just be an empty screen. To fix this, clear your browser's cache and restart key link. Use a VPN and a different browser if that doesn't work."
    }
  ];

  return (
    <section id="get-key" className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Get Delta Key</h2>
        <p className="mb-8 text-gray-300 max-w-3xl">
          Follow this step-by-step guide to properly obtain your Delta key. This is the official process — following these exact steps will help you avoid common issues.
        </p>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-white">Key Acquisition Steps</h3>
          <div className="space-y-6">
            {keySteps.map((step, index) => (
              <AnimatedCard 
                key={index} 
                delay={index * 100}
                glowColor={index % 2 === 0 ? "blue" : "purple"}
                className="relative overflow-hidden border border-gray-800"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-delta-blue to-delta-purple"></div>
                <div className="pl-3">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-delta-blue flex items-center justify-center mr-3 shrink-0">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <h4 className="font-semibold text-xl text-white">{step.title}</h4>
                  </div>
                  <p className="text-gray-300 ml-11">{step.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-white flex items-center">
            <AlertTriangle className="text-yellow-400 mr-2" size={24} />
            Key Troubleshooting
          </h3>
          <p className="mb-6 text-gray-300">If you encounter issues with the key system, try these solutions:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {troubleshootingTips.map((tip, index) => (
              <AnimatedCard 
                key={index}
                delay={(index + keySteps.length) * 100}
                className="border-l-4 border-yellow-500"
              >
                <h4 className="font-semibold text-lg text-white mb-2">{tip.title}</h4>
                <p className="text-gray-300">{tip.description}</p>
              </AnimatedCard>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://shop.deltaexploits.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="delta-button-secondary inline-flex"
            >
              Get Lifetime Key <ExternalLink size={18} className="ml-2" />
            </a>
            <p className="mt-2 text-sm text-gray-400">Tired of keys? Get a lifetime key from our official shop!</p>
          </div>
        </div>
        
        <div className="mt-8 text-right text-sm text-gray-400">
          <p>Credits: Delta team 2025</p>
        </div>
      </div>
    </section>
  );
};

export default KeyGuide;
