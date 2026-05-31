import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { PageHeader } from '@/components/page-header';
import { divisions } from '@/data/services';
import { ArrowRight, Brain, Code2, Wrench } from 'lucide-react';

const divisionIcons = [Code2, Brain, Wrench];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        description="Everything you need, built right. Complete solutions across three integrated divisions."
      />

      {divisions.map((division, index) => {
        const Icon = divisionIcons[index] ?? Code2;
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
                    id={service.slug}
                    className={`group scroll-mt-28 overflow-hidden rounded-xl border border-border bg-card transition-all ${hoverBorder} hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10`}
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
