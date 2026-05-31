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

const galleryServiceDetails: Record<string, Omit<GalleryImage, 'src' | 'label'>> = {
  software: {
    eyebrow: 'Software Division',
    title: 'Software & Services',
    description: 'Web applications, custom software, APIs, SaaS platforms, UI/UX, and database systems for real business workflows.',
    href: '/services#web-development',
  },
  ai: {
    eyebrow: 'AI Division',
    title: 'AI & Machine Learning',
    description: 'AI/ML models, LLM integration, computer vision, NLP chatbots, ML pipelines, and edge AI deployment.',
    href: '/services#ai-ml-models',
  },
  hardware: {
    eyebrow: 'Hardware & IoT',
    title: 'Hardware Projects',
    description: 'Embedded systems, hardware prototypes, circuit work, sensor integration, edge devices, and IoT connectivity.',
    href: '/services#hardware-projects',
  },
  engineering: {
    eyebrow: 'Engineering Projects',
    title: 'Academic & Research Projects',
    description: 'End-to-end project support for engineering branches, MATLAB simulation, research publishing, and final-year builds.',
    href: '/services#academic-projects',
  },
};

const fallbackGalleryImages: GalleryImage[] = [
  { src: '/gallery/software.png', label: 'Software Systems', ...galleryServiceDetails.software },
  { src: '/gallery/ai.png', label: 'AI Solutions', ...galleryServiceDetails.ai },
  { src: '/gallery/hardware.png', label: 'Hardware & IoT', ...galleryServiceDetails.hardware },
  { src: '/gallery/engineering.png', label: 'Engineering Projects', ...galleryServiceDetails.engineering },
];

function galleryKeyFromSrc(src: string) {
  return src.split('/').pop()?.split('.').shift()?.toLowerCase().replace(/^gallery-/, '') ?? '';
}

function enrichGalleryImage(image: GalleryImage): GalleryImage {
  const details = galleryServiceDetails[galleryKeyFromSrc(image.src)];

  return {
    ...image,
    ...details,
  };
}

