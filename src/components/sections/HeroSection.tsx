
'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { developerData } from '@/lib/developer-data';
import ComputersCanvas from '../canvas/Computers';

export default function HeroSection() {
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
    <section id="home" className="relative h-screen w-full mx-auto flex items-center justify-center">
      <div className="container mx-auto flex h-full flex-col items-center justify-center text-center px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center"
        >
          <motion.h1 variants={itemVariants} className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-gradient">
              {developerData.title}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-3xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
            With expertise in full-stack development, cloud integration, and AI-driven solutions, passionate about building efficient, user-focused applications.
          </motion.p>
          
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <a href="/assets/denniskaninuresume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download Portfolio
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="/assets/denniskaninurecomedatio.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Recommendation Letter
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 h-full w-full">
        <ComputersCanvas />
      </div>

       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
}
