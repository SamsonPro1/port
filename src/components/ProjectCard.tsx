
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  demoLink?: string;
  codeLink?: string;
  featured?: boolean;
  icon?: React.ReactNode;
}

interface ProjectCardProps {
  project: ProjectProps;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <div 
      className={cn(
        "glass-panel overflow-hidden card-hover",
        project.featured ? "col-span-2 md:col-span-2" : "col-span-2 md:col-span-1",
        className
      )}
    >
      <div className="h-52 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        
        {project.icon && (
          <div className="absolute top-4 right-4 bg-background/70 backdrop-blur-sm p-2 rounded-full">
            {project.icon}
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/80 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex items-center space-x-4">
          {(project.githubUrl || project.codeLink) && (
            <a 
              href={project.githubUrl || project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <Github size={16} /> Code
            </a>
          )}
          
          {(project.liveUrl || project.demoLink) && (
            <a 
              href={project.liveUrl || project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
