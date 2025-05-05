
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "none";
  delay?: number;
}

const AnimatedCard = ({ 
  children, 
  className,
  glowColor = "none",
  delay = 0
}: AnimatedCardProps) => {
  const glowClasses = {
    blue: "hover:shadow-[0_0_15px_rgba(44,127,255,0.5)]",
    purple: "hover:shadow-[0_0_15px_rgba(155,102,255,0.5)]",
    none: ""
  };

  return (
    <div 
      className={cn(
        "glass-card p-6 transition-all duration-300 hover:translate-y-[-5px]",
        glowClasses[glowColor],
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${delay}ms forwards`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
