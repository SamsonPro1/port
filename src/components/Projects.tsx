
import React from 'react';
import ProjectCard from './ProjectCard';
import Transition from './Transition';
import { Headphones, Package, Users, BarChart } from 'lucide-react';

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  icon?: React.ReactNode;
};

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      id: 1,
      title: "Help Desk System",
      description: "A responsive frontend for a help desk application with real-time ticket tracking, knowledge base integration, and intuitive user interface for support agents.",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2189&q=80",
      tags: ["React", "TypeScript", "Material UI", "Redux", "WebSockets"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/username/repo",
      icon: <Headphones size={20} />
    },
    {
      id: 2,
      title: "Material Management System",
      description: "A comprehensive frontend for inventory tracking with barcode scanning integration, stock management, and advanced filtering capabilities for warehouse operations.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Context API", "Chart.js"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/username/repo",
      icon: <Package size={20} />
    },
    {
      id: 3,
      title: "Employee Portal",
      description: "A modern frontend interface for employee self-service, featuring profile management, time tracking, and document submission with a responsive design for all devices.",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2332&q=80",
      tags: ["React", "TypeScript", "Styled Components", "Formik", "React Query"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/username/repo",
      icon: <Users size={20} />
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "A data visualization frontend featuring interactive charts, filterable reports, and customizable widgets for monitoring business KPIs with dark/light theme support.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      tags: ["React", "TypeScript", "Recharts", "TanStack Query", "Tailwind CSS"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/username/repo",
      icon: <BarChart size={20} />
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="section-container">
        <Transition animationType="slide-up">
          <div className="text-center mb-12">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">Frontend solutions I've developed</p>
          </div>
        </Transition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Transition 
              key={project.id}
              delay={index * 100}
              animationType="slide-up"
              className="h-full"
            >
              <ProjectCard
                key={index}
                project={project}
                className={`h-full card-hover ${index % 2 === 0 ? 'md:mt-8' : 'md:mb-8'}`}
              />
            </Transition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
