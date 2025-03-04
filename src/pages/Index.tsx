import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Transition from "@/components/Transition";
import { Code, Headphones, Package } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <main>
        <Hero />
        <div id="about" className="py-20 relative">
          <div 
            className="absolute inset-0 z-[-1] bg-gradient-to-b from-background via-primary/5 to-background"
            aria-hidden="true"
          />
          
          <div className="section-container">
            <Transition animationType="slide-up">
              <div className="text-center mb-12">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">My journey in frontend development</p>
              </div>
            </Transition>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Transition delay={200} animationType="slide-in-right" className="order-2 lg:order-1">
                <div className="glass-panel p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-4 border-b border-primary/20 pb-2">Hi, I'm Samson</h3>
                  <p className="text-lg mb-4">
                    I'm a passionate frontend developer specializing in creating intuitive user interfaces for enterprise applications. I focus on building responsive and accessible web applications that solve real business problems.
                  </p>
                  <p className="text-lg mb-4">
                    With expertise in React, TypeScript, and modern UI libraries, I've developed help desk systems and material management applications that streamline workflows and enhance user experience.
                  </p>
                  <p className="text-lg">
                    My approach combines clean code principles with user-centered design to create frontend solutions that are both functional and visually appealing.
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-primary/20">
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Redux', 'Frontend Architecture'].map((tag, index) => (
                        <span key={index} className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Transition>
              
              <Transition delay={400} animationType="rotate-in" className="order-1 lg:order-2">
                <div className="glass-panel overflow-hidden rounded-lg relative group shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-background/70 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2 z-10">
                    <Code size={14} />
                    <span>Frontend Developer</span>
                  </div>
                  
                  <img 
                    src="me3.png" 
                    alt="Samson - Frontend Developer" 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#fff033] backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="font-bold text-xl mb-2">Samson</h4>
                    <p className="text-base">
                      Frontend specialist with expertise in enterprise applications
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="inline-block px-2 py-1 text-xs rounded bg-primary/20 text-primary">React</span>
                      <span className="inline-block px-2 py-1 text-xs rounded bg-primary/20 text-primary">TypeScript</span>
                      <span className="inline-block px-2 py-1 text-xs rounded bg-primary/20 text-primary">UX/UI</span>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
