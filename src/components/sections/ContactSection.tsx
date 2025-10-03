'use client';

import { useEffect } from 'react';
import { useActionState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormStatus } from 'react-dom';
import { motion } from 'framer-motion';

import { submitContactForm, type FormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Github, Linkedin, Twitter, Mail, Loader2 } from 'lucide-react';


const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const socialLinks = [
  { icon: Github, href: 'https://github.com', name: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', name: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', name: 'Twitter' },
  { icon: Mail, href: 'mailto:developer@example.com', name: 'Email' },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
    </Button>
  );
}

const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <section id={id} className="py-20 sm:py-32">
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};

export default function ContactSection() {
  const { toast } = useToast();
  const initialState: FormState = { message: '', success: false };
  const [state, formAction] = useActionState(submitContactForm, initialState);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Message Sent!',
          description: state.message,
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: 'Oops!',
          description: state.message,
        });
      }
    }
    if (state.errors) {
      // Set form errors manually for react-hook-form to display
      if (state.errors.name) form.setError('name', { type: 'server', message: state.errors.name[0] });
      if (state.errors.email) form.setError('email', { type: 'server', message: state.errors.email[0] });
      if (state.errors.message) form.setError('message', { type: 'server', message: state.errors.message[0] });
    }
  }, [state, toast, form]);

  return (
    <SectionWrapper id="contact">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-glow">Get In Touch</h2>
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
                            <form action={formAction} className="space-y-6">
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
                                <SubmitButton />
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
                    {socialLinks.map((link) => (
                        <Button key={link.name} variant="outline" size="icon" asChild className="h-14 w-14 rounded-full transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30">
                            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                                <link.icon className="h-6 w-6" />
                            </a>
                        </Button>
                    ))}
                </div>
            </motion.div>
        </div>
    </SectionWrapper>
  );
}
