import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/section';

export default function ComingSoon() {
  return (
    <Section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
          Coming Soon
        </h1>
        <p className="text-lg text-muted-foreground">
          This page is currently in development. We&apos;re working hard to bring you something amazing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button asChild className="bg-[#D4A574] hover:bg-[#B8860B] text-white">
            <Link href="/">Back to Home</Link>
          </Button>
          <Button asChild variant="outline" className="border-2 border-[#D4CCBF] text-[#1F2937] hover:bg-[#F8F7F5]">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
