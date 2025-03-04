
import Transition from './Transition';
import { ArrowDown, Code, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    const colors = ['#9b87f5', '#7E69AB', '#6E59A5', '#D6BCFA'];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around screen
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
        if (p.y > height) p.y = 0;
        if (p.y < 0) p.y = height;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      });
      
      // Draw connecting lines
      ctx.globalAlpha = 0.2;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Canvas Background Animation */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-[-2]"
        aria-hidden="true"
      />
      
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 z-[-1] bg-gradient-to-b from-primary/5 via-background to-background opacity-90"
        aria-hidden="true"
      />
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <Transition delay={200} animationType="fade-in">
              <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium mb-4">
                Software Developer
              </span>
            </Transition>
            
            <Transition delay={400} animationType="slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Welcome to My Portfolio
                <span className="text-gradient relative inline-block mb-2">
                    Experiences

                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/10 rounded-full"></span>
                </span> through code
              </h1>
            </Transition>
            
            <Transition delay={600} animationType="slide-up">
              <p className="text-lg text-foreground/80 mb-8 max-w-lg">
                I craft clean, efficient, and scalable solutions to complex problems. My name is Samson.

                Specializing in modern web technologies and software development.
              </p>
            </Transition>
            
            <Transition delay={800} animationType="slide-up">
              <div className="flex flex-wrap gap-4 mb-8">

                <button
                  onClick={scrollToProjects}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:shadow-lg hover:transform hover:-translate-y-1 hover:bg-primary/90 flex items-center gap-2 duration-300"
                >
                  View My Work <ArrowDown size={16} className="animate-bounce" />
                </button>
                
                <a 
                  href="#contact" 
                  className="px-6 py-3 border border-primary/20 text-foreground rounded-md font-medium hover:bg-primary/5 transition-all hover:shadow-md hover:border-primary/50 duration-300"
                >
                  Contact Me
                </a>
              </div>
            </Transition>
            
            <Transition delay={1000} animationType="fade-in">
              <div className="flex items-center gap-4">
                <a href="mailto:samsonasefa29995@outlook.com" className="p-2 rounded-full hover:bg-primary/10 transition-colors group">
                  <Github size={20} className="text-foreground/80 group-hover:text-foreground group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-primary/10 transition-colors group">
                  <Linkedin size={20} className="text-foreground/80 group-hover:text-foreground group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="mailto:example@example.com" className="p-2 rounded-full hover:bg-primary/10 transition-colors group">
                  <Mail size={20} className="text-foreground/80 group-hover:text-foreground group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </Transition>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <Transition delay={600} animationType="scale-in">
              <div className="glass-panel p-8 md:p-12 overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow duration-500 border-primary/10">
                <div className="absolute top-0 right-0 p-3 bg-primary/10 text-primary font-mono text-xs rounded-bl-md flex items-center gap-1">
                  <Code size={16} />
                  <span>code.tsx</span>
                </div>
                <div className="font-mono text-sm md:text-base">
                  <p className="mb-4"><span className="text-primary">class</span> <span className="text-foreground">Developer</span> {`{`}</p>
                  <p className="mb-2 pl-4"><span className="text-primary">constructor</span>() {`{`}</p>
                  <p className="mb-2 pl-8">this.<span className="text-primary">name</span> = <span className="text-foreground">"Samson"</span>;</p>
                  <p className="mb-2 pl-8">this.<span className="text-primary">title</span> = <span className="text-foreground">"Software Developer"</span>;</p>
                  <p className="mb-2 pl-8">this.<span className="text-primary">skills</span> = [<span className="text-foreground">"JavaScript", "React", "Node.js", "TypeScript"</span>];</p>
                  <p className="mb-2 pl-4">{`}`}</p>
                  <p className="mb-2 pl-4"><span className="text-primary">sayHello</span>() {`{`}</p>
                  <p className="mb-2 pl-8"><span className="text-primary">return</span> <span className="text-foreground">"Thanks for visiting my portfolio!"</span>;</p>
                  <p className="mb-2 pl-4">{`}`}</p>
                  <p>{`}`}</p>
                </div>
              </div>
            </Transition>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full filter blur-xl animate-pulse" aria-hidden="true" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full filter blur-xl animate-float" aria-hidden="true" />
            
            {/* Floating Tech Icons */}
            <Transition delay={800} animationType="fade-in">
              <div className="absolute -right-6 top-1/4 bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-md border border-white/20 animate-float">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="font-bold">R</span>
                </div>
              </div>
            </Transition>
            
            <Transition delay={900} animationType="fade-in">
              <div className="absolute -left-4 bottom-1/4 bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-md border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="font-bold">JS</span>
                </div>
              </div>
            </Transition>
            
            <Transition delay={1000} animationType="fade-in">
              <div className="absolute top-0 left-1/4 bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-md border border-white/20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                  <span className="font-bold">TS</span>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
