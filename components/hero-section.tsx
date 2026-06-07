'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Particle {
  id: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
  size: number;
}

interface GalleryImage {
  src: string;
  label: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  href?: string;
}

// Auto-generates a readable title from any filename
function titleFromFilename(src: string): string {
  const name = src.split('/').pop()?.split('.').shift() ?? '';
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: -20 + Math.random() * 20,
      delay: -Math.random() * 5,
      duration: 5 + Math.random() * 3,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    let mounted = true;

    fetch('/api/gallery', { cache: 'no-store' })
      .then((response) => response.json())
      .then((data: { images?: GalleryImage[] }) => {
        if (mounted && data.images?.length) {
          setGalleryImages(data.images.map((img) => ({
            ...img,
            title: img.title ?? titleFromFilename(img.src),
            eyebrow: img.eyebrow ?? titleFromFilename(img.src),
          })));
          setCurrentSlide(0);
        }
      })
      .catch(() => undefined);

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    setCurrentSlide((slide) => Math.min(slide, galleryImages.length - 1));
  }, [galleryImages.length]);

  useEffect(() => {
    if (galleryImages.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % galleryImages.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [galleryImages.length]);

  const activeSlide = galleryImages[currentSlide] ?? galleryImages[0];
  const goToPreviousSlide = () => {
    if (galleryImages.length <= 1) {
      return;
    }

    setCurrentSlide((slide) => (slide - 1 + galleryImages.length) % galleryImages.length);
  };
  const goToNextSlide = () => {
    if (galleryImages.length <= 1) {
      return;
    }

    setCurrentSlide((slide) => (slide + 1) % galleryImages.length);
  };

  return (
    <section className="relative w-full max-w-full overflow-hidden pt-[22rem] pb-24 sm:pt-72 sm:pb-28 lg:pt-80 lg:pb-32">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 -z-10 blur-3xl rounded-full" style={{ background: 'radial-gradient(circle, rgba(0, 0, 0, 0.05), transparent 70%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 -z-10 blur-3xl rounded-full" style={{ background: 'radial-gradient(circle, rgba(0, 0, 0, 0.03), transparent 70%)' }} />

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="page-ember-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            '--duration': `${particle.duration}s`,
            '--delay': `${particle.delay}s`,
            animation: `float-ember ${particle.duration}s ease-in ${particle.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}

      <Link href="/" className="logo-ring rounded-full absolute left-0 right-0 top-6 z-[4] mx-auto h-48 w-48 sm:left-16 sm:right-auto sm:top-8 sm:mx-0 sm:h-48 sm:w-48 lg:top-10 lg:left-16 lg:h-56 lg:w-56" aria-label="Go to home page">
        <img src="/logo-trademark.png" alt="Macrocephalon logo" className="w-full h-full object-contain" />
      </Link>
      <Link href="/" className="absolute left-0 right-0 top-[14.5rem] z-[5] mx-auto block w-[min(92vw,570px)] text-center sm:left-72 sm:right-auto sm:top-24 sm:mx-0 sm:w-[min(62vw,570px)] lg:left-88 lg:top-28" aria-label="Go to home page">
        <div className="text-[1.35rem] font-bold leading-none tracking-normal text-black sm:text-5xl sm:tracking-wide lg:text-6xl">
          MACROCEPHALON
        </div>
        <div className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gray-600 sm:text-base sm:tracking-[0.42em] lg:text-lg">
          Services &amp; Technologies
        </div>
      </Link>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-8">
        <div className="grid gap-8 rounded-2xl border-2 border-[#D4CCBF] bg-white p-6 shadow-lg shadow-black/8 sm:p-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="space-y-5">
            <div className="w-fit rounded-full border border-[#D4A574] bg-[#D4A574]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#D4A574]">
              {activeSlide?.eyebrow ?? activeSlide?.label ?? 'Our Projects'}
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                Engineering the Future
                <span className="block text-[#D4A574] font-semibold">
                  From Code to Circuit
                </span>
              </h1>
              <p className="mt-4 max-w-3xl text-base font-medium text-muted-foreground sm:text-lg lg:text-xl">
                Project visuals across software, AI, hardware, IoT, and research engineering.
              </p>
            </div>
            <p className="break-words text-sm font-bold uppercase tracking-[0.12em] text-[#D4A574] sm:text-base sm:tracking-[0.18em]">
              Software Development &middot; AI Solutions &middot; Engineering Projects
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#D4A574] text-white font-semibold shadow-lg shadow-blue-900/20 transition-all hover:bg-[#B8860B]"
              >
                <Link href="/contact">
                  Submit Your Service Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-white hover:border-[#D4A574] transition-all"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            <div className="rounded-lg border-2 border-[#D4CCBF] bg-white p-4 shadow-md">
              <div className="text-2xl font-bold text-[#1F2937] sm:text-3xl">100+</div>
              <p className="text-xs text-[#6B7280] sm:text-sm">Projects</p>
            </div>
            <div className="rounded-lg border-2 border-[#D4CCBF] bg-white p-4 shadow-md">
              <div className="text-2xl font-bold text-[#1F2937] sm:text-3xl">9</div>
              <p className="text-xs text-[#6B7280] sm:text-sm">Engineering Branches</p>
            </div>
            <div className="rounded-lg border-2 border-[#D4CCBF] bg-white p-4 shadow-md">
              <div className="text-2xl font-bold text-[#1F2937] sm:text-3xl">3</div>
              <p className="text-xs text-[#6B7280] sm:text-sm">Active Divisions</p>
            </div>
          </div>
        </div>

        {activeSlide && <div className="relative overflow-hidden rounded-3xl border-2 border-[#D4CCBF] bg-[#1F2937] shadow-xl sm:bg-[#1F2937]">
          <div className="group/gallery relative sm:h-[430px] lg:h-[500px]">
            <img
              src={activeSlide?.src}
              alt={activeSlide?.label}
              className="pointer-events-none hidden sm:absolute sm:inset-0 sm:block sm:h-full sm:w-full sm:scale-110 sm:object-cover sm:opacity-25 sm:blur-xl"
            />
            <div className="pointer-events-none hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-b sm:from-black/20 sm:via-transparent sm:to-black/50" />
            <Link
              href={activeSlide?.href ?? '/services'}
              className="absolute inset-0 z-20"
              aria-label={`Open ${activeSlide?.title ?? activeSlide?.label} service details`}
            />
            <div className="relative aspect-[16/10] overflow-hidden bg-black sm:hidden">
              <img
                key={`mobile-${activeSlide?.src}`}
                src={activeSlide?.src}
                alt={activeSlide?.label}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#151922] via-transparent to-transparent" />
            </div>
            <img
              key={activeSlide?.src}
              src={activeSlide?.src}
              alt={activeSlide?.label}
              className="pointer-events-none relative z-10 hidden h-full w-full object-contain transition-opacity duration-500 group-hover/gallery:scale-[1.01] sm:block"
            />
            <div className="pointer-events-none absolute left-5 top-5 z-30 rounded-full border border-white/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {activeSlide?.eyebrow ?? activeSlide?.label}
            </div>
            <div className="pointer-events-none relative z-30 p-8 sm:absolute sm:bottom-8 sm:left-8 sm:right-5 sm:max-w-xl sm:rounded-xl sm:border sm:border-white/20 sm:bg-black/70 sm:p-5 sm:shadow-xl sm:shadow-black/30 sm:backdrop-blur-md">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-3xl">{activeSlide?.title ?? activeSlide?.label}</h2>
              <p className="mt-5 text-base leading-8 text-gray-300 sm:mt-2 sm:text-base sm:leading-6">
                {activeSlide?.description ?? 'Explore connected service details and implementation support.'}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white sm:mt-4">
                VIEW SERVICE
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                goToPreviousSlide();
              }}
              className="absolute left-4 top-[29%] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/75 text-white shadow-lg shadow-black/40 transition-colors hover:bg-white/20 sm:top-1/2 sm:h-12 sm:w-12"
              aria-label="Previous gallery slide"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                goToNextSlide();
              }}
              className="absolute right-4 top-[29%] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/45 bg-black/75 text-white shadow-lg shadow-black/40 transition-colors hover:bg-white/20 sm:top-1/2 sm:h-12 sm:w-12"
              aria-label="Next gallery slide"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <div className="relative bottom-auto left-1/2 z-30 mb-8 flex w-fit -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-2 sm:absolute sm:bottom-5 sm:mb-0">
              {galleryImages.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentSlide(index);
                  }}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'w-10 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/80'
                  }`}
                  aria-label={`Show ${slide.label}`}
                />
              ))}
            </div>
          </div>
        </div>}
      </div>
    </section>
  );
}
