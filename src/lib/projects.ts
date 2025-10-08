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
    description: 'A scalable and secure platform using Google AI to validate and automate financial transactions.',
    techStack: ['Next.js', 'Firebase', 'Google AI', 'Genkit'],
    githubUrl: 'https://github.com/Denniskaninu/chama-smart-sync.git',
    liveDemoUrl: 'https://chama-smart-snyc-ke.netlify.app/',
    image: findImage('chama-sync'),
  },
  {
    id: 'kenyan-tech-jobs-finder',
    title: 'AI Tech Jobs Finder',
    description: 'An AI-powered platform for Kenyan developers to find verified job opportunities locally and abroad.',
    techStack: ['Next.js', 'TypeScript', 'Genkit'],
    githubUrl: 'https://github.com/Denniskaninu/smart-dev-kenya-jobs-finder.git',
    liveDemoUrl: 'https://kenya-dev-smart-jobs-finder.netlify.app',
    image: findImage('kenyan-tech-jobs-finder'),

  },
  {
    id: 'project-2',
    title: 'Real-time Whiteboard',
    description: 'A web app that allows multiple users to collaborate on a whiteboard in real-time.',
    techStack: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#',
    image: findImage('project-beta'),
  },
  {
    id: 'project-3',
    title: 'Mobile Fitness Tracker',
    description: 'A cross-platform mobile app to track workouts, set goals, and visualize progress.',
    techStack: ['Flutter', 'Firebase', 'Dart', 'Mobile Dev'],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#',
    image: findImage('project-gamma'),
  },
  {
    id: 'project-4',
    title: 'Cloud-Native CI/CD Pipeline',
    description: 'A fully automated CI/CD pipeline for deploying containerized applications to the cloud.',
    techStack: ['Docker', 'Kubernetes', 'AWS', 'Django'],
    githubUrl: 'https://github.com',
    liveDemoUrl: '#',
    image: findImage('project-delta'),
  },
];
