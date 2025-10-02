"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ai from "@/assets/services/ai.png";
import product from "@/assets/services/product.png";
import webapp from "@/assets/services/web-app.png";
import cloud from "@/assets/services/cloud.png";
import automation from "@/assets/services/automation.png";
import custom from "@/assets/services/custom.png";

const primaryColor = "#ff0708";

const services = [
  {
    img: ai,
    title: "AI & Analytics",
    description: "Smart chatbots and tools that help you make better decisions and save time.",
  },
  {
    img: product,
    title: "Product Design & UX",
    description: "We turn your ideas into easy-to-use apps and websites your customers will love.",
  },
  {
    img: webapp,
    title: "Web & Mobile Development",
    description: "Get fast, reliable websites and apps that work smoothly on any device.",
  },
  {
    img: cloud,
    title: "Cloud & DevOps",
    description: "Simple and secure online solutions, with support whenever you need it.",
  },
  {
    img: automation,
    title: "Process Automation",
    description: "Let us automate your daily tasks so you can focus on growing your business.",
  },
  {
    img: custom,
    title: "Custom IT Solutions",
    description: "Software built just for you, fitting your needs and your budget.",
  },
];

function AnimatedText({ text, className }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isMobile = window.innerWidth < 768;
        const triggerOffset = isMobile ? 0.3 : 0.4;
        const animationWindow = isMobile ? 0.8 : 0.4;

        const progress = Math.max(
          0,
          Math.min(
            1,
            1 - (rect.top - windowHeight * triggerOffset) / (windowHeight * animationWindow)
          )
        );
        setProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");
  const totalWords = words.length;

  const animatedWords = words.map((word, wordIndex) => {
    let wordProgress = progress * totalWords - wordIndex;
    let opacity = Math.max(0.03, Math.min(1, wordProgress));
    return (
      <motion.span
        key={wordIndex}
        className="inline-block mr-1"
        style={{
          color: "#1e1e1e",
          opacity,
          transition: "opacity 0.35s cubic-bezier(0.25,0.46,0.45,0.94), color 0.3s ease-out"
        }}
      >
        {word}
      </motion.span>
    );
  });

  return (
    <motion.p
      ref={containerRef}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.10, 0.46, 0.45, 0.94]
      }}
    >
      {animatedWords}
    </motion.p>
  );
}

export default function Services() {

  return (
    <section className="py-20 px-4 bg-slate-50/50 w-full relative" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="text-start mb-10"
        >
          <p className="text-xs md:text-[18px] font-tektur font-medium mb-6 text-clip bg-gradient-to-r from-primary to-primary/10 bg-clip-text text-transparent">
            what we do for your business
            <span className="h-[3px] w-[9px] bg-red-500 inline-block ml-1" aria-hidden="true"></span>
          </p>
          <h2
            id="services-heading"
            className="text-2xl md:text-4xl text-slate-900 max-w-5xl leading-[1.2] md:leading-[1.2] font-semibold"
          >
            <AnimatedText
              text="We design and build reliable websites, apps, automations, and custom solutions to save you time and boost results."
            />
          </h2>
        </motion.header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-[12px] p-1.5" role="list" aria-label="Our services">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="shadow-none"
              role="listitem"
            >
              <Card className="h-full border border-[#1E1E1E]/10 shadow-none group gap-2 bg-white rounded-[12px] p-2 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="w-full aspect-2/1 bg-slate-100/50 rounded-[6px] overflow-hidden">
                    {service.img && <Image src={service.img} alt={`${service.title} service illustration`} width={1000} height={1000} className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <CardTitle className="text-xl md:text-[20px] font-semibold px-2" id={`service-${index}`}>
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed px-2 text-xs md:text-sm">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </article>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="flex flex-col sm:flex-row gap-4 gap-y-2 justify-start items-center mt-4 lg:mt-10 bg-white md:w-max w-full rounded-[25px] p-1 shadow-none border border-red-500/20 group mx-auto md:scale-110"
        >
          <span className="text-sm md:text-base text-gray-600 flex items-center gap-2 px-4 md:pr-0 pb-2 md:pb-0 order-2 md:order-1">
            <Handshake className="w-4 h-4" />
            Let's discuss your project
          </span>
          <a
            href="https://calendly.com/rishabh-steeplogic/steeplogic-30min"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 px-3 bg-primary hover:bg-gradient-to-r from-primary to-red-600 order-1 md:order-2 text-white text-sm rounded-t-[23px] sm:rounded-b-[23px] font-medium transition-all flex items-center justify-center gap-2 w-full md:w-max hover:scale-110 hover:shadow-xl hover:rotate-2 group-hover:rotate-2 group-hover:shadow-xl group-hover:scale-110"
          >
            Schedule Call
          </a>
        </motion.div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-[1px] w-full"
        style={{
          background: `linear-gradient(90deg, ${primaryColor}20 0%, ${primaryColor}80 50%, ${primaryColor}20 100%)`
        }}
      />
    </section>
  );
}
