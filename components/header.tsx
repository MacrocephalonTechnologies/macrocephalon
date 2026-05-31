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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-5 sm:px-6 md:justify-between md:py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="absolute left-0 right-0 top-[calc(50%+0.25rem)] mx-auto flex w-fit -translate-x-12 -translate-y-1/2 flex-shrink-0 items-center sm:translate-x-0 md:static md:mx-0 md:mr-4 md:translate-y-0">
          <span className="flex flex-col rounded-md border border-[#C9A84C]/25 bg-black/35 px-3 py-2 font-bold text-transparent bg-gradient-to-r from-[#C9A84C] via-[#FF7A18] to-[#D9B55A] bg-clip-text shadow-[0_0_18px_rgba(255,122,24,0.16)] sm:px-4">
            <span className="text-sm leading-none tracking-wide sm:text-base lg:text-lg">MACROCEPHALON</span>
            <span className="mt-1 text-[10px] leading-none tracking-[0.12em] sm:text-xs">Services &amp; Technologies</span>
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
                    ? 'bg-[#FF7A18]/15 text-[#FFD48A] shadow-[inset_0_0_0_1px_rgba(201,168,76,0.25)]'
                    : 'text-foreground hover:bg-muted hover:text-[#D9B55A]'
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
            className="hidden sm:inline-flex bg-secondary hover:bg-secondary/90 text-secondary-foreground"
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
                          ? 'bg-[#FF7A18]/15 text-[#FFD48A]'
                          : 'text-foreground hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Button
                  asChild
                  className="w-full mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
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
