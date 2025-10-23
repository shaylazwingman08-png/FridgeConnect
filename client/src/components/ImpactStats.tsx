const stats = [
  { number: "500+", label: "Meals Shared Monthly" },
  { number: "2", label: "Locations" },
  { number: "24/7", label: "Always Open" },
  { number: "100%", label: "Free & Accessible" }
];

export default function ImpactStats() {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              data-testid={`stat-${index + 1}`}
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
