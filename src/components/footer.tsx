
import Link from 'next/link';
import { CodeXml, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    const navLinks = [
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#about', label: 'About' },
        { href: '#blog', label: 'Blog' },
        { href: '#contact', label: 'Contact' },
      ];

  return (
    <footer className="w-full py-12 px-4 md:px-6 border-t bg-secondary/50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About/Logo Column */}
        <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
                <span className="font-headline text-gradient text-2xl [text-shadow:0_0_5px_rgba(192,132,252,0.5)]">Sachin Parashetti</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs font-body">
              Tech enthusiast and problem solver. I build full-stack applications that bridge design and functionality, with a focus on performance, scalability, and real-world impact. Always exploring, always improving.
            </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 font-headline">Quick Links</h3>
          <ul className="space-y-2 font-body">
            {navLinks.map((link) => (
                 <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                    </Link>
                 </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact Column */}
        <div>
            <h3 className="text-lg font-semibold mb-4 font-headline">Connect With Me</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <a href="#" aria-label="GitHub" className="icon-container-gradient bg-primary/10 dark:bg-primary/20 p-3 rounded-full transition-all duration-300">
                    <Github className="h-6 w-6 text-primary icon-target transition-colors duration-300" />
                </a>
                <a href="#" aria-label="LinkedIn" className="icon-container-gradient bg-primary/10 dark:bg-primary/20 p-3 rounded-full transition-all duration-300">
                    <Linkedin className="h-6 w-6 text-primary icon-target transition-colors duration-300" />
                </a>
                <a href="mailto:sachinparshettisp@gmail.com" aria-label="Email" className="icon-container-gradient bg-primary/10 dark:bg-primary/20 p-3 rounded-full transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary icon-target transition-colors duration-300" />
                </a>
            </div>
             <a href="mailto:sachinparshettisp@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">sachinparshettisp@gmail.com</a>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 pt-6 border-t">
        <p className="text-sm text-muted-foreground font-body">&copy; 2025 Sachin Parashetti. All rights reserved.</p>
      </div>
    </footer>
  );
}
