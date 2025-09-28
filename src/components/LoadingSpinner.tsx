import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const LoadingSpinner = ({ size = "md", className, text }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <div className="relative">
        {/* Outer ring */}
        <div 
          className={cn(
            "animate-spin rounded-full border-2 border-white/20 border-t-hero-accent",
            sizeClasses[size]
          )}
        />
        {/* Inner pulse */}
        <div 
          className={cn(
            "absolute inset-2 bg-hero-accent/30 rounded-full animate-pulse",
            size === "sm" ? "inset-1" : size === "lg" ? "inset-3" : "inset-2"
          )}
        />
      </div>
      {text && (
        <p className="text-white/80 text-sm animate-pulse">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;