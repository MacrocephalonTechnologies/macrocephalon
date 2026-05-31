interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-gradient-to-b from-card to-background py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 lg:mb-6">{title}</h1>
        {description && (
          <p className="text-center text-lg sm:text-xl lg:text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
        )}
        {children && (
          <div className="text-justify">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
