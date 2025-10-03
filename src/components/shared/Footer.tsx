'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { icon: Github, href: 'https://github.com', name: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', name: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', name: 'Twitter' },
  { icon: Mail, href: 'mailto:developer@example.com', name: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-lg border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold font-headline text-glow">My Portfolio</h3>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary">
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
