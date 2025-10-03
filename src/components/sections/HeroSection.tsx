'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useRef, Suspense } from 'react';
import type { Points as PointsType } from 'three';

const Stars = (props: any) => {
  const ref = useRef<PointsType>();
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto absolute inset-0 z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  </div>
);


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
    <section id="home" className="relative h-screen w-full mx-auto">
      <StarsCanvas />
      <div className="container mx-auto flex h-full flex-col items-center justify-center text-center px-4">
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
            <Button asChild size="lg" variant="secondary">
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
