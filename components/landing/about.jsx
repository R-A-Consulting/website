"use client"
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  CheckCheck,
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import experience from "@/assets/about/experience.png";
import pace from "@/assets/about/pace.png";
import clear from "@/assets/about/clear.png";
import support from "@/assets/about/support.png";
import Marquee from "react-fast-marquee";

const benefits = [
  {
    img: experience,
    title: "10+ Years Building Great Products",
    description: "With over a decade of experience, we’ve successfully delivered 50+ projects for startups and small businesses in India and abroad, helping them grow and innovate with confidence."
  },
  {
    img: pace,
    title: "Fast Prototypes and Weekly Updates",
    description: "We deliver a working prototype within weeks and provide weekly progress updates, so you’re always in the loop and can give feedback early and often for the best results."
  },
  {
    img: clear,
    title: "We Focus on Real Results",
    description: "Our goal is to help you increase sales, reduce costs, and streamline your operations. We measure success by the tangible improvements we bring to your business outcomes."
  },
  {
    img: support,
    title: "Support Before and After Launch",
    description: "We provide ready-to-use solutions, clear documentation, and ongoing support after launch, ensuring you’re never left alone and your product continues to succeed post-launch."
  }
];

const features = [
  "Agile development",
  "Transparent pricing",
  "Project manager",
  "Code ownership",
  "Post-launch support",
  "Scalable architecture",
  "Security-first",
  "Performance optimization",
  "Weekly updates",
  "Rapid prototyping",
  "Clear documentation",
  "Continuous delivery",
  "User-focused design",
  "Cloud ready",
  "Modern tech stack",
  "Dedicated support"
];

const headingWords = ["Engineering.", "Strategy.", "Delivery."];

export default function About() {
  return (
    <section className="bg-white w-full relative">
      <div className="max-w-6xl mx-auto space-y-16 border-x border-dashed border-red-500/20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="text-start md:text-center space-y-6 border-b border-dashed border-red-500/20 pb-10"
        >
          <p className="text-xs md:text-[18px] font-tektur font-medium mb-6 text-clip bg-gradient-to-r from-[#ff0708] to-[#ff0708]/80 bg-clip-text text-transparent w-max mx-auto">
            what's steep logic all about
            <span className="h-[3px] w-[9px] bg-red-500 inline-block ml-1" ></span>
          </p>
          <h2 className="text-2xl md:text-4xl leading-[1.1] font-semibold text-slate-900 mx-auto max-w-5xl">
            {headingWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="inline-block"
              >
                {index > 0 ? ` ${word}` : word}&nbsp;
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 rounded-[12px] items-center justify-center md:pl-10">
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
              <Card className="h-full border-none shadow-none bg-none rounded-[12px] overflow-hidden transition-all duration-300 group p-10">
                <CardHeader className="p-1 flex flex-col gap-4">
                  <Image src={benefit.img} alt={benefit.title} width={150} height={150} className=" text-[#ff0708]" />
                  <div className="flex flex-col gap-2">
                    <CardTitle className="text-xl font-semibold text-slate-900">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-xs max-w-100 leading-relaxed text-muted-foreground">
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
          className="rounded-none border-t border-dashed border-[#ff0708]/30 bg-gradient-to-r from-white via-[#ff070805] to-white dark:from-gray-950 dark:via-gray-950 dark:to-[#ff0708]/10 p-8 space-y-8 px-0 flex flex-col items-center justify-center gap-7 pb-10"
        >
          <h3 className="text-sm md:text-base font-tektur font-medium text-slate-900 w-max mx-auto m-0">
            everything's included, without any drama
            <span className="h-[3px] w-[9px] bg-slate-900 inline-block ml-1" ></span>
          </h3>

          <Marquee
            speed={70}
            gradient={true}
            className="gap-[5px] w-full"
          >
            {features.map((feature) => (
              <div
                key={feature}
                role="listitem"
                className="flex items-center gap-2 p-2 mx-[5px] pr-4 rounded-full bg-white/80 dark:bg-gray-950/80 border border-[#ff070840] dark:border-[#ff0708] backdrop-blur-sm"
              >
                <CheckCheck className="w-4 h-4 text-[#ff0708] flex-shrink-0" strokeWidth={1.5}/>
                <span className="text-xs text-slate-900 dark:text-slate-100">
                  {feature}
                </span>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-[1px] w-full z-10"
        style={{
          background: "linear-gradient(90deg, #ff070820 0%, #FF070880 50%, #ff070820 100%)"
        }}
      />
    </section>
  );
}
