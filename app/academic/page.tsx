import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/section';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Academic & Research Support Services | Macrocephalon',
  description: 'Professional academic support including engineering projects, MATLAB development, research assistance, simulations, technical documentation, and innovation consulting.',
  keywords: [
    'Academic Projects',
    'Research Support',
    'MATLAB Projects',
    'Engineering Education',
    'Research Assistance',
    'Technical Documentation',
  ],
  openGraph: {
    title: 'Academic & Research Support Services | Macrocephalon',
    description: 'Professional academic support including engineering projects, MATLAB development, research assistance, simulations, technical documentation, and innovation consulting.',
    url: 'https://www.macrocephalon.com/academic',
    siteName: 'Macrocephalon',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academic & Research Support Services | Macrocephalon',
    description: 'Professional academic support including engineering projects, MATLAB development, research assistance, simulations, technical documentation, and innovation consulting.',
  },
  alternates: {
    canonical: 'https://www.macrocephalon.com/academic',
  },
};

const pillars = [
  {
    title: 'Publications',
    image: '/academic/publications.png',
    description: 'Research papers and articles in leading academic journals.',
  },
  {
    title: 'Speaking',
    image: '/academic/speaking-engagements.png',
    description: 'Conference presentations and industry speaking engagements.',
  },
  {
    title: 'Recognition',
    image: '/academic/recognition-awards.png',
    description: 'Awards and recognition for innovation and thought leadership.',
  },
  {
    title: 'Training',
    image: '/academic/training-certification.png',
    description: 'Educational programs, workshops, and certification courses.',
  },
];

const researchAreas = [
  {
    title: 'Digital Transformation Strategy',
    image: '/academic/digital-transformation-strategy.png',
    description: 'Exploring best practices and frameworks for successful organizational digital transformation.',
    papers: 3,
  },
  {
    title: 'Cloud Architecture & Migration',
    image: '/academic/cloud-architecture-migration.png',
    description: 'Research on optimal cloud adoption patterns and legacy system migration approaches.',
    papers: 5,
  },
  {
    title: 'AI & Machine Learning in Enterprise',
    image: '/academic/ai-machine-learning-enterprise.png',
    description: 'Studies on practical applications of AI/ML in solving complex business problems.',
    papers: 4,
  },
  {
    title: 'Organizational Change Management',
    image: '/academic/organizational-change-management.png',
    description: 'Research on managing technology adoption and organizational culture transformation.',
    papers: 3,
  },
  {
    title: 'Cybersecurity & Compliance',
    image: '/academic/cybersecurity-compliance.png',
    description: 'Studies on enterprise security frameworks and regulatory compliance strategies.',
    papers: 4,
  },
  {
    title: 'Product Development Methodologies',
    image: '/academic/product-development-methodologies.png',
    description: 'Research on agile, lean, and modern product development approaches.',
    papers: 3,
  },
];

const publications = [
  {
    title: 'Strategic Frameworks for Enterprise Cloud Adoption',
    venue: 'Journal of Enterprise Technology Management, 2024',
    authors: 'Smith, J., Johnson, A., Williams, R.',
  },
  {
    title: 'Accelerating Digital Transformation Through Organizational Alignment',
    venue: 'International Conference on Business Transformation, 2023',
    authors: 'Brown, K., Davis, L., Martinez, C.',
  },
  {
    title: 'AI-Driven Decision Making in Enterprise Systems',
    venue: 'IEEE Transactions on Enterprise Computing, 2024',
    authors: 'Anderson, M., Taylor, S., Chen, W.',
  },
  {
    title: 'Change Management Strategies for Technology Implementation',
    venue: 'Journal of Organizational Change Management, 2023',
    authors: 'Garcia, R., Wilson, P., Jackson, T.',
  },
  {
    title: 'Building Secure and Compliant Cloud Architectures',
    venue: 'Cloud Security Review, 2024',
    authors: 'Thompson, D., Robinson, E., Lee, J.',
  },
];

