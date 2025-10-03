'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const KineticSphere = () => {
  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
      <motion.div
        className="relative h-[400px] w-[400px] md:h-[600px] md:w-[600px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-0 h-full w-full rounded-full border border-primary/20"
            style={{ rotate: i * 45 }}
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.2, ease: 'easeOut' }}
          />
        ))}
      </motion.div>
    </div>
  );
};


export default function HeroSection() {
  const heroBg = PlaceHolderImages.find(p => p.id === 'hero-background');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {heroBg && <Image src={heroBg.imageUrl} alt={heroBg.description} data-ai-hint={heroBg.imageHint} fill className="object-cover opacity-10" />}
      <KineticSphere />
      <div className="container mx-auto flex h-screen flex-col items-center justify-center text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center"
        >
          <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-glow animate-glow bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Kinetic Folio
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            BSc in Computer Science, Karatina University
          </motion.p>
          <motion.h2 variants={itemVariants} className="mt-4 max-w-3xl font-headline text-2xl font-semibold md:text-3xl">
            Competent Full-Stack Developer | AI Enthusiast | Problem Solver
          </motion.h2>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a href="/portfolio.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Portfolio
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/recommendation-letter.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Recommendation Letter
              </a>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <Button asChild variant="ghost" className="text-accent hover:text-accent-foreground">
              <a href="#about">
                Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
