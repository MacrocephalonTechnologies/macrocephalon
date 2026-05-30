import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { PageHeader } from '@/components/page-header';
import { ArrowRight, Brain, Code2, Wrench } from 'lucide-react';

const divisions = [
  {
    title: 'IT Division: Software & Services',
    description: 'Custom software development, web applications, UI/UX design, and SaaS solutions.',
    icon: Code2,
    accent: 'primary',
    services: [
      {
        title: 'Web Development',
        image: '/services/web-development.png',
        description: 'Modern, responsive web applications built with latest frameworks.',
        services: ['React & Next.js', 'Vue.js development', 'Full-stack solutions', 'Progressive Web Apps'],
      },
      {
        title: 'Custom Software',
        image: '/services/custom-software.png',
        description: 'Tailored software solutions for desktop, mobile, and enterprise.',
        services: ['Desktop applications', 'Mobile development', 'Business software', 'Automation tools'],
      },
      {
        title: 'API Development',
        image: '/services/api-development.png',
        description: 'Robust APIs and integrations connecting systems seamlessly.',
        services: ['REST APIs', 'GraphQL APIs', 'Third-party integrations', 'Webhook systems'],
      },
      {
        title: 'SaaS Products',
        image: '/services/saas-products.png',
        description: 'Complete SaaS platform development and deployment.',
        services: ['Architecture design', 'Multi-tenant systems', 'Deployment & scaling', 'Maintenance'],
      },
      {
        title: 'UI/UX Design',
        image: '/services/ui-ux-design.png',
        description: 'User-centered design for engaging digital experiences.',
        services: ['Design systems', 'Prototyping', 'Figma to code', 'Responsive layouts'],
      },
      {
        title: 'Database Design',
        image: '/services/database-design.png',
        description: 'Scalable database solutions for any data requirements.',
        services: ['SQL databases', 'NoSQL solutions', 'Cloud-hosted DBs', 'Performance optimization'],
      },
    ],
  },
  {
    title: 'AI Division: Machine Learning',
    description: 'AI model development, LLM integration, and intelligent automation solutions.',
    icon: Brain,
    accent: 'secondary',
    services: [
      {
        title: 'AI/ML Models',
        image: '/services/ai-ml-models.png',
        description: 'Custom trained models for classification, regression, and prediction.',
        services: ['Model training', 'Fine-tuning', 'Custom datasets', 'Performance optimization'],
      },
      {
        title: 'LLM Integration',
        image: '/services/llm-integration.png',
        description: 'Integrate cutting-edge language models into your applications.',
        services: ['OpenAI GPT', 'Anthropic Claude', 'Open-source LLMs', 'RAG systems'],
      },
      {
        title: 'Computer Vision',
        image: '/services/computer-vision.png',
        description: 'Image processing and visual understanding solutions.',
        services: ['Object detection', 'Image classification', 'OCR systems', 'Video analytics'],
      },
      {
        title: 'NLP & Chatbots',
        image: '/services/nlp-chatbots.png',
        description: 'Intelligent conversational interfaces and text analysis.',
        services: ['Chatbot development', 'Text classification', 'Sentiment analysis', 'Q&A systems'],
      },
      {
        title: 'ML Pipelines',
        image: '/services/ml-pipelines.png',
        description: 'Complete end-to-end machine learning infrastructure.',
        services: ['Data preprocessing', 'Pipeline automation', 'Model deployment', 'Monitoring'],
      },
      {
        title: 'Edge AI',
        image: '/services/edge-ai.png',
        description: 'Deploy AI models on embedded devices and edge hardware.',
        services: ['TinyML deployment', 'TensorFlow Lite', 'Raspberry Pi/ESP32', 'Optimization'],
      },
    ],
  },
  {
    title: 'Project Division: Engineering Projects',
    description: 'End-to-end engineering project execution across all disciplines and academic levels.',
    icon: Wrench,
    accent: 'primary',
    services: [
      {
        title: 'Academic Projects',
        image: '/services/academic-projects.png',
        description: 'Complete support for academic project submissions.',
        services: ['PhD research support', 'MTech projects', 'BE/BTech projects', 'Diploma projects'],
      },
      {
        title: 'Research & Publishing',
        image: '/services/research-publishing.png',
        description: 'Research implementation and academic paper publishing support.',
        services: ['Paper writing', 'IEEE/Springer submission', 'Journal publication', 'Research design'],
      },
      {
        title: 'Hardware Projects',
        image: '/services/hardware-projects.png',
        description: 'Embedded systems and hardware prototyping across disciplines.',
        services: ['Embedded systems', 'Analog circuits', 'RF engineering', 'Instrumentation'],
      },
      {
        title: 'MATLAB Projects',
        image: '/services/matlab-projects.png',
        description: 'Simulation and modeling projects using MATLAB and Simulink.',
        services: ['Signal processing', 'Control systems', 'Power systems', 'Communications'],
      },
      {
        title: 'IoT Projects',
        image: '/services/iot-projects.png',
        description: 'Internet of Things systems spanning sensors, connectivity, and cloud.',
        services: ['Sensor integration', 'Edge computing', 'Cloud platforms', 'Data analytics'],
      },
      {
        title: 'All Branches',
        image: '/services/all-branches.png',
        description: 'Support across all engineering disciplines and specializations.',
        services: ['CSE & AI/ML', 'ECE & Embedded', 'EE & Power', 'Mechanical & Robotics', 'Civil Engineering'],
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Everything you need, built right. Complete solutions across three integrated divisions."
      />

      {divisions.map((division, index) => {
        const Icon = division.icon;
        const iconColor = division.accent === 'secondary' ? 'text-secondary' : 'text-primary';
        const hoverBorder = division.accent === 'secondary' ? 'hover:border-secondary/50' : 'hover:border-primary/50';

        return (
          <Section key={division.title} className={index === 1 ? 'bg-muted/50' : undefined}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 ${iconColor}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-foreground">{division.title}</h2>
                  <p className="mt-2 text-muted-foreground">{division.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {division.services.map((service) => (
                  <article
                    key={service.title}
                    className={`group overflow-hidden rounded-xl border border-border bg-card transition-all ${hoverBorder} hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-black">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    </div>
                    <div className="flex min-h-[270px] flex-col p-6">
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
                      <ul className="mt-5 grid gap-2">
                        {service.services.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9A84C]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Section>
        );
      })}

      <Section className="bg-muted/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Which Service Fits You?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the division and service that best matches your needs.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Client Type</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Best Fit</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Key Services</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Startups & SMEs', 'IT Division + AI Division', 'Web/app development, AI integration, MVP builds'],
                ['Established Firms', 'IT Division + Project Division', 'Custom software, process automation, enterprise solutions'],
                ['Engineering Students', 'Project Division', 'Final year projects, viva prep, paper publishing'],
                ['Researchers & PhD', 'Project Division', 'Research support, paper writing, publication help'],
                ['Enterprises', 'All Divisions', 'Complete transformation, AI/ML, custom engineering'],
                ['Local Businesses', 'IT Division', 'Affordable web/mobile apps, business automation'],
              ].map(([type, fit, services]) => (
                <tr key={type} className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 text-foreground font-medium">{type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{fit}</td>
                  <td className="px-4 py-3 text-muted-foreground">{services}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="bg-card border-t border-border">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Tell Us Your Requirement</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;ll find the right solution and team for your project.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <Link href="/contact">
              Submit Your Service Request
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
