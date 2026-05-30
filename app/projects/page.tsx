'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';
import { PageHeader } from '@/components/page-header';
import { projects, categories, branches } from '@/lib/projects';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBranch, setSelectedBranch] = useState('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
      const branchMatch = selectedBranch === 'all' || project.branch === selectedBranch;
      return categoryMatch && branchMatch;
    });
  }, [selectedCategory, selectedBranch]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-blue-500/10 text-blue-400';
      case 'intermediate':
        return 'bg-green-500/10 text-green-400';
      case 'advanced':
        return 'bg-orange-500/10 text-orange-400';
      case 'phd':
        return 'bg-purple-500/10 text-purple-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'Diploma';
      case 'intermediate':
        return 'BE/BTech';
      case 'advanced':
        return 'MTech';
      case 'phd':
        return 'PhD';
      default:
        return level;
    }
  };

  const projectsList = [
    {
      title: 'Enterprise Cloud Migration',
      description: 'Migrated legacy systems to cloud infrastructure for a Fortune 500 financial services company.',
      industry: 'Financial Services',
      impact: '40% cost reduction in IT infrastructure',
      tags: ['Cloud', 'Migration', 'Infrastructure'],
    },
    {
      title: 'Digital Transformation Initiative',
      description: 'Comprehensive digital overhaul for a global manufacturing company including process automation.',
      industry: 'Manufacturing',
      impact: '60% improvement in operational efficiency',
      tags: ['Digital Transformation', 'Automation', 'Strategy'],
    },
    {
      title: 'Healthcare Platform Development',
      description: 'Built a patient engagement platform connecting millions of users to healthcare providers.',
      industry: 'Healthcare',
      impact: '2M+ active users in first year',
      tags: ['Product Development', 'Healthcare Tech', 'Scalability'],
    },
    {
      title: 'Retail Analytics Platform',
      description: 'Created real-time analytics system for inventory and sales management across 1000+ stores.',
      industry: 'Retail',
      impact: '25% increase in inventory accuracy',
      tags: ['Analytics', 'Big Data', 'Real-time'],
    },
    {
      title: 'Government Digital Services',
      description: 'Designed and built secure digital services platform for government agency serving 100K+ citizens.',
      industry: 'Government',
      impact: '90% citizen satisfaction rating',
      tags: ['Government', 'Security', 'Compliance'],
    },
    {
      title: 'FinTech Platform Launch',
      description: 'Developed full-stack fintech platform with advanced security and compliance features.',
      industry: 'Financial Technology',
      impact: '$100M+ in transaction volume processed',
      tags: ['FinTech', 'Security', 'Compliance'],
    },
  ];

  return (
    <>
      <PageHeader
        title="Projects & Portfolio"
        description="Showcase of completed projects spanning software, AI, hardware, and engineering disciplines."
      />

      {/* Category Filters */}
      <Section>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  variant={selectedCategory === cat.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.value)}
                  className={
                    selectedCategory === cat.value
                      ? 'bg-secondary hover:bg-secondary/90'
                      : 'border-border hover:border-primary'
                  }
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Filter by Branch</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedBranch === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedBranch('all')}
                className={
                  selectedBranch === 'all'
                    ? 'bg-secondary hover:bg-secondary/90'
                    : 'border-border hover:border-primary'
                }
              >
                All Branches
              </Button>
              {branches.map((branch) => (
                <Button
                  key={branch}
                  variant={selectedBranch === branch ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedBranch(branch)}
                  className={
                    selectedBranch === branch
                      ? 'bg-secondary hover:bg-secondary/90'
                      : 'border-border hover:border-primary'
                  }
                >
                  {branch}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section>
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-card border-border hover:border-primary/50 transition-all flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="border-muted-foreground/50 text-muted-foreground">
                      {project.domain}
                    </Badge>
                    <Badge className={getLevelColor(project.level)}>
                      {getLevelLabel(project.level)}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No projects found matching your filters.</p>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBranch('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section className="bg-card border-t border-border">
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Want a Similar Project?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contact us to discuss how we can help you build your next technical project.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
