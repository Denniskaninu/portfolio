
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { developerData } from '@/lib/developer-data';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Downloads', href: '#downloads' },
  { name: 'Contact', href: '#contact' },
];

const mobileMenuVariants = {
  hidden: {
    x: '-100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
    },
  },
};

const navLinksContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navLinkItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'py-2 bg-background/80 backdrop-blur-lg border-b border-border' : 'py-4'
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="#home" onClick={handleLinkClick} className="text-xl font-bold font-headline text-glow text-gradient transition-all hover:text-primary">
            {developerData.name}
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </a>
              </Button>
            ))}
             <ThemeToggle />
          </nav>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm md:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 h-full w-4/5 max-w-sm z-[101] bg-background shadow-2xl md:hidden"
            >
              <div className="container mx-auto px-4 pt-4 flex justify-between items-center">
                  <Link href="#home" onClick={handleLinkClick} className="text-xl font-bold font-headline text-glow text-gradient">
                      {developerData.name}
                  </Link>
                  <Button onClick={toggleMenu} variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                  </Button>
              </div>
              <motion.nav 
                variants={navLinksContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center h-full gap-8 -mt-12"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    variants={navLinkItemVariants}
                    className="text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
