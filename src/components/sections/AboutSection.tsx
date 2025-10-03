import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Code, BrainCircuit, Cloud, Cpu } from 'lucide-react';
import { getInDemandSkills } from '@/ai/flows/ai-skill-highlighter';
import AISkills from '../shared/AISkills';

const skillCategories = [
  {
    category: 'Frontend',
    icon: <Code className="h-5 w-5" />,
    skills: ["Next.js", "React", "Tailwind CSS", "Qwik", "HTMX", "Framer Motion"],
  },
  {
    category: 'Backend',
    icon: <Server className="h-5 w-5" />,
    skills: ["Node.js", "Python", "Bun", "GraphQL", "tRPC", "Rust"],
  },
  {
    category: 'Databases',
    icon: <Cpu className="h-5 w-5" />,
    skills: ["PostgreSQL", "MongoDB", "Redis", "VectorDB", "Firebase"],
  },
  {
    category: 'AI & ML',
    icon: <BrainCircuit className="h-5 w-5" />,
    skills: ["Genkit", "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "Firebase GenAI"],
  },
  {
    category: 'DevOps & Cloud',
    icon: <Cloud className="h-5 w-5" />,
    skills: ["Docker", "Kubernetes", "Firebase", "AWS", "Terraform", "CI/CD"],
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
        
        <div className="lg:col-span-1 space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
                <CardContent className="p-4">
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                        <Image
                            src="https://lh3.googleusercontent.com/gg-dl/AJfQ9KThWEf1AwYA17NXo3kf0x204Mc47S2fplpBlU4jg69D1GUL1orsSt61zyyH1QjNo7-iZCxwNoi21NumpS7JK2Qu9m1PaVrdT9bHEvj0QS2C90QGKVVOvxk4ScMUZsTEU236Crc-sv-TRlFYvzpKUALbMujQ4nn3Wn69YVyTrdI8tYz2=s1024"
                            alt="A photo of the developer"
                            fill
                            className="object-cover"
                        />
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
        </div>

        <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle>Technical Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I am a results-oriented Full-Stack Developer with a passion for building innovative solutions and a strong interest in Artificial Intelligence. With a solid foundation in computer science and hands-on experience with modern web and mobile technologies, I excel at turning complex problems into elegant, high-performance applications. I thrive in collaborative environments and am committed to continuous learning to stay at the forefront of the ever-evolving tech landscape in Kenya and beyond.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle>AI-Powered Skill Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Using GenAI, here are the top skills currently trending in the Kenyan tech job market.
                </p>
                <AISkills />
              </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-3">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
                <CardHeader>
                    <CardTitle>Technical Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="Frontend" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
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
                                    <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 border border-transparent hover:border-primary transition-all cursor-pointer">
                                        {skill}
                                    </Badge>
                                ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </CardContent>
            </Card>
        </div>

      </div>
    </SectionWrapper>
  );
}
