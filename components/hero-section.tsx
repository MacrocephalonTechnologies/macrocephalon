'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

interface GalleryImage {
  src: string;
  label: string;
}

const fallbackGalleryImages: GalleryImage[] = [
  { src: '/gallery/software.png', label: 'Software Systems' },
  { src: '/gallery/ai.png', label: 'AI Solutions' },
  { src: '/gallery/hardware.png', label: 'Hardware & IoT' },
  { src: '/gallery/engineering.png', label: 'Engineering Projects' },
];

export function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(fallbackGalleryImages);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
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
          setGalleryImages(data.images);
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

  const activeSlide = galleryImages[currentSlide] ?? galleryImages[0] ?? fallbackGalleryImages[0];
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
    <section className="relative pt-64 pb-24 sm:pt-72 sm:pb-28 lg:pt-80 lg:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 -z-10 blur-3xl rounded-full" style={{ background: 'radial-gradient(circle, rgba(201, 168, 76, 0.15), transparent 70%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 -z-10 blur-3xl rounded-full" style={{ background: 'radial-gradient(circle, rgba(217, 181, 90, 0.12), transparent 70%)' }} />

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="ember-particle -z-5"
          style={{
            left: `${particle.left}%`,
            bottom: '-20px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            '--duration': `${particle.duration}s`,
            '--delay': `${particle.delay}s`,
            animation: `float-ember ${particle.duration}s ease-in ${particle.delay}s infinite`,
          } as React.CSSProperties}
        />
      ))}

      <div className="golden-ring logo-ring absolute top-6 left-12 sm:top-8 sm:left-16 lg:top-10 lg:left-16 w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 -z-10">
        <img src="/logo-cl-version-circle.png" alt="Macrocephalon logo" />
      </div>
      <div className="absolute left-56 top-20 z-0 w-[min(62vw,570px)] text-center sm:left-72 sm:top-24 lg:left-88 lg:top-28">
        <div className="text-4xl font-bold leading-none tracking-wide text-transparent bg-gradient-to-r from-[#C9A84C] via-[#FF7A18] to-[#FF5A1F] bg-clip-text sm:text-5xl lg:text-6xl">
          MACROCEPHALON
        </div>
        <div className="mt-3 text-sm font-bold uppercase tracking-[0.42em] text-[#D9B55A] sm:text-base lg:text-lg">
          Services &amp; Technologies
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="grid gap-8 rounded-2xl border border-[#C9A84C]/15 bg-black/55 p-6 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="space-y-5">
            <div className="w-fit rounded-full border border-[#C9A84C]/25 bg-[#0D1117]/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#D9B55A]">
              {activeSlide.label}
            </div>
            <div>
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Engineering the Future
                <span className="block bg-gradient-to-r from-[#C9A84C] via-[#FF7A18] to-[#FF5A1F] bg-clip-text text-transparent">
                  From Code to Circuit
                </span>
              </h1>
              <p className="mt-4 max-w-3xl text-base font-medium text-muted-foreground sm:text-lg lg:text-xl">
                Project visuals across software, AI, hardware, IoT, and research engineering.
              </p>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D9B55A]">
              Software Development &middot; AI Solutions &middot; Engineering Projects
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FF7A18] to-[#FF5A1F] text-white font-semibold shadow-lg shadow-orange-500/25 transition-all hover:from-[#FF5A1F] hover:to-[#FF7A18] hover:shadow-orange-500/40"
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
                className="border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C]/10"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            <div className="rounded-xl border border-[#C9A84C]/15 bg-[#0D1117]/70 p-4">
              <div className="text-2xl font-bold text-[#FF7A18] sm:text-3xl">100+</div>
              <p className="text-xs text-muted-foreground sm:text-sm">Projects</p>
            </div>
            <div className="rounded-xl border border-[#C9A84C]/15 bg-[#0D1117]/70 p-4">
              <div className="text-2xl font-bold text-[#C9A84C] sm:text-3xl">9</div>
              <p className="text-xs text-muted-foreground sm:text-sm">Engineering Branches</p>
            </div>
            <div className="rounded-xl border border-[#C9A84C]/15 bg-[#0D1117]/70 p-4">
              <div className="text-2xl font-bold text-[#D9B55A] sm:text-3xl">3</div>
              <p className="text-xs text-muted-foreground sm:text-sm">Active Divisions</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-[#C9A84C]/20 bg-black/70 shadow-2xl shadow-black/30">
          <div className="relative h-[300px] sm:h-[380px] lg:h-[460px]">
            <img
              src={activeSlide.src}
              alt={activeSlide.label}
              className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-xl"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
            <img
              key={activeSlide.src}
              src={activeSlide.src}
              alt={activeSlide.label}
              className="pointer-events-none relative z-10 h-full w-full object-contain transition-opacity duration-500"
            />
            <div className="pointer-events-none absolute left-5 top-5 z-30 rounded-full border border-[#C9A84C]/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#D9B55A]">
              {activeSlide.label}
            </div>

            <button
              type="button"
              onClick={goToPreviousSlide}
              className="absolute left-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF7A18]/45 bg-black/75 text-[#D9B55A] shadow-lg shadow-black/40 transition-colors hover:bg-[#FF7A18]/20"
              aria-label="Previous gallery slide"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={goToNextSlide}
              className="absolute right-4 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF7A18]/45 bg-black/75 text-[#D9B55A] shadow-lg shadow-black/40 transition-colors hover:bg-[#FF7A18]/20"
              aria-label="Next gallery slide"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full border border-[#C9A84C]/20 bg-black/60 px-3 py-2">
              {galleryImages.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'w-10 bg-[#FF7A18]' : 'w-2.5 bg-[#C9A84C]/45 hover:bg-[#C9A84C]/80'
                  }`}
                  aria-label={`Show ${slide.label}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
