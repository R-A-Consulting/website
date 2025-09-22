"use client"
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Zap,
  Brain,
  Globe,
  Users,
  Award,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "Every line of code we write is designed to move the needle for your business. We focus on outcomes, not just deliverables."
  },
  {
    icon: Zap,
    title: "Lightning-Fast Delivery",
    description: "Our agile methodology means you see working prototypes within weeks, not months. Iterate quickly and launch faster."
  },
  {
    icon: Brain,
    title: "Technical Excellence",
    description: "From cutting-edge AI to battle-tested architectures, we combine innovation with proven engineering practices."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Based in India, working with clients worldwide. We understand diverse markets and scale solutions accordingly."
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description: "You're not just a client—you're a partner. We invest in your success and provide ongoing support and optimization."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "50+ successful projects across startups to enterprises. Our work speaks louder than promises."
  }
];


const features = [
  "Agile development with weekly demos",
  "Transparent pricing and timelines",
  "Dedicated project manager for every client",
  "Code ownership and documentation",
  "Post-launch support and maintenance",
  "Scalable architecture from day one",
  "Security-first development approach",
  "Performance optimization included"
];

export default function About() {
  return (
    <section className="py-24 px-4 bg-muted/30">
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
            Why Choose
            <span className="text-gradient block">Steep Logic</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            We're not just developers—we're your strategic technology partner. We understand that great software is about solving real business problems, not just writing code.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-card border-red-500/10 hover:border-red-500/20 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-gray-900/50"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
