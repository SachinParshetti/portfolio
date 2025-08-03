
'use client';

import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-gradient">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A passionate developer with a knack for creating engaging user experiences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <div className="flex justify-center">
            <Tilt
              className="parallax-effect-glare-scale rounded-full"
              perspective={500}
              glareEnable={false}
              scale={1.05}
              gyroscope={true}
              style={{
                borderRadius: '9999px',
              }}
            >
              <Image
                alt="About Me"
                className="rounded-full object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px] relative"
                height="300"
                width="300"
                src="/images/profile-pic.jpeg"
                data-ai-hint="developer portrait"
                style={{
                  boxShadow: '0 0 10px 2px #f0abfc, 0 0 15px 5px #93c5fd, 0 0 20px 8px #6ee7b7',
                }}
              />
            </Tilt>
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-4 sm:text-center">
          <p className="text-muted-foreground">
  I'm a dedicated full-stack web developer with hands-on experience in building scalable and user-centric applications using modern technologies such as React, Next.js, Node.js, MongoDB, and Tailwind CSS. My development approach focuses on performance, usability, and clean architecture.
</p>
<p className="text-muted-foreground">
  I've developed a range of projects, including video streaming platforms, task management systems, contact management dashboards, and personalized portfolios with integrated admin panels and authentication. I consistently focus on delivering real-world functionality with professional UI/UX.
</p>
<p className="text-muted-foreground">
  Currently seeking full-time opportunities where I can contribute to impactful products, grow as a developer, and work alongside experienced teams in a collaborative environment.
</p>


          </div>
        </div>
      </div>
    </section>
  );
}
