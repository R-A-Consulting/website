"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Rocket,
  Building2,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const clientTypes = [
  {
    icon: Rocket,
    title: "Startups",
    subtitle: "Launch Fast. Scale Smart.",
    description: "You're building something new and need a technical partner who moves at startup speed. We help you validate ideas quickly and build MVPs that attract investors.",
    challenges: [
      "Limited technical resources",
      "Need to launch quickly",
      "Budget constraints",
      "Rapid iteration required"
    ],
    solutions: [
      "MVP development in 4-6 weeks",
      "Scalable architecture from day one",
      "Fixed-price packages available",
      "Weekly demos and iterations"
    ],
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500"
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    subtitle: "Digital Transformation Made Simple.",
    description: "You know your business inside out, but need help digitizing your processes. We build custom tools that streamline your operations and boost efficiency.",
    challenges: [
      "Manual processes slowing growth",
      "Data scattered across tools",
      "Customer experience gaps",
      "Limited IT expertise"
    ],
    solutions: [
      "Process automation workflows",
      "Integrated business systems",
      "Customer portal development",
      "Training and handover included"
    ],
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-500"
  },
  {
    icon: TrendingUp,
    title: "Growing Companies",
    subtitle: "Scale Without the Growing Pains.",
    description: "You're expanding rapidly and your current systems can't keep up. We help you scale infrastructure, automate processes, and maintain quality as you grow.",
    challenges: [
      "Current systems breaking under load",
      "Manual processes not scaling",
      "Team struggling with tech debt",
      "Security concerns with growth"
    ],
    solutions: [
      "Infrastructure scaling solutions",
      "Automated deployment pipelines",
      "Performance optimization",
      "Security and compliance setup"
    ],
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500"
  }
];


export default function Clients() {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Who We
            <span className="text-gradient block">Work With</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            From ambitious founders to established enterprises, we partner with businesses that are serious about leveraging technology to achieve their goals.
          </p>
        </motion.div>

        {/* Client types */}
        <div className="space-y-16 mb-20">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="glass-card border-red-500/10 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-50`}></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center`}>
                      <client.icon className={`w-8 h-8 ${client.iconColor}`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl md:text-3xl font-bold mb-2">
                        {client.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {client.subtitle}
                      </p>
                    </div>
                  </div>
                  <CardDescription className="text-lg leading-relaxed">
                    {client.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4 text-red-500">Challenges We Solve:</h4>
                      <ul className="space-y-2">
                        {client.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-green-500">Our Solutions:</h4>
                      <ul className="space-y-2">
                        {client.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our growing list of successful partners?
          </p>
          <div className="inline-flex items-center gap-2 text-red-500 font-medium hover:text-red-600 transition-colors cursor-pointer group">
            <span>Start Your Success Story</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
