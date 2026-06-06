import Link from 'next/link';
import { Globe2, Linkedin, Facebook, Twitter, Github, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Website',
      url: 'https://www.macrocephalon.com',
      icon: Globe2,
      label: '🌐 Website',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/macrocephalon/',
      icon: Linkedin,
      label: '💼 LinkedIn',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/macrocephalontechnologies/',
      icon: Facebook,
      label: '📘 Facebook',
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/macrocephalons',
      icon: Twitter,
      label: '🐦 X (Twitter)',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/MacrocephalonTechnologies',
      icon: Github,
      label: '💻 GitHub',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/macrocephalontechnologies/',
      icon: Instagram,
      label: '📸 Instagram',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@macrocephalontechnologies',
      icon: Youtube,
      label: '▶️ YouTube',
    },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-4">Macrocephalon</h3>
            <p className="text-sm text-muted-foreground">
              Services & Technologies for enterprise innovation and excellence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { href: '/projects', label: 'Projects' },
                { href: '/academic', label: 'Academic' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Get in Touch</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to start your next project?
            </p>
            <Link
              href="/contact"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Submit Your Service Request →
            </Link>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-md bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Macrocephalon Services & Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
