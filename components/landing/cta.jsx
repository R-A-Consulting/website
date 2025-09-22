"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Calendar,
  MessageCircle,
  CheckCircle
} from "lucide-react";

const ctaFeatures = [
  "Free consultation and project assessment",
  "Detailed proposal within 48 hours",
  "Fixed pricing with no hidden costs",
  "Start development within 1 week",
  "Dedicated project manager",
  "Direct access to development team"
];

export default function CTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-red-500/5 via-background to-red-500/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-red-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-600">Limited Availability</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to Build
                <span className="text-gradient block">Something Amazing?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                Join the growing list of businesses that have transformed their operations with our expertise. Let's discuss your project and see how we can help you achieve your goals.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-3 mb-8">
              {ctaFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Project announcement */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-full mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-sm md:text-base text-foreground font-medium">
                Now accepting projects for Oct–Dec 2025
              </p>
            </div>
          </motion.div>

          {/* Right side - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-card border-red-500/20 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Get Started Today</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Schedule a free consultation call. We'll discuss your project, assess your needs, and provide a detailed proposal with clear timelines and pricing.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-red-500/5 rounded-lg border border-red-500/10">
                  <Calendar className="w-5 h-5 text-red-500" />
                  <div>
                    <div className="font-medium">30-minute consultation</div>
                    <div className="text-sm text-muted-foreground">Completely free, no obligations</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-500/5 rounded-lg border border-green-500/10">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-medium">Proposal within 48 hours</div>
                    <div className="text-sm text-muted-foreground">Detailed plan and pricing</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold text-lg px-8 py-4 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-red-500/30 text-red-500 hover:bg-red-500/10 rounded-full font-semibold px-8 py-4"
                >
                  View Portfolio
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  No spam, ever. We respect your privacy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
