'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/academic', label: 'Academic' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#D4CCBF] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 overflow-visible shadow-sm">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-8 sm:px-6 md:justify-between md:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="absolute left-0 right-0 top-[calc(50%+0.25rem)] mx-auto flex w-fit -translate-y-1/2 flex-shrink-0 items-center md:static md:mx-0 md:mr-4 md:translate-y-0">
          <span className="flex flex-col rounded-md border-2 border-[#D4CCBF] bg-white px-3 py-2 font-bold text-[#1F2937] sm:px-4 shadow-sm">
            <span className="text-sm leading-none tracking-wide sm:text-base lg:text-lg">MACROCEPHALON</span>
            <span className="mt-1 text-[10px] leading-none tracking-[0.12em] text-[#6B7280] sm:text-xs">Services &amp; Technologies</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActiveLink(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-[#D4A574]/10 text-[#D4A574] border-b-2 border-[#D4A574]'
                    : 'text-[#2D3748] hover:text-[#D4A574]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 items-center gap-2 md:static md:translate-y-0">
          <Button
            asChild
            className="hidden sm:inline-flex bg-[#D4A574] hover:bg-[#B8860B] text-white"
          >
            <Link href="/contact">Submit Your Service Request</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => {
                  const active = isActiveLink(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        active
                          ? 'bg-[#D4A574]/10 text-[#D4A574]'
                          : 'text-[#2D3748] hover:text-[#D4A574]'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Button
                  asChild
                  className="w-full mt-4 bg-[#D4A574] hover:bg-[#B8860B] text-white"
                >
                  <Link href="/contact">Submit Your Service Request</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
