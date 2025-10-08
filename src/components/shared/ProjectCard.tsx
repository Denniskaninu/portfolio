'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { type Project } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10, rotate: -1, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full group"
    >
        <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5 overflow-hidden flex flex-col transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={project.image.imageUrl}
              alt={project.image.description}
              data-ai-hint={project.image.imageHint}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
          </div>

          <CardHeader>
            <CardTitle className="font-headline text-primary">{project.title}</CardTitle>
          </CardHeader>
          
          <CardContent className="flex-grow flex flex-col justify-between">
            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex justify-end gap-2 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            {project.liveDemoUrl && (
              <Button variant="ghost" size="icon" asChild>
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
    </motion.div>
  );
}
