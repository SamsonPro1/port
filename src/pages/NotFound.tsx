import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Transition from "@/components/Transition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="glass-panel p-8 md:p-12 max-w-lg w-full text-center">
        <Transition animationType="slide-up">
          <h1 className="text-7xl font-bold mb-4 text-gradient">404</h1>
        </Transition>
        
        <Transition delay={200} animationType="fade-in">
          <p className="text-xl text-foreground/80 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </Transition>
        
        <Transition delay={400} animationType="scale-in">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:shadow-md hover:bg-primary/90"
          >
            <ArrowLeft size={16} /> Return to Home
          </a>
        </Transition>
      </div>
    </div>
  );
};

export default NotFound;
