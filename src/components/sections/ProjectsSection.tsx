
'use client';
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/shared/ProjectCard';

const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <motion.section 
            id={id} 
            className="py-16 sm:py-24 bg-background/80"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4">
                {children}
            </div>
        </motion.section>
    );
};

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-glow text-gradient">My Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A selection of my recent work showcasing my skills in full-stack development and AI integration.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
