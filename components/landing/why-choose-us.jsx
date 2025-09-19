export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Client-first approach",
      description: "Your goals guide everything we build.",
      icon: "🎯"
    },
    {
      title: "Agile delivery",
      description: "Smaller, faster releases so you see results quickly.",
      icon: "⚡"
    },
    {
      title: "Technical depth",
      description: "From AI to cloud, we combine new tech with solid engineering practices.",
      icon: "🔧"
    },
    {
      title: "Global outlook",
      description: "Based in India, working with clients in the US, UK, and beyond.",
      icon: "🌍"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-3xl flex-shrink-0">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
