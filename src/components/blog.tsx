'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Type for the blog post data from the dev.to API
interface DevToPost {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  readable_publish_date: string;
  url: string;
  tag_list: string[];
}

export function Blog() {
  const [posts, setPosts] = useState<DevToPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch latest 3 articles from the dev.to API with a tech tag
        const response = await fetch('https://dev.to/api/articles/latest?per_page=3&tag=webdev');
        if (!response.ok) {
          throw new Error('Failed to fetch posts from DEV.to');
        }
        const data: DevToPost[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-gradient">From My Blog</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            "Insights, ideas, and innovations from the dev desk."
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="h-full flex flex-col justify-between">
                <CardHeader>
                  <div className="h-6 w-3/4 bg-muted rounded animate-pulse" />
                   <div className="h-4 w-1/2 bg-muted rounded animate-pulse mt-2" />
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full bg-muted rounded-lg animate-pulse" />
                  <div className="h-4 w-full bg-muted rounded animate-pulse mt-4" />
                  <div className="h-4 w-5/6 bg-muted rounded animate-pulse mt-2" />
                </CardContent>
                <CardFooter>
                  <div className="h-10 w-full bg-muted rounded animate-pulse" />
                </CardFooter>
              </Card>
            ))
          ) : error ? (
            <div className="col-span-full text-center text-red-500">{error}</div>
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl h-full flex flex-col">
                  <CardHeader>
                    <CardTitle>{post.title}</CardTitle>
                    <p className="text-sm text-muted-foreground pt-2">{post.readable_publish_date}</p>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <Image
                      alt={post.title}
                      className="mx-auto aspect-video overflow-hidden rounded-lg object-cover"
                      height="310"
                      src={post.cover_image || 'https://placehold.co/600x400.png'}
                      width="550"
                      data-ai-hint={post.tag_list.slice(0, 2).join(' ') || 'tech blog'}
                    />
                    <CardDescription className="pt-4">{post.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
