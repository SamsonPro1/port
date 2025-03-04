
import { Check, Code, Database, Globe, Layout, Repeat, Settings, Server, Smartphone } from 'lucide-react';
import Transition from './Transition';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-primary/80" />,
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5/CSS3", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary/80" />,
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "Microservices"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6 text-primary/80" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Prisma ORM", "SQL"],
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="h-6 w-6 text-primary/80" />,
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Cypress", "Webpack"],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6 text-primary/80" />,
      skills: ["React Native", "Flutter", "Swift", "Mobile UI/UX", "App Performance", "App Store Deployment"],
    },
    {
      title: "Other Skills",
      icon: <Code className="h-6 w-6 text-primary/80" />,
      skills: ["Agile Methodologies", "UI/UX Design", "Problem Solving", "System Architecture", "Software Testing"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary/5 relative">
      <div className="section-container">
        <Transition animationType="slide-up">
          <div className="text-center mb-16">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technologies and tools I work with</p>
          </div>
        </Transition>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Transition 
              key={category.title}
              delay={index * 100}
              animationType="scale-in"
            >
              <div className="glass-panel p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-primary/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary/70 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
