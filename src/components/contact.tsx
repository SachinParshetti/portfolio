
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import { sendMessage } from '@/flows/send-message';
import { SendMessageInputSchema } from '@/schemas/send-message-schema';
import type { SendMessageInput } from '@/schemas/send-message-schema';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
  BookUser
} from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function Contact() {
  const form = useForm<SendMessageInput>({
    resolver: zodResolver(SendMessageInputSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(data: SendMessageInput) {
    try {
      const result = await sendMessage(data);
       if (result.success) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. I will get back to you shortly.',
        });
        form.reset();
       } else {
         throw new Error(result.message);
       }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: error.message || 'There was a problem with your request. Please try again.',
      });
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container grid items-start gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        {/* Left Column: Let's Connect */}
        <div className="flex flex-col space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gradient">
              Let's Connect
            </h2>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations, job opportunities, or just to say hello!
            </p>
          </div>
         <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="icon-container-gradient bg-primary/10 dark:bg-primary/20 p-3 rounded-full transition-all duration-300">
                <MapPin className="h-6 w-6 text-primary icon-target transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-muted-foreground">1-4-551/17 Ashok Nagar Musheerabad, Hyderabad 50020</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-container-gradient bg-primary/10 dark:bg-primary/20 p-3 rounded-full transition-all duration-300">
                <Phone className="h-6 w-6 text-primary icon-target transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-muted-foreground">+91 7019390002</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-container-gradient bg-primary/10 dark:bg-primary/20 p-3 rounded-full transition-all duration-300">
                <Mail className="h-6 w-6 text-primary icon-target transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <a href="mailto:sachinparshettisp@gmail.com" className="text-muted-foreground hover:underline">
                  sachinparshettisp@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-container-gradient bg-primary/10 dark:bg-primary/20 p-3 rounded-full transition-all duration-300">
                <Linkedin className="h-6 w-6 text-primary icon-target transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/sachin-parashetti-99b255259" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:underline">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Send Me a Message */}
        <div className="w-full">
          <Card className="p-6 md:p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline">Send Me a Message</CardTitle>
            </CardHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="Enter Your Name" {...field} className="pl-10" />
                            </div>
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
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="Enter Your Email" {...field} className="pl-10" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                   <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem className="mt-6">
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <BookUser className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                              <Input placeholder="How can I help you?" {...field} className="pl-10" />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Textarea placeholder="Your message here..." {...field} className="min-h-[150px] pl-10 pt-3" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter className="p-0">
                  <Button type="submit" className="w-full btn-gradient transition-transform duration-300 ease-in-out hover:scale-105" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Sending...' : <> <Send className="mr-2 h-5 w-5" /> Send Message</>}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </section>
  );
}
