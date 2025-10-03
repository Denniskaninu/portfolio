import { getInDemandSkills } from '@/ai/flows/ai-skill-highlighter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Server, Code, BrainCircuit, Bot, Database, Smartphone, Cloud, Wind } from 'lucide-react';

const HARDCODED_SKILLS = [
  'Next.js', 'React', 'Node.js', 'Python', 'Django', 'TailwindCSS', 
  'Docker', 'Cloud', 'AI/ML', 'Flutter', 'Mobile Dev', 'PostgreSQL', 'MongoDB'
];

const skillIcons: { [key: string]: React.ReactNode } = {
  'next.js': <Server />,
  'react': <Code />,
  'node.js': <Server />,
  'python': <Code />,
  'django': <Server />,
  'tailwindcss': <Wind />,
  'docker': <Bot />,
  'cloud': <Cloud />,
  'ai/ml': <BrainCircuit />,
  'flutter': <Smartphone />,
  'mobile dev': <Smartphone />,
  'postgresql': <Database />,
  'mongodb': <Database />,
};

const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <section id={id} className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

export default async function AboutSection() {
  let inDemandSkills: string[] = [];
  try {
    const { skills } = await getInDemandSkills();
    inDemandSkills = skills;
  } catch (error) {
    console.error("AI Skill Highlighter failed:", error);
    // Fallback to hardcoded skills if AI fails
    inDemandSkills = [];
  }

  const allSkills = [...new Set([...inDemandSkills.slice(0, 10), ...HARDCODED_SKILLS])];

  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl text-glow">About Me</h2>
        <p className="mt-4 text-lg text-muted-foreground">A brief introduction to my skills and background.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {allSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 border border-transparent hover:border-primary transition-all cursor-pointer flex items-center gap-2">
                  {skillIcons[skill.toLowerCase()] || <Code />}
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold text-primary">BSc in Computer Science</h3>
            <p className="text-muted-foreground">Karatina University</p>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
          <CardHeader>
            <CardTitle>Technical Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              I am a results-oriented Full-Stack Developer with a passion for building innovative solutions and a strong interest in Artificial Intelligence. With a solid foundation in computer science and hands-on experience with modern web and mobile technologies, I excel at turning complex problems into elegant, high-performance applications. I thrive in collaborative environments and am committed to continuous learning to stay at the forefront of the ever-evolving tech landscape in Kenya and beyond.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
