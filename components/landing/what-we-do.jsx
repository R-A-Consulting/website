export default function WhatWeDo() {
  const services = [
    {
      title: "Generative AI Solutions",
      description: "Build AI-powered tools, chatbots, and automation that make work smarter and faster.",
      icon: "🤖"
    },
    {
      title: "Custom Software Development",
      description: "End-to-end development of business software tailored to your unique processes.",
      icon: "💻"
    },
    {
      title: "App Development",
      description: "Design and development of mobile and web apps that focus on speed, ease of use, and scalability.",
      icon: "📱"
    },
    {
      title: "Web Development",
      description: "From simple landing pages to complex platforms, we create websites that perform and look great.",
      icon: "🌐"
    },
    {
      title: "Automation & Data Solutions",
      description: "Automate repetitive tasks and turn raw data into actionable insights.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Steep Logic, we cover the full journey of bringing technology ideas to life:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
