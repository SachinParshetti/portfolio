
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  Rocket,
  BrainCircuit,
  TerminalSquare,
  PenTool,
  Cpu
} from 'lucide-react';
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from 'next-themes';


const skillsData = {
  frontend: [
    { name: 'React', level: 90, Icon: Code },
    { name: 'Next.js', level: 85, Icon: Code },
    { name: 'TypeScript', level: 80, Icon: Code },
    { name: 'JavaScript', level: 95, Icon: Code },
    { name: 'HTML5', level: 98, Icon: Code },
    { name: 'CSS3', level: 95, Icon: Code },
    { name: 'Tailwind', level: 92, Icon: PenTool },
    { name: 'Redux', level: 80, Icon: BrainCircuit },
    { name: 'jQuery', level: 85, Icon: Code },
    { name: 'Bootstrap', level: 88, Icon: PenTool },
  ],
  backend: [
    { name: 'Node.js', level: 85, Icon: Server },
    { name: 'Express.js', level: 80, Icon: Server },
    { name: 'Python', level: 70, Icon: Code },
    { name: 'REST APIs', level: 90, Icon: Cpu },
    { name: 'GraphQL', level: 75, Icon: Cpu },
  ],
  databases: [
    { name: 'MongoDB', level: 80, Icon: Database },
    { name: 'PostgreSQL', level: 75, Icon: Database },
    { name: 'MySQL', level: 70, Icon: Database },
    { name: 'Firebase', level: 85, Icon: Database },
  ],
  tools: [
    { name: 'Git', level: 90, Icon: TerminalSquare },
    { name: 'Docker', level: 75, Icon: Rocket },
    { name: 'Webpack', level: 70, Icon: Rocket },
    { name: 'Vercel', level: 85, Icon: Rocket },
    { name: 'Netlify', level: 80, Icon: Rocket },
    { name: 'CI/CD', level: 75, Icon: Rocket },
    { name: 'ImageKit.io', level: 80, Icon: Rocket },
    { name: 'npm', level: 90, Icon: TerminalSquare },
  ],
};

const categoryColors: { [key: string]: string } = {
  frontend: 'hsl(var(--chart-1))',
  backend: 'hsl(var(--chart-2))',
  databases: 'hsl(var(--chart-3))',
  tools: 'hsl(var(--chart-4))',
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="rounded-lg border bg-popover p-2 text-sm text-popover-foreground shadow-md">
        <p className="font-bold">{`${data.name}`}</p>
        <p>{`Proficiency: ${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const SkillChart = ({ data, color, isInView }: { data: { name: string; level: number, Icon: React.ElementType }[], color: string, isInView: boolean }) => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);


  if (!data) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {Array.from({length: 5}).map((_, index) => (
                <div key={index} className="w-[120px] h-[120px] bg-muted/50 rounded-full animate-pulse" />
            ))}
        </div>
    );
  }

  const iconColor = color;
  const trailColor = theme === 'dark' ? '#2c2c2c' : '#ffffff';
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-black';
  const chartStyle = {
    filter: `drop-shadow(0 0 6px ${color})`
  };


  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {data.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={cardVariants}
          custom={index}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.1, zIndex: 10 }}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <TooltipProvider>
            <UITooltip>
              <TooltipTrigger asChild>
                <div className="relative w-[120px] h-[120px]">
                  <ResponsiveContainer>
                    <RadialBarChart
                      innerRadius="80%"
                      outerRadius="100%"
                      barSize={8}
                      data={[{...skill, level: isInView ? skill.level : 0, fill: color }]}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                      />
                      <RadialBar
                        background={{ fill: trailColor }}
                        dataKey="level"
                        cornerRadius={10}
                        angleAxisId={0}
                        style={chartStyle}
                        animationDuration={2000}
                        animationBegin={index * 100}
                      />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsla(var(--muted))' }} />
                    </RadialBarChart>
                  </ResponsiveContainer>
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <skill.Icon className="h-8 w-8" style={{ color: iconColor }} />
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.name}</p>
              </TooltipContent>
            </UITooltip>
          </TooltipProvider>
          <p className={`font-semibold text-center ${isMounted ? textColorClass : 'text-transparent'}`}>{skill.name}</p>
        </motion.div>
      ))}
    </div>
  );
};


export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-gradient">
              My Tech Stack
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my skills and proficiency in various technologies, visualized.
            </p>
          </div>
        </div>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            <TabsTrigger value="frontend">
              <Code className="mr-2" /> Frontend
            </TabsTrigger>
            <TabsTrigger value="backend">
              <Server className="mr-2" /> Backend
            </TabsTrigger>
            <TabsTrigger value="databases">
              <Database className="mr-2" /> Databases
            </TabsTrigger>
            <TabsTrigger value="tools">
              <Rocket className="mr-2" /> DevOps & Tools
            </TabsTrigger>
          </TabsList>

          <div className="py-8">
            <TabsContent value="frontend" key="frontend">
               <Card>
                 <CardContent className="p-6">
                    <SkillChart data={skillsData.frontend} color={categoryColors.frontend} isInView={isInView} />
                 </CardContent>
               </Card>
            </TabsContent>
            <TabsContent value="backend" key="backend">
              <Card>
                 <CardContent className="p-6">
                    <SkillChart data={skillsData.backend} color={categoryColors.backend} isInView={isInView} />
                 </CardContent>
               </Card>
            </TabsContent>
            <TabsContent value="databases" key="databases">
              <Card>
                 <CardContent className="p-6">
                    <SkillChart data={skillsData.databases} color={categoryColors.databases} isInView={isInView} />
                  </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="tools" key="tools">
              <Card>
                 <CardContent className="p-6">
                    <SkillChart data={skillsData.tools} color={categoryColors.tools} isInView={isInView} />
                  </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
