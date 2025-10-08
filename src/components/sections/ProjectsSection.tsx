import { projects } from '@/lib/projects';
import ProjectCard from '@/components/shared/ProjectCard';

const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <section id={id} className="py-20 sm:py-32 bg-background/80">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-glow text-gradient">My Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A selection of my recent work showcasing my skills in full-stack development and AI integration.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
