import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image: ImagePlaceholder;
};

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find(img => img.id === id);
  if (!image) {
    throw new Error(`Placeholder image with id "${id}" not found.`);
  }
  return image;
};

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'AI-Powered E-commerce Platform',
    description: 'A cutting-edge e-commerce platform that uses AI for personalized recommendations and dynamic pricing. Built with a microservices architecture.',
    techStack: ['Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'AI/ML'],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#',
    image: findImage('project-alpha'),
  },
  {
    id: 'project-2',
    title: 'Real-time Collaborative Whiteboard',
    description: 'A web application that allows multiple users to collaborate on a whiteboard in real-time, featuring drawing tools, text, and shape support.',
    techStack: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#',
    image: findImage('project-beta'),
  },
  {
    id: 'project-3',
    title: 'Mobile Fitness Tracker',
    description: 'A cross-platform mobile app to track workouts, set goals, and visualize progress. Built with a focus on performance and user experience.',
    techStack: ['Flutter', 'Firebase', 'Dart', 'Mobile Dev'],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#',
    image: findImage('project-gamma'),
  },
  {
    id: 'project-4',
    title: 'Cloud-Native DevOps Pipeline',
    description: 'A fully automated CI/CD pipeline for deploying containerized applications to the cloud, ensuring high availability and scalability.',
    techStack: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Django'],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#',
    image: findImage('project-delta'),
  },
];
