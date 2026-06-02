import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/section';
import { PageHeader } from '@/components/page-header';
import { Code2, Brain, Wrench, Target, Heart, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Macrocephalon | Technology, AI & Engineering Company',
  description: 'Learn about Macrocephalon Services & Technologies, a technology-focused company specializing in AI solutions, software engineering, embedded systems, engineering innovation, research support, and consulting services.',
  keywords: [
    'About Macrocephalon',
    'Technology Company',
    'Engineering Company',
    'AI Company',
    'Research Support',
    'Engineering Innovation',
  ],
  openGraph: {
    title: 'About Macrocephalon | Technology, AI & Engineering Company',
    description: 'Learn about Macrocephalon Services & Technologies, a technology-focused company specializing in AI solutions, software engineering, embedded systems, engineering innovation, research support, and consulting services.',
    url: 'https://www.macrocephalon.com/about',
    siteName: 'Macrocephalon',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Macrocephalon | Technology, AI & Engineering Company',
    description: 'Learn about Macrocephalon Services & Technologies, a technology-focused company specializing in AI solutions, software engineering, embedded systems, engineering innovation, research support, and consulting services.',
  },
  alternates: {
    canonical: 'https://www.macrocephalon.com/about',
  },
};

export default function About() {
  return (
    <>
      <PageHeader
        title="About Macrocephalon"
        description="Bridging cutting-edge technology with practical implementation across software, AI, and engineering."
      >
        <div className="max-w-3xl mt-6 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Macrocephalon is a technology-focused private firm delivering high-quality technical services across multiple specialized divisions. Founded on the principle that cutting-edge technology should be accessible — from Fortune 500 firms to engineering students — we bridge the gap between innovation and implementation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, we operate three active divisions with proven expertise in software development, artificial intelligence, and end-to-end engineering project execution. We serve students, startups, private firms, and established enterprises, delivering solutions that meet the highest quality standards while remaining accessible at every scale.
          </p>
        </div>
      </PageHeader>

      {/* Mission & Vision */}
      <Section className="bg-muted/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                To deliver precision-engineered software, intelligent AI systems, and end-to-end project development solutions with the highest quality standards.
              </p>
              <p>
                Making cutting-edge technology accessible and implementable for every client, at every scale.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                To become a full-spectrum technology powerhouse — from AI-powered developer tools and enterprise software to hands-on engineering project execution.
              </p>
              <p>
                Serving students, startups, firms, and industries globally with distinction and excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Our Divisions */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Divisions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three integrated business units delivering comprehensive technical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>IT Division</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">Software &amp; Services</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Status: Active & Operational</p>
              <div className="space-y-1">
                <p>✓ Custom Software Development</p>
                <p>✓ Web Development (React, Next.js, Vue)</p>
                <p>✓ Full-Stack &amp; SaaS Development</p>
                <p>✓ UI/UX Design &amp; Prototyping</p>
                <p>✓ API &amp; Database Design</p>
                <p>✓ DevOps &amp; Cloud Deployment</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-secondary/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>AI Division</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">AI &amp; Machine Learning</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Status: Active & Operational</p>
              <div className="space-y-1">
                <p>✓ Custom AI/ML Model Development</p>
                <p>✓ LLM Integration &amp; Fine-tuning</p>
                <p>✓ Computer Vision Solutions</p>
                <p>✓ NLP &amp; Chatbot Development</p>
                <p>✓ ML Pipeline &amp; MLOps</p>
                <p>✓ Edge AI Deployment (TinyML)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Project Division</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">Engineering Projects</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Status: Active & Operational</p>
              <div className="space-y-1">
                <p>✓ PhD &amp; Doctoral Research Support</p>
                <p>✓ MTech/ME Final Year Projects</p>
                <p>✓ BE/BTech Final Year Projects</p>
                <p>✓ Hardware &amp; Embedded Systems</p>
                <p>✓ MATLAB Simulation Projects</p>
                <p>✓ Research Paper Publishing</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles guiding every project and decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: 'Technical Excellence',
              description: 'Every deliverable meets or exceeds industry standards.',
            },
            {
              title: 'Integrity & Transparency',
              description: 'Honest communication, realistic timelines, no false promises.',
            },
            {
              title: 'Innovation-First',
              description: 'Constantly integrating the latest technologies.',
            },
            {
              title: 'Client-Centric',
              description: 'Solutions tailored to each client&apos;s context and constraints.',
            },
            {
              title: 'Confidentiality',
              description: 'Strict privacy for all client projects and IP.',
            },
          ].map((value, idx) => (
            <div key={idx} className="text-center">
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Engineering Branches */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Engineering Disciplines Covered</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Project Division support spans all major engineering branches.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'Computer Science & Engineering (CSE)',
            'Electronics & Communication (ECE/ENTC)',
            'Electrical Engineering (EE)',
            'Mechanical & Mechatronics',
            'Civil Engineering',
            'IoT Systems',
            'AI & Machine Learning',
            'MATLAB Simulation',
            'Hardware & Embedded',
          ].map((branch, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-border bg-card text-center hover:border-primary/50 transition-colors"
            >
              <p className="font-medium text-foreground text-sm">{branch}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
