import Link from 'next/link';
import { Github, Linkedin, Twitter, Facebook, Instagram, Youtube, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#9B8B7E] bg-[#1a1f2e]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Macrocephalon</h3>
            <p className="text-sm text-white">
              Services & Technologies for enterprise innovation and excellence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white hover:text-[#F5E6D3] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { href: '/projects', label: 'Projects' },
                { href: '/academic', label: 'Academic' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white hover:text-[#F5E6D3] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Get in Touch</h4>
            <p className="text-sm text-white mb-4">
              Ready to start your next project?
            </p>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#D4A574] hover:text-white transition-colors"
            >
              Submit Your Service Request →
            </Link>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://github.com/MacrocephalonTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D4A574] flex items-center justify-center text-white hover:text-black transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/macrocephalon/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D4A574] flex items-center justify-center text-white hover:text-black transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/macrocephalons"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D4A574] flex items-center justify-center text-white hover:text-black transition-all"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/macrocephalontechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D4A574] flex items-center justify-center text-white hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/macrocephalontechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D4A574] flex items-center justify-center text-white hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@macrocephalontechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D4A574] flex items-center justify-center text-white hover:text-black transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#D4CCBF] pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white">
              &copy; {currentYear} Macrocephalon Services & Technologies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-white hover:text-[#F5E6D3] transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-xs text-white hover:text-[#F5E6D3] transition-colors"
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
