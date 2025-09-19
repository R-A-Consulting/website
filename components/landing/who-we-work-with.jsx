export default function WhoWeWorkWith() {
  const clients = [
    {
      title: "Startups",
      description: "that want to launch quickly and scale smartly.",
      icon: "🚀"
    },
    {
      title: "Small businesses",
      description: "looking for cost-effective digital tools.",
      icon: "🏢"
    },
    {
      title: "Enterprises",
      description: "in need of specialized projects or prototypes.",
      icon: "🏗️"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Work With</h2>
          <p className="text-lg text-muted-foreground">
            We partner with:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{client.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{client.title}</h3>
              <p className="text-muted-foreground">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
