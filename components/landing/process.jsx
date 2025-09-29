"use client"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Lightbulb,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Discovery & Strategy",
    description: "We dive deep into your business challenges, goals, and vision. Through collaborative workshops, we map out the optimal technical solution.",
    duration: "1-2 weeks",
    deliverables: [
      "Technical requirements document",
      "Project roadmap and timeline",
      "Architecture recommendations",
      "Cost estimates and options"
    ]
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Design & Planning",
    description: "We create detailed designs, wireframes, and technical specifications. Every decision is made with scalability and user experience in mind.",
    duration: "1-2 weeks",
    deliverables: [
      "UI/UX designs and prototypes",
      "Technical architecture plan",
      "Database schema design",
      "API specifications"
    ]
  },
  {
    step: "03",
    icon: Code,
    title: "Development & Iteration",
    description: "Our agile development process means you see working software early and often. Weekly demos ensure we're building exactly what you need.",
    duration: "4-8 weeks",
    deliverables: [
      "Weekly working prototypes",
      "Regular progress updates",
      "Code reviews and testing",
      "Documentation updates"
    ]
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We handle deployment, monitoring, and provide ongoing support. Your success doesn't end at launch—we're here for the long term.",
    duration: "Ongoing",
    deliverables: [
      "Production deployment",
      "Performance optimization",
      "User training and documentation",
      "30-day post-launch support"
    ]
  }
];

const principles = [
  {
    icon: Clock,
    title: "Transparent Communication",
    description: "Daily updates, weekly demos, and direct access to your development team. No surprises, just results."
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "You're involved at every step. We value your domain expertise and work together to build the best solution."
  },
  {
    icon: CheckCircle,
    title: "Quality First",
    description: "Every line of code is tested, reviewed, and optimized. We build software that scales and lasts."
  }
];

export default function Process() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How We
            <span className="text-gradient block">Work</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Our proven process turns complex ideas into successful digital products. We focus on clarity, speed, and building solutions that grow with your business.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="space-y-8 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                x: 4,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="glass-card border-red-500/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-600"></div>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Step number and icon */}
                    <div className="text-center lg:text-left">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 mb-4">
                        <step.icon className="w-10 h-10 text-red-500" />
                      </div>
                      <div className="text-4xl font-bold text-muted-foreground mb-2">
                        {step.step}
                      </div>
                      <div className="text-sm text-red-500 font-medium">
                        {step.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-3 text-red-500">Key Deliverables:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow between steps */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-red-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Principles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-card border-red-500/10 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{principle.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Building?
            </h3>
            <p className="text-muted-foreground mb-8">
              Every great project starts with a conversation. Let's discuss your vision and see how we can bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Schedule a Call
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 border border-red-500/30 text-red-500 rounded-full font-semibold hover:bg-red-500/10 transition-colors">
                View Project Timeline
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
