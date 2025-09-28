import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const PageTransition = ({ children, className, delay = 0 }: PageTransitionProps) => {
  return (
    <div 
      className={cn(
        "animate-fade-in opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;