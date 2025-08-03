'use client';

import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { About } from '@/components/about';
import { Blog } from '@/components/blog';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { AnimatedSection } from '@/components/animated-section';
import { ParticleBackground } from '@/components/particle-background';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] relative">
      <ParticleBackground />
      <div className="z-10 relative">
        <Header />
        <main className="flex-1">
          <Hero />
          <AnimatedSection>
            <Projects />
          </AnimatedSection>
          <AnimatedSection>
            <Skills />
          </AnimatedSection>
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <Blog />
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  );
}
