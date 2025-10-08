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
    id: 'project-chama-sync',
    title: 'ChamaSmart Sync',
    description: 'A scalable and secure platform using Google AI and Genkit to validate and automate financial transactions, built with a modern tech stack for developer productivity.',
    techStack: ['Next.js', 'Firebase', 'Google AI', 'Genkit', 'TypeScript', 'Zod'],
    githubUrl: 'https://github.com/Denniskaninu/chama-smart-sync.git',
    liveDemoUrl: 'https://chama-smart-ke-snyc-ke.netlify.app/',
    image: findImage('chama-sync'),
  },
  {
    id: 'kenyan-tech-jobs-finder',
    title: 'AI-Powered Kenyan Tech Jobs Finder',
    description: 'A next-generation platform designed to help Kenyan developers and tech professionals discover verified job opportunities locally and abroad. It leverages generative AI (Google Gemini via Genkit) for intelligent job matching, resume insights, and personalized career recommendations. Built for speed, scalability, and a delightful user experience.',
    techStack: ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Genkit (Google Gemini)'],
    githubUrl: 'https://github.com/Denniskaninu/smart-dev-kenya-jobs-finder.git',
    liveDemoUrl: 'https://kenya-dev-smart-jobs-finder.netlify.app',
    image: findImage('kenyan-tech-jobs-finder'),

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
