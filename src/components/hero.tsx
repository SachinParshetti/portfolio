'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TiltProfileImage } from '@/components/tilt-profile-image';
import { Download } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useState } from 'react';


export function Hero() {

  const [showCursor, setShowCursor] = useState(true);
  return (
    <section id="home" className="w-full py-24 md:py-32 lg:py-40 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          <div className="flex justify-center order-1 lg:order-2">
             <TiltProfileImage />
          </div>
          <motion.div 
            className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left space-y-4 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none font-headline text-gradient">
                Sachin Parashetti
              </h1>
              <div className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-primary h-12">
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    2000,
                    "Full Stack Frontend Developer",
                    2000,

                  ]}
                  wrapper="h2"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                I build beautiful, responsive, and performant web applications, blending design with robust functionality.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#projects">
                <Button className="w-full sm:w-auto transition-transform duration-300 ease-in-out hover:scale-110 btn-gradient">View Projects</Button>
              </Link>
              <Link href="#contact">
                <Button variant="secondary" className="w-full sm:w-auto transition-transform duration-300 ease-in-out hover:scale-110">Contact Me</Button>
              </Link>
              <a href="/Sachin_Parashetti_Resume.pdf" download="Sachin-Parashetti-Resume.pdf" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto transition-transform duration-300 ease-in-out hover:scale-110">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}