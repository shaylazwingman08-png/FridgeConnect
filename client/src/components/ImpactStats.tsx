const stats = [
  { number: "200+", label: "lbs of food redistributed weekly" },
  { number: "100%", label: "Free & Accessible" },
  { number: "2", label: "Locations" },
  { number: "1", label: "dream to combat food insecurity and waste"  }
];

export default function ImpactStats() {
  return (
    <section className="py-10 md:py-14 bg-card">
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
