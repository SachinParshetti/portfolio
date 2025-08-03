'use client';

import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Container, Engine, ISourceOptions } from 'tsparticles-engine';
import { useTheme } from 'next-themes';

export function ParticleBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = async (container?: Container) => {
    // You can log or manipulate container if needed
  };

  const particleOptions: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: 'gray',
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#9D4EDD'],
        },
        links: {
          enable: true,
          color: theme === 'dark' ? '#ffffff' : '#333333',
          distance: 150,
          opacity: 0.2,
        },
        move: {
          enable: true,
          speed: 1.5,
        },
        number: {
          value: 60,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 2, max: 4 },
        },
        opacity: {
          value: 0.8,
        },
      },
      
      detectRetina: true,
    }),
    [theme]
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      particlesLoaded={particlesLoaded}
      options={particleOptions}
      className="absolute inset-0 -z-10"
    />
  );
}
