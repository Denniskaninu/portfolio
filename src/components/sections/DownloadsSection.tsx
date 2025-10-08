
'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <motion.section 
            id={id} 
            className="py-16 sm:py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4">
                {children}
            </div>
        </motion.section>
    );
};

export default function DownloadsSection() {
  return (
    <SectionWrapper id="downloads">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-gradient">Downloads</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Access my professional documents here.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <a href="/assets/denniskaninuresume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume/Portfolio
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/assets/denniskaninurecomedation.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Recommendation Letter
            </a>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
