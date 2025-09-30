"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
  Layers,
  Video,
  Handshake
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ai from "@/assets/services/ai.png";
import product from "@/assets/services/product.png";
import webapp from "@/assets/services/web-app.png";
import cloud from "@/assets/services/cloud.png";
import automation from "@/assets/services/automation.png";
import custom from "@/assets/services/custom.png";

const services = [
  {
    img: ai,
    title: "AI for Business",
    description: "Assistants, chatbots, and smart tools that save time and improve decisions.",
  },
  {
    img: product,
    title: "Product Design",
    description: "Product strategy, UX/UI, and prototypes that turn ideas into working products.",
  },
  {
    img: webapp,
    title: "Web & App Development",
    description: "Fast, secure websites and mobile apps from idea to launch.",
  },
  {
    img: cloud,
    title: "Cloud & DevOps",
    description: "Reliable, scalable, and cost-efficient setup, monitoring, and management.",
  },
  {
    img: automation,
    title: "Automation & Integrations",
    description: "Connect systems and automate routine tasks to cut manual work.",
  },
  {
    img: custom,
    title: "Custom Solutions",
    description: "Tailor-made projects built around your goals, processes, and budget.",
  }
];

// Animated text component for scroll-based word color animation
function AnimatedText({ text, className }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Responsive trigger: lower on small screens, higher on large screens
        const isMobile = window.innerWidth < 768;
        const triggerOffset = isMobile ? 0.3 : 0.4; // 25% on mobile, 10% on desktop
        const animationWindow = isMobile ? 0.8 : 0.4; // 50% window on mobile, 60% on desktop

        const progress = Math.max(0, Math.min(1,
          1 - ((rect.top - windowHeight * triggerOffset) / (windowHeight * animationWindow))
        ));
        setProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split text into words
  const words = text.split(' ');
  const totalWords = words.length;

  // Calculate how many words should be red based on progress
  const wordsToColor = Math.floor(progress * totalWords);

  const animatedWords = words.map((word, wordIndex) => {
    const isRed = wordIndex < wordsToColor;
    const shouldTransition = wordIndex === wordsToColor - 1 || wordIndex === wordsToColor;

    return (
      <motion.span
        key={wordIndex}
        className="inline-block mr-1"
        style={{
          color: isRed ? '#1e1e1e' : '#ff070810',
          transition: shouldTransition ? 'color 0.3s ease-out' : 'none'
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {animatedWords}
    </motion.p>
  );
}

export default function Services() {
  return (
    <section className="py-20 px-4 bg-slate-50/50 w-full relative">
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
          className="text-start mb-10"
        >
          <p className="text-xs md:text-[18px] font-tektur font-medium mb-6 text-clip bg-gradient-to-r from-[#ff0708] to-[#ff0708]/10 bg-clip-text text-transparent">
            what we do for your business
            <span className="h-[3px] w-[9px] bg-red-500 inline-block ml-1" ></span>
          </p>
          <AnimatedText
            text="We design and build reliable websites, apps, automations, and custom solutions to save you time and boost results."
            className="text-2xl md:text-4xl text-slate-900 max-w-5xl leading-[1.2] md:leading-[1.2] font-semibold"
          />
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-[12px] p-1.5 ">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="shadow-none"
            >
              <Card className="h-full border border-[#1E1E1E]/10 shadow-none group gap-2 bg-white rounded-[12px] p-2 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="w-full aspect-2/1 bg-slate-100/50 rounded-[6px] overflow-hidden">
                    {service.img && <Image src={service.img} alt={service.title} width={1000} height={1000} className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                  <CardTitle className="text-xl md:text-2xl font-semibold px-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed px-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
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
          className="flex flex-col sm:flex-row gap-4 gap-y-2 justify-start items-center mt-4 lg:mt-10 bg-white md:w-max w-full rounded-[25px] p-1 shadow-none border border-red-500/20 group mx-auto"
        >
          <span className="text-sm md:text-base text-gray-600 flex items-center gap-2 px-4 md:pr-0 pb-2 md:pb-0 order-2 md:order-1">
            <Handshake className="w-4 h-4" />
            Let's discuss your project
          </span>
          <a
            href="https://calendly.com//30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 px-3 bg-[#ff0708] hover:bg-gradient-to-r from-[#ff0708] to-[#ff4757] order-1 md:order-2 text-white text-sm rounded-t-[23px] sm:rounded-b-[23px] font-medium transition-all flex items-center justify-center gap-2 w-full md:w-max hover:scale-110 hover:shadow-xl hover:rotate-2 group-hover:rotate-2 group-hover:shadow-xl group-hover:scale-110"
          >
            Schedule Call
          </a>
        </motion.div>
      </div>
      {/* Gradient border at the bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 bottom-0 h-[1px] w-full"
        style={{
          background: "linear-gradient(90deg, #ff070820 0%, #FF070880 50%, #ff070820 100%)"
        }}
      />
    </section>
  );
}
