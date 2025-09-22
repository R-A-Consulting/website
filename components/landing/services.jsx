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
    title: "Generative AI Solutions",
    description: "Build intelligent systems with custom AI models, chatbots, and automation that learn and adapt to your business needs.",
    features: ["Custom AI Models", "Chatbot Development", "Process Automation", "Machine Learning"]
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "End-to-end development of business software tailored to your unique processes and workflow requirements.",
    features: ["Enterprise Software", "API Development", "Microservices", "Legacy Modernization"]
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Apps",
    description: "Design and develop responsive applications that deliver exceptional user experiences across all devices.",
    features: ["React Native Apps", "Progressive Web Apps", "Cross-platform", "Native iOS/Android"]
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "From simple landing pages to complex platforms, we create websites that perform and scale beautifully.",
    features: ["E-commerce Platforms", "CMS Development", "Landing Pages", "Web Portals"]
  },
  {
    icon: Zap,
    title: "Automation & Integration",
    description: "Streamline operations by automating repetitive tasks and connecting your existing tools seamlessly.",
    features: ["Workflow Automation", "API Integrations", "Data Sync", "Business Logic"]
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Transform raw data into actionable insights with robust data architecture and analytics platforms.",
    features: ["Data Warehousing", "Business Intelligence", "Analytics Dashboards", "ETL Pipelines"]
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Deploy and manage scalable cloud solutions that grow with your business and reduce operational overhead.",
    features: ["AWS/Azure/GCP", "DevOps", "Auto-scaling", "Serverless"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions and compliance frameworks.",
    features: ["Security Audits", "Compliance", "Penetration Testing", "Threat Monitoring"]
  },
  {
    icon: Bot,
    title: "AI-Powered Tools",
    description: "Create intelligent tools that automate complex tasks and enhance productivity across your organization.",
    features: ["AI Assistants", "Recommendation Engines", "Predictive Analytics", "Smart Workflows"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Craft beautiful, intuitive interfaces that users love and that drive business results.",
    features: ["User Research", "Interface Design", "Prototyping", "Design Systems"]
  },
  {
    icon: Rocket,
    title: "Startup Acceleration",
    description: "Fast-track your startup journey with MVP development, product strategy, and technical consulting.",
    features: ["MVP Development", "Product Strategy", "Technical Consulting", "Growth Hacking"]
  },
  {
    icon: Settings,
    title: "DevOps & Deployment",
    description: "Implement robust deployment pipelines and monitoring systems to ensure reliable software delivery.",
    features: ["CI/CD Pipelines", "Monitoring", "Performance Optimization", "Containerization"]
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
            >
              <Card className="h-full glass-card border-red-500/10 hover:border-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 group">
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
