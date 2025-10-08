
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { type Project } from '@/lib/projects';
import { Badge } from '@/components/ui/badge';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const titleVariants = {
  hidden: { y: 0 },
  visible: { y: -10, transition: { duration: 0.3, ease: 'easeOut' } },
};


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
      className="group"
    >
      <Card className="aspect-square bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg shadow-primary/5 overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 relative">
        <Image
          src={project.image.imageUrl}
          alt={project.image.description}
          data-ai-hint={project.image.imageHint}
          fill
          className="object-cover transition-transform duration-300"
        />
        
        {/* Static Title visible by default */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <motion.div variants={titleVariants} animate="hidden" whileHover="visible" >
            <CardTitle className="font-headline text-lg text-primary">{project.title}</CardTitle>
          </motion.div>
        </div>

        {/* Hover Content */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-end"
          variants={overlayVariants}
          initial="hidden"
          whileHover="visible"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent"></div>
          <motion.div
            className="relative p-4"
            variants={contentVariants}
          >
            <CardTitle className="font-headline text-lg text-primary">{project.title}</CardTitle>
            <p className="text-muted-foreground text-xs my-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
              ))}
            </div>

            <div className="flex justify-end gap-1">
              <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              {project.liveDemoUrl && (
                <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                  <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