export function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(fallbackGalleryImages);
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
          setGalleryImages(data.images.map(enrichGalleryImage));
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
    <section className="relative w-full max-w-full overflow-hidden pt-80 pb-24 sm:pt-72 sm:pb-28 lg:pt-80 lg:pb-32">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 -z-10 blur-3xl rounded-full" style={{ background: 'radial-gradient(circle, rgba(201, 168, 76, 0.15), transparent 70%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 -z-10 blur-3xl rounded-full" style={{ background: 'radial-gradient(circle, rgba(217, 181, 90, 0.12), transparent 70%)' }} />

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

      <Link href="/" className="golden-ring logo-ring absolute left-0 right-0 top-8 z-[4] mx-auto h-44 w-44 sm:left-16 sm:right-auto sm:top-8 sm:mx-0 sm:h-48 sm:w-48 lg:top-10 lg:left-16 lg:h-56 lg:w-56" aria-label="Go to home page">
        <img src="/logo-cl-version-circle.png" alt="Macrocephalon logo" />
      </Link>
      <Link href="/" className="absolute left-0 right-0 top-60 z-[5] mx-auto block w-[min(92vw,570px)] text-center sm:left-72 sm:right-auto sm:top-24 sm:mx-0 sm:w-[min(62vw,570px)] lg:left-88 lg:top-28" aria-label="Go to home page">
        <div
          className="text-[1.35rem] font-bold leading-none tracking-normal text-transparent bg-clip-text sm:text-5xl sm:tracking-wide lg:text-6xl"
          style={{
            backgroundImage: 'linear-gradient(135deg, #C9A84C 0%, #FF7A18 42%, #63B8E8 58%, #D8F2FF 100%)',
          }}
        >
          MACROCEPHALON
        </div>
        <div
          className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-transparent bg-clip-text sm:text-base sm:tracking-[0.42em] lg:text-lg"
          style={{
            backgroundImage: 'linear-gradient(135deg, #D9B55A 0%, #FF7A18 38%, #7FD8FF 62%, #B9E6FF 100%)',
          }}
        >
          Services &amp; Technologies
        </div>
      </Link>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-8">
        <div className="grid gap-8 rounded-2xl border border-[#3EB8FF]/18 bg-[#050B12]/70 p-6 shadow-xl shadow-[#062338]/20 backdrop-blur-sm sm:p-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div className="space-y-5">
            <div className="w-fit rounded-full border border-[#63B8E8]/35 bg-[#071522]/75 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#B9E6FF]">
              {activeSlide.eyebrow ?? activeSlide.label}
            </div>
            <div>
              <h1 className="text-3xl font-bold leading-tight text-[#EAF6FF] sm:text-5xl lg:text-6xl">
                Engineering the Future
                <span className="block bg-gradient-to-r from-[#86D8FF] via-[#3EB8FF] to-[#D9C878] bg-clip-text text-transparent">
                  From Code to Circuit
                </span>
              </h1>
              <p className="mt-4 max-w-3xl text-base font-medium text-muted-foreground sm:text-lg lg:text-xl">
                Project visuals across software, AI, hardware, IoT, and research engineering.
              </p>
            </div>
            <p className="break-words text-xs font-semibold uppercase tracking-[0.12em] text-[#A8DDF2] sm:text-sm sm:tracking-[0.18em]">
              Software Development &middot; AI Solutions &middot; Engineering Projects
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#2A6496] to-[#3EB8FF] text-white font-semibold shadow-lg shadow-sky-500/20 transition-all hover:from-[#3EB8FF] hover:to-[#2A6496] hover:shadow-sky-500/30"
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
                className="border-[#63B8E8]/50 text-[#B9E6FF] hover:bg-[#3EB8FF]/10"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            <div className="rounded-xl border border-[#3EB8FF]/20 bg-[#071522]/70 p-4">
              <div className="text-2xl font-bold text-[#86D8FF] sm:text-3xl">100+</div>
              <p className="text-xs text-muted-foreground sm:text-sm">Projects</p>
            </div>
            <div className="rounded-xl border border-[#3EB8FF]/20 bg-[#071522]/70 p-4">
              <div className="text-2xl font-bold text-[#D9C878] sm:text-3xl">9</div>
              <p className="text-xs text-muted-foreground sm:text-sm">Engineering Branches</p>
            </div>
            <div className="rounded-xl border border-[#3EB8FF]/20 bg-[#071522]/70 p-4">
              <div className="text-2xl font-bold text-[#A8DDF2] sm:text-3xl">3</div>
              <p className="text-xs text-muted-foreground sm:text-sm">Active Divisions</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-[#C9A84C]/20 bg-[#151922] shadow-2xl shadow-black/30 sm:bg-black/70">
          <div className="group/gallery relative sm:h-[430px] lg:h-[500px]">
            <img
              src={activeSlide.src}
              alt={activeSlide.label}
              className="pointer-events-none hidden sm:absolute sm:inset-0 sm:block sm:h-full sm:w-full sm:scale-110 sm:object-cover sm:opacity-25 sm:blur-xl"
            />
            <div className="pointer-events-none hidden sm:absolute sm:inset-0 sm:block sm:bg-gradient-to-b sm:from-black/20 sm:via-transparent sm:to-black/50" />
            <Link
              href={activeSlide.href ?? '/services'}
              className="absolute inset-0 z-20"
              aria-label={`Open ${activeSlide.title ?? activeSlide.label} service details`}
            />
            <div className="relative aspect-[16/10] overflow-hidden bg-black sm:hidden">
              <img
                key={`mobile-${activeSlide.src}`}
                src={activeSlide.src}
                alt={activeSlide.label}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#151922] via-transparent to-transparent" />
            </div>
            <img
              key={activeSlide.src}
              src={activeSlide.src}
              alt={activeSlide.label}
              className="pointer-events-none relative z-10 hidden h-full w-full object-contain transition-opacity duration-500 group-hover/gallery:scale-[1.01] sm:block"
            />
            <div className="pointer-events-none absolute left-5 top-5 z-30 rounded-full border border-[#C9A84C]/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#D9B55A]">
              {activeSlide.eyebrow ?? activeSlide.label}
            </div>
            <div className="pointer-events-none relative z-30 p-8 sm:absolute sm:bottom-8 sm:left-8 sm:right-5 sm:max-w-xl sm:rounded-xl sm:border sm:border-[#C9A84C]/20 sm:bg-black/70 sm:p-5 sm:shadow-xl sm:shadow-black/30 sm:backdrop-blur-md">
              <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-3xl">{activeSlide.title ?? activeSlide.label}</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground sm:mt-2 sm:text-base sm:leading-6">
                {activeSlide.description ?? 'Explore connected service details and implementation support.'}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF7A18] sm:mt-4">
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
              className="absolute left-4 top-[29%] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF7A18]/45 bg-black/75 text-[#D9B55A] shadow-lg shadow-black/40 transition-colors hover:bg-[#FF7A18]/20 sm:top-1/2 sm:h-12 sm:w-12"
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
              className="absolute right-4 top-[29%] z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#FF7A18]/45 bg-black/75 text-[#D9B55A] shadow-lg shadow-black/40 transition-colors hover:bg-[#FF7A18]/20 sm:top-1/2 sm:h-12 sm:w-12"
              aria-label="Next gallery slide"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            <div className="relative bottom-auto left-1/2 z-30 mb-8 flex w-fit -translate-x-1/2 gap-2 rounded-full border border-[#C9A84C]/20 bg-black/60 px-3 py-2 sm:absolute sm:bottom-5 sm:mb-0">
              {galleryImages.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentSlide(index);
                  }}
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