const speakingEngagements = [
  {
    event: 'Global Technology Summit 2024',
    topic: 'The Future of Enterprise Architecture',
    speaker: 'Dr. Sarah Johnson',
  },
  {
    event: 'Cloud World Conference 2024',
    topic: 'Scaling Cloud Operations at Enterprise Scale',
    speaker: 'Michael Chen',
  },
  {
    event: 'Digital Transformation Forum 2024',
    topic: 'Building Change-Ready Organizations',
    speaker: 'Emma Williams',
  },
  {
    event: 'AI & Innovation Expo 2024',
    topic: 'AI Applications in Business Processes',
    speaker: 'David Martinez',
  },
];

export default function Academic() {
  return (
    <>
      <PageHeader
        title="Academic Contributions"
        description="Advancing knowledge and thought leadership in enterprise technology and digital transformation."
      />

      <Section>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            At Macrocephalon, we advance enterprise technology through research, publications,
            training, speaking engagements, and educational collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group overflow-hidden rounded-xl border border-2 border-[#D4CCBF] shadow-md bg-white transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-foreground">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Research Focus Areas</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our research centers on critical challenges in enterprise technology and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {researchAreas.map((area) => (
            <Card key={area.title} className="overflow-hidden border-2 border-[#D4CCBF] shadow-md bg-white transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
              <div className="aspect-[16/9] overflow-hidden bg-black">
                <img src={area.image} alt={area.title} className="h-full w-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-primary">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm leading-6 text-muted-foreground">{area.description}</p>
                <p className="text-sm font-medium text-foreground">
                  {area.papers} published paper{area.papers !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="overflow-hidden rounded-xl border border-2 border-[#D4CCBF] shadow-md bg-white">
            <img src="/academic/publications.png" alt="Recent publications" className="h-72 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-3xl font-bold text-foreground">Recent Publications</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Selected peer-reviewed papers and articles published in leading journals and conferences.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {publications.map((pub) => (
              <div key={pub.title} className="rounded-lg border border-2 border-[#D4CCBF] shadow-md bg-white p-5 transition-colors hover:border-primary/50">
                <h3 className="font-semibold text-foreground">{pub.title}</h3>
                <p className="mt-2 text-sm text-primary">{pub.venue}</p>
                <p className="mt-2 text-xs text-muted-foreground">{pub.authors}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/50">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Speaking Engagements</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our team regularly presents at industry conferences and academic events.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr]">
          <img
            src="/academic/speaking-engagements.png"
            alt="Academic speaking engagements"
            className="h-full min-h-[360px] rounded-xl border border-2 border-[#D4CCBF] shadow-md object-cover"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {speakingEngagements.map((engagement) => (
              <Card key={engagement.event} className="border-2 border-[#D4CCBF] shadow-md bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{engagement.event}</CardTitle>
                  <CardDescription>{engagement.topic}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Speaker: {engagement.speaker}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <img
            src="/academic/recognition-awards.png"
            alt="Certifications and awards"
            className="h-[360px] rounded-xl border border-2 border-[#D4CCBF] shadow-md object-cover"
          />
          <div>
            <h2 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl">Certifications & Awards</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                'ISO 27001 Certified',
                'SOC 2 Compliant',
                'Great Place to Work',
                'Innovation Leadership Award',
                'Best Enterprise Solutions Partner',
                'Customer Choice Award 2024',
              ].map((cert) => (
                <div key={cert} className="rounded-lg border border-2 border-[#D4CCBF] shadow-md bg-white p-4 text-center transition-colors hover:border-primary/50">
                  <p className="font-medium text-foreground">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white border-t border-2 border-[#D4CCBF] shadow-md">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Interested in Collaborating?</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            We welcome academic partnerships and collaborative research initiatives.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Submit Your Service Request
          </a>
        </div>
      </Section>
    </>
  );
}
