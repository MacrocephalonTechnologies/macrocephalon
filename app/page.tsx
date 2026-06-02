import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Macrocephalon Services & Technologies | AI, Software & Engineering Solutions',
  description: 'Macrocephalon Services & Technologies delivers AI solutions, software development, web applications, embedded systems, IoT technologies, MATLAB solutions, engineering projects, research support, and technology consulting services.',
  keywords: [
    'AI Solutions',
    'Software Development',
    'Engineering Projects',
    'Embedded Systems',
    'IoT Development',
    'MATLAB Projects',
    'Research Support',
    'Technology Consulting',
    'Macrocephalon',
  ],
  openGraph: {
    title: 'Macrocephalon Services & Technologies | AI, Software & Engineering Solutions',
    description: 'Macrocephalon Services & Technologies delivers AI solutions, software development, web applications, embedded systems, IoT technologies, MATLAB solutions, engineering projects, research support, and technology consulting services.',
    url: 'https://www.macrocephalon.com/',
    siteName: 'Macrocephalon',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Macrocephalon Services & Technologies | AI, Software & Engineering Solutions',
    description: 'Macrocephalon Services & Technologies delivers AI solutions, software development, web applications, embedded systems, IoT technologies, MATLAB solutions, engineering projects, research support, and technology consulting services.',
  },
  alternates: {
    canonical: 'https://www.macrocephalon.com/',
  },
};

'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/section';
import { HeroSection } from '@/components/hero-section';
import { allServices } from '@/data/services';
import { Code2, Brain, Wrench, CheckCircle, Users, Zap, TrendingUp } from 'lucide-react';

const featuredServiceSlugs = [
  'web-development',
  'custom-software',
  'ai-ml-models',
  'llm-integration',
  'academic-projects',
  'hardware-projects',
  'matlab-projects',
  'research-publishing',
  'iot-projects',
];

const featuredServices = featuredServiceSlugs
  .map((slug) => allServices.find((service) => service.slug === slug))
  .filter(Boolean);

export default function Home() {
  return (
    <>
      {/* Enhanced Hero Section with Volcanic Effects */}
      <HeroSection />

      {/* What We Do Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three integrated divisions delivering complete technical solutions across software, AI, and engineering.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Software &amp; Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Web development, custom software, SaaS platforms, and full-stack solutions.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>✓ React, Next.js, Vue</li>
                <li>✓ Desktop &amp; Mobile Apps</li>
                <li>✓ API &amp; Database Design</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>AI &amp; Machine Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground text-sm">
                AI model development, LLM integration, and intelligent automation.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>✓ LLM Integration &amp; Fine-tuning</li>
                <li>✓ Computer Vision &amp; NLP</li>
                <li>✓ Edge AI Deployment</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Engineering Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Academic projects, research support, and real-world engineering solutions.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>✓ PhD to Diploma Support</li>
                <li>✓ Hardware &amp; Embedded</li>
                <li>✓ Research Publishing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Why Macrocephalon Section */}
      <Section className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Macrocephalon</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver solutions that meet the highest standards while remaining accessible to clients at every scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: CheckCircle, title: 'Original Work', desc: 'Custom solutions built from scratch' },
            { icon: Zap, title: 'IEEE Publishable', desc: 'Research-grade quality documentation' },
            { icon: Users, title: 'Full Documentation', desc: 'Complete code, reports, and support' },
            { icon: TrendingUp, title: 'Fast Delivery', desc: 'Realistic timelines, on-time delivery' },
            { icon: CheckCircle, title: 'Confidential', desc: 'Strict privacy and IP protection' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Services Grid Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete range of solutions across IT, AI, and engineering disciplines.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredServices.map((service) => service && (
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className="block p-4 rounded-lg border border-border hover:border-primary/50 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
              <p className="text-xs text-muted-foreground">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link href="/services">View All Services →</Link>
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-card border-t border-border">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Have a Project in Mind?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Let&apos;s discuss how Macrocephalon can deliver cutting-edge solutions for your goals.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <Link href="/contact">Submit Your Service Request</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
