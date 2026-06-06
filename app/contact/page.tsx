'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Section } from '@/components/section';
import { PageHeader } from '@/components/page-header';
import { Check, Clock, Mail, MapPin, Send } from 'lucide-react';

const serviceOptions = [
  'Web Development',
  'Custom Software',
  'AI / Machine Learning',
  'LLM Integration',
  'IoT / Embedded Hardware',
  'Academic Project',
  'Research Publishing',
  'MATLAB / Simulation',
  'Other',
];

const projectTypes = [
  'New project',
  'Upgrade existing system',
  'Bug fixing / maintenance',
  'Prototype / proof of concept',
  'Research support',
  'Consultation only',
];

const supportNeeds = [
  'UI/UX design',
  'Frontend',
  'Backend',
  'Database',
  'API integration',
  'Hardware design',
  'Documentation',
  'Deployment',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    customService: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: '',
    message: '',
  });
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleNeed = (need: string) => {
    setSelectedNeeds((current) =>
      current.includes(need) ? current.filter((item) => item !== need) : [...current, need],
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    try {
      const response = await fetch('/api/service-requests', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...formData, selectedNeeds }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          customService: '',
          projectType: '',
          budget: '',
          timeline: '',
          details: '',
          message: '',
        });
        setSelectedNeeds([]);
        setSubmitted(false);
      }, 3000);
    } catch {
      setSubmitError('Could not save the request. Please try again.');
    }
  };

  return (
    <>
      <PageHeader
        title="Submit Your Service Request"
        description="Share whatever details you have. Every field is optional, and you can type your own requirement if it is not listed."
      />

      <Section>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_2fr]">
          <aside className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Request Support</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Use this form for software, AI, hardware, academic, research, and engineering service requests.
              </p>
            </div>

            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'support@macrocephalon.com',
                href: 'mailto:support@macrocephalon.com',
              },
              {
                icon: MapPin,
                label: 'Office',
                value: 'Jaysingpur, Near Shivpark Colony - 416101, Maharashtra, India',
                href: '#',
              },
              {
                icon: Clock,
                label: 'Response Time',
                value: 'Usually within 24 business hours.',
                href: '#',
              },
            ].map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.label} className="flex gap-4 rounded-xl border-2 border-[#D4CCBF] bg-white shadow-md p-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#D4A574]/10">
                    <Icon className="h-5 w-5 text-[#D4A574]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {info.label}
                    </p>
                    <a href={info.href} className="mt-1 block text-sm font-medium text-foreground hover:text-primary">
                      {info.value}
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Quick Contact Section Header */}
            <div className="text-center p-4 rounded-xl border-2 border-[#D4CCBF] bg-[#EBE9E5]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1F2937]">Quick Contact</h3>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border-2 border-[#D4CCBF] bg-[#EBE9E5] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1F2937] mb-4">Contact</h3>
              <div className="space-y-3">
                <div>
                  <Input
                    type="email"
                    placeholder="WhatsApp / Email"
                    value={formData.email}
                    name="email"
                    onChange={handleChange}
                    className="border-[#D4CCBF] bg-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#6B7280] mb-1 block">Message</label>
                  <Input
                    type="text"
                    placeholder="Your message"
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    className="border-[#D4CCBF] bg-white"
                  />
                </div>
                <button className="w-full bg-[#D4A574] hover:bg-[#B8860B] text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all">
                  Send
                </button>
              </div>
            </div>
          </aside>

          <Card id="service-request-form" className="border-[#D4A574]/15 bg-white shadow-lg">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-16 text-center">
                  <p className="text-2xl font-bold text-foreground">Service request submitted.</p>
                  <p className="mt-3 text-muted-foreground">We will review your details and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A574]">
                      Service Request Form
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-foreground">Tell us what you need</h2>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Name">
                      <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                    </Field>
                    <Field label="Email">
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                    </Field>
                    <Field label="Phone / WhatsApp">
                      <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Optional contact number" />
                    </Field>
                    <Field label="Company / College">
                      <Input name="company" value={formData.company} onChange={handleChange} placeholder="Organization name" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Service Category">
                      <Select name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </Select>
                    </Field>
                    <Field label="If not listed, type service here">
                      <Input
                        name="customService"
                        value={formData.customService}
                        onChange={handleChange}
                        placeholder="Custom service requirement"
                      />
                    </Field>
                    <Field label="Project Type">
                      <Select name="projectType" value={formData.projectType} onChange={handleChange}>
                        <option value="">Select project type</option>
                        {projectTypes.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </Select>
                    </Field>
                    <Field label="Timeline">
                      <Select name="timeline" value={formData.timeline} onChange={handleChange}>
                        <option value="">Select timeline</option>
                        <option>Urgent</option>
                        <option>1-2 weeks</option>
                        <option>1 month</option>
                        <option>2-3 months</option>
                        <option>Flexible</option>
                      </Select>
                    </Field>
                    <Field label="Budget Range">
                      <Select name="budget" value={formData.budget} onChange={handleChange}>
                        <option value="">Select budget range</option>
                        <option>Need estimate</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large / enterprise</option>
                        <option>Academic budget</option>
                      </Select>
                    </Field>
                    <Field label="Short Requirement">
                      <Input
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Example: AI chatbot for website"
                      />
                    </Field>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-medium text-foreground">Support Needed</label>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {supportNeeds.map((need) => (
                        <SelectionButton
                          key={need}
                          label={need}
                          selected={selectedNeeds.includes(need)}
                          onClick={() => toggleNeed(need)}
                        />
                      ))}
                    </div>
                  </div>

                  <Field label="Project Details / Message">
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your service request, problem, files you have, expected output, academic level, technology preference, or any extra notes..."
                      rows={8}
                      className="resize-none"
                    />
                  </Field>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#D4A574] to-[#B8860B] font-semibold text-white shadow-lg shadow-orange-500/25 hover:from-[#B8860B] hover:to-[#D4A574]"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Service Request
                  </Button>
                  {submitError ? (
                    <p className="text-center text-sm font-medium text-destructive">{submitError}</p>
                  ) : null}
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">{label}</label>
      {children}
    </div>
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="flex h-10 w-full rounded-md border border-input bg-input px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    />
  );
}

function SelectionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex min-h-10 items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-xs font-semibold transition-colors ${
        selected
          ? 'border-[#D4A574] bg-gradient-to-r from-[#D4A574]/35 to-[#D4A574]/20 text-white shadow-[0_0_16px_rgba(255,122,24,0.22)]'
          : 'border-border bg-input text-muted-foreground hover:border-[#D4A574]/50 hover:text-foreground'
      }`}
    >
      <span>{label}</span>
      {selected ? <Check className="h-4 w-4 flex-shrink-0 text-[#D4A574]" /> : null}
    </button>
  );
}
