"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Brain,
  Code,
  Smartphone,
  Globe,
  Zap,
  Database,
  Cloud,
  Shield,
  Bot,
  Palette,
  Rocket,
  Settings,
  Layers
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Leverage AI and automation to streamline your business, from custom models to smart assistants.",
    features: [
      "Custom AI Models",
      "Chatbot Development",
      "Process Automation"
    ]
  },
  {
    icon: Code,
    title: "Software & Web Development",
    description: "End-to-end development of business software and web platforms tailored to your needs.",
    features: [
      "Enterprise Software",
      "API Development",
      "Web Portals"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile & Cross-Platform Apps",
    description: "Design and develop responsive mobile and web applications for all devices.",
    features: [
      "React Native Apps",
      "Progressive Web Apps",
      "Native iOS/Android"
    ]
  },
  {
    icon: Database,
    title: "Data & Cloud Solutions",
    description: "Transform your data into insights and scale with robust cloud infrastructure.",
    features: [
      "Analytics Dashboards",
      "Data Warehousing",
      "Cloud Deployment"
    ]
  },
  {
    icon: Shield,
    title: "Security & DevOps",
    description: "Protect your assets and ensure reliable delivery with modern security and DevOps practices.",
    features: [
      "Security Audits",
      "CI/CD Pipelines",
      "Performance Optimization"
    ]
  },
  {
    icon: Palette,
    title: "UI/UX & Startup Acceleration",
    description: "Craft beautiful interfaces and accelerate your startup with expert design and MVP development.",
    features: [
      "Interface Design",
      "Prototyping",
      "MVP Development"
    ]
  }
];

export default function Services() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
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
            Everything
            <span className="text-gradient block">Tech</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in turning complex technical challenges into elegant solutions. From AI-powered automation to enterprise-scale applications, we build the digital infrastructure that powers modern businesses.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="shadow-none"
            >
              <Card className="h-full border-red-500/10 hover:border-red-500/20 transition-all duration-300 border-2 shadow-none group gap-2">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-xs font-medium bg-red-500/10 text-red-600 rounded-full border border-red-500/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Don't see exactly what you need? We love building custom solutions.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full">
            <Layers className="w-5 h-5 text-red-500" />
            <span className="text-foreground font-medium">Custom Development Available</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
