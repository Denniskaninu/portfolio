
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Github, Linkedin, Twitter, Mail, Loader2 } from 'lucide-react';
import { developerData } from '@/lib/developer-data';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Twitter: Twitter,
} as const;

const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <section id={id} className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

// This is the Google Apps Script URL.
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0cd3e_7Q6I_HuSKpDXcNjrOX3K3fmNeTAYspZP1uEnRP1hKhBsJTz7_O7E4_0XR8/exec';

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        mode: 'no-cors' 
      });

      toast({
        title: 'Message Sent!',
        description: "Thank you for your message! I'll get back to you soon.",
      });
      form.reset();

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        variant: 'destructive',
        title: 'Oops! Something went wrong.',
        description: 'Sorry, there was an error sending your message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <SectionWrapper id="contact">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-glow text-gradient">Get In Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">I'm open to new opportunities and collaborations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/10">
                    <CardHeader>
                        <CardTitle>Contact Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="your@email.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subject</FormLabel>
                                            <FormControl>
                                                <Input placeholder="What is this about?" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Your message..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" disabled={isSubmitting} className="w-full">
                                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </motion.div>
             <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-6">
                <h3 className="text-2xl font-bold font-headline">Find me on Social Media</h3>
                <p className="text-muted-foreground">
                    Connect with me through my social channels. I'm always happy to chat about technology, AI, or potential projects.
                </p>
                <div className="flex flex-wrap gap-4">
                    {developerData.socials.map((social) => {
                      const Icon = socialIcons[social.name as keyof typeof socialIcons];
                      return (
                        <Button key={social.name} variant="outline" size="icon" asChild className="h-14 w-14 rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                            <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                {Icon && <Icon className="h-6 w-6" />}
                            </a>
                        </Button>
                      )
                    })}
                    <Button key="Email" variant="outline" size="icon" asChild className="h-14 w-14 rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                        <a href={`mailto:${developerData.contact.email}`} aria-label="Email">
                            <Mail className="h-6 w-6" />
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    </SectionWrapper>
  );
}
