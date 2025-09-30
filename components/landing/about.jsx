"use client"
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import experience from "@/assets/about/experience.png";
import pace from "@/assets/about/pace.png";
import clear from "@/assets/about/clear.png";
import support from "@/assets/about/support.png";

const benefits = [
  {
    img: experience,
    title: "Proven Experience",
    description: "50+ successful projects; we’ve built for startups and SMEs across India and abroad."
  },
  {
    img: pace,
    title: "Lightning‑Fast Pace",
    description: "Working prototype in weeks; weekly demos so you see progress quickly."
  },
  {
    img: clear,
    title: "Clear Results",
    description: "We focus on outcomes—more sales, lower costs, faster operations."
  },
  {
    img: support,
    title: "Strong Support",
    description: "Production‑ready delivery, documentation, and ongoing help after launch."
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
    <section className="py-20 px-4 bg-white w-full">
      <div className="max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="text-start md:text-center space-y-6"
        >
          <p className="text-xs md:text-[18px] font-tektur font-medium mb-6 text-clip bg-gradient-to-r from-[#ff0708] to-[#ff0708]/80 bg-clip-text text-transparent w-max mx-auto">
            what's steep logic all about
            <span className="h-[3px] w-[9px] bg-red-500 inline-block ml-1" ></span>
          </p>
          <h2
            className="text-2xl md:text-4xl leading-[1.1] font-semibold text-slate-900 mx-auto max-w-5xl"
          >
            Engineering. Strategy. Delivery.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 rounded-[12px]">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-[#1E1E1E]/10 shadow-none bg-white rounded-[12px] overflow-hidden transition-all duration-300 group p-0">
                <CardHeader className="p-1 flex flex-col gap-4">
                  <Image src={benefit.img} alt={benefit.title} width={1000} height={1000} className=" text-[#ff0708]" />
                  <div className="flex flex-col gap-2">
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="rounded-[24px] border border-[#ff0708]/15 bg-gradient-to-br from-white via-white to-[#ff0708]/5 dark:from-gray-950 dark:via-gray-950 dark:to-[#ff0708]/10 p-8 space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                What's Included In Every Engagement
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                Everything we ship is production-ready, documented, and supported so your team can own it from day one.
              </p>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#ff0708] font-semibold">
              delivery without drama
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 rounded-[10px] bg-white/80 dark:bg-gray-950/80 border border-white/40 dark:border-gray-800/60 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-slate-900 dark:text-slate-100">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
