'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [

   {
    title: 'PlayBuddy(Video Library App)',
   description: 'A full-featured video library app using React, Redux, and Tailwind CSS. Includes user-facing features like playlists and watch later, along with a dedicated admin panel for video management and user monitoring.',
    image: '/images/playbuddy.png',
    liveUrl: 'https://playbuddys.netlify.app',
    githubUrl: 'https://github.com/SachinParshetti/PlayBuddy.git',
    
  },
  {
    title: 'Contact App',
    description: 'A full-stack contact management app using React, Node.js, Express, and MongoDB. Includes contact management, a modern UI built with Tailwind CSS.',
    image: '/images/contactManager.png',
    liveUrl: 'https://contactmanagerapps.netlify.app',
    githubUrl: 'https://github.com/SachinParshetti/contact-app.git',

  },
  {
    title: 'Task Master (Task Management App)',
    description: 'A task manager built using React, Node.js, Express, and MongoDB with JWT-based cookie authentication. Offers secure login, task creation, editing, and deletion, all within a modern and responsive interface.',
    image: '/images/taskManager.png',
    liveUrl: 'https://taskmanagersapp.netlify.app/',
    githubUrl: 'https://github.com/SachinParshetti/Task-master.git',

  },
 
  {
    title: 'Portfolio Website',
    description:'A modern personal portfolio website designed to showcase my skills, projects, and development journey. Built using Next.js, React, Tailwind CSS, Framer Motion, and Recharts, this portfolio features smooth animations, interactive charts, and a responsive design',
    image: '/images/portfolio.png',
    liveUrl: 'https://sachin-parshetti.vercel.app',
    githubUrl: 'https://github.com/SachinParshetti/portfolio.git',

  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-gradient">My Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud of.
            </p>
          </div>
        </div>
        <motion.div 
          className="mx-auto grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="pt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    alt={project.title}
                    className="mx-auto aspect-video overflow-hidden rounded-lg object-cover"
                    height="310"
                    src={project.image}
                    width="550"
                   
                  />
                </CardContent>
                <CardFooter className="flex justify-between mt-auto">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="btn-gradient">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
