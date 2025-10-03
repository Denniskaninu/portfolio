
'use client';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { developerData } from '@/lib/developer-data';

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
} as const;


export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-lg border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold font-headline text-glow text-gradient">{developerData.name}'s Portfolio</h3>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {developerData.socials.map((social) => {
              const Icon = socialIcons[social.name as keyof typeof socialIcons];
              return (
                <Button key={social.name} variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary">
                  <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                </Button>
              )
            })}
             <Button key="Email" variant="ghost" size="icon" asChild className="h-10 w-10 rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary">
                <a href={`mailto:${developerData.contact.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
