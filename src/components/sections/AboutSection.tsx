import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Code, BrainCircuit, Bot, Database, Smartphone, Cloud, Wind, Zap, Send, Move, Rabbit, Webhook, Cpu } from 'lucide-react';

const skillCategories = [
  {
    category: 'Frontend',
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: 'Next.js', icon: <Server /> },
      { name: 'React', icon: <Code /> },
      { name: 'Tailwind CSS', icon: <Wind /> },
      { name: 'Qwik', icon: <Zap /> },
      { name: 'HTMX', icon: <Send /> },
      { name: 'Framer Motion', icon: <Move /> },
    ],
  },
  {
    category: 'Backend',
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: 'Node.js', icon: <Server /> },
      { name: 'Python', icon: <Code /> },
      { name: 'Bun', icon: <Rabbit /> },
      { name: 'GraphQL', icon: <Webhook /> },
      { name: 'PostgreSQL', icon: <Database /> },
      { name: 'MongoDB', icon: <Database /> },
    ],
  },
  {
    category: 'AI & ML',
    icon: <BrainCircuit className="h-5 w-5" />,
    skills: [
      { name: 'Genkit', icon: <Cpu /> },
      { name: 'TensorFlow', icon: <BrainCircuit /> },
      { name: 'PyTorch', icon: <Bot /> },
      { name: 'Scikit-learn', icon: <Cpu /> },
      { name: 'LangChain', icon: <Send /> },
      { name: 'Firebase GenAI', icon: <Cpu /> },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: 'Docker', icon: <Bot /> },
      { name: 'Kubernetes', icon: <Cpu /> },
      { name: 'Firebase', icon: <Cloud /> },
      { name: 'AWS', icon: <Cloud /> },
      { name: 'Terraform', icon: <Server /> },
      { name: 'CI/CD', icon: <Send /> },
    ],
  },
];


const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <section id={id} className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl text-glow">About Me</h2>
        <p className="mt-4 text-lg text-muted-foreground">A brief introduction to my skills and background.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
                <CardHeader>
                    <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="Frontend" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
                            {skillCategories.map((category) => (
                                <TabsTrigger key={category.category} value={category.category} className="flex flex-col sm:flex-row gap-2 items-center">
                                    {category.icon}
                                    {category.category}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {skillCategories.map((category) => (
                            <TabsContent key={category.category} value={category.category}>
                                <div className="flex flex-wrap gap-3 py-4">
                                {category.skills.map((skill) => (
                                    <Badge key={skill.name} variant="secondary" className="text-sm px-4 py-2 border border-transparent hover:border-primary transition-all cursor-pointer flex items-center gap-2">
                                        {skill.icon}
                                        {skill.name}
                                    </Badge>
                                ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </CardContent>
            </Card>
        </div>


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
