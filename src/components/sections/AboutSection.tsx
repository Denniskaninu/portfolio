import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Server, Code, Database, Cloud, Terminal, TestTube, Lock } from 'lucide-react';
import { ReactIcon, NextjsIcon, TailwindCssIcon, Html5Icon, PythonIcon, NodeIcon, PostgreSqlIcon, MySqlIcon, MongoDbIcon, FirebaseIcon, DockerIcon, KubernetesIcon, AwsIcon, GitIcon, TypescriptIcon, JavascriptIcon, GoIcon, RedisIcon, GraphqlIcon, SupabaseIcon, ExpressIcon, DjangoIcon, FastApiIcon } from '@/components/shared/TechIcons';

const skillCategories = [
  {
    category: 'Frontend',
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextjsIcon /> },
      { name: "TypeScript", icon: <TypescriptIcon /> },
      { name: "JavaScript (ES6+)", icon: <JavascriptIcon /> },
      { name: "TailwindCSS", icon: <TailwindCssIcon /> },
      { name: "HTML5", icon: <Html5Icon /> },
    ],
  },
  {
    category: 'Backend',
    icon: <Server className="h-5 w-5" />,
    skills: [
        { name: "Node.js", icon: <NodeIcon /> },
        { name: "Express.js", icon: <ExpressIcon /> },
        { name: "Python", icon: <PythonIcon /> },
        { name: "Django", icon: <DjangoIcon /> },
        { name: "FastAPI", icon: <FastApiIcon /> },
        { name: "GraphQL", icon: <GraphqlIcon /> },
    ],
  },
  {
    category: 'Databases',
    icon: <Database className="h-5 w-5" />,
    skills: [
        { name: "PostgreSQL", icon: <PostgreSqlIcon /> },
        { name: "MySQL", icon: <MySqlIcon /> },
        { name: "MongoDB", icon: <MongoDbIcon /> },
        { name: "Firebase", icon: <FirebaseIcon /> },
        { name: "Supabase", icon: <SupabaseIcon /> },
        { name: "Redis", icon: <RedisIcon /> },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      { name: "Docker", icon: <DockerIcon /> },
      { name: "Kubernetes", icon: <KubernetesIcon /> },
      { name: "AWS", icon: <AwsIcon /> },
      { name: "GitHub Actions", icon: <GitIcon /> },
    ],
  },
  {
    category: 'Developer Tools',
    icon: <Terminal className="h-5 w-5" />,
    skills: [
      { name: "Git & GitHub", icon: <GitIcon /> },
      { name: "Webpack", icon: <Code className="h-5 w-5" /> },
      { name: "Babel", icon: <Code className="h-5 w-5" /> },
    ],
  },
  {
    category: 'Testing',
    icon: <TestTube className="h-5 w-5" />,
    skills: [
      { name: "Pytest", icon: <PythonIcon /> },
      { name: "Jest", icon: <JavascriptIcon /> },
      { name: "Cypress", icon: <Code className="h-5 w-5" /> },
    ],
  },
    {
    category: 'Other Skills',
    icon: <Lock className="h-5 w-5" />,
    skills: [
        { name: "System Design"},
        { name: "AI Integration"},
        { name: "REST APIs"},
        { name: "Microservices"},
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
        <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl text-gradient dark:text-glow">About Me</h2>
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
        </div>

        <div className="lg:col-span-3">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <span className="text-primary">🛠</span>
                        Technical Skills
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="Frontend" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 h-auto">
                            {skillCategories.map((category) => (
                                <TabsTrigger key={category.category} value={category.category} className="flex flex-col sm:flex-row gap-2 items-center">
                                    {category.icon}
                                    {category.category}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {skillCategories.map((category) => (
                            <TabsContent key={category.category} value={category.category}>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-3 bg-secondary/30 p-3 rounded-lg border border-transparent hover:border-primary/50 hover:bg-secondary/70 transition-all cursor-pointer">
                                        {skill.icon && <div className="h-6 w-6 flex items-center justify-center">{skill.icon}</div>}
                                        <span className="font-medium text-sm">{skill.name}</span>
                                    </div>
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
