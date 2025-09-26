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
  Layers
} from "lucide-react";
import { useRef, useState, useEffect } from "react";
import ai from "@/assets/services/ai.png";
// import software from "@/assets/services/software.png";
// import mobile from "@/assets/services/mobile.png";
// import data from "@/assets/services/data.png";
// import security from "@/assets/services/security.png";
// import uiux from "@/assets/services/uiux.png";


const services = [
  {
    img: ai,
    title: "AI & Automation",
    description: "Leverage AI and automation to streamline your business, from custom models to smart assistants.",
  },
  {
    img: null,
    title: "Software & Web Development",
    description: "End-to-end development of business software and web platforms tailored to your needs.",
  },
  {
    img: null,
    title: "Mobile & Cross-Platform Apps",
    description: "Design and develop responsive mobile and web applications for all devices.",
  },
  {
    img: null,
    title: "Data & Cloud Solutions",
    description: "Transform your data into insights and scale with robust cloud infrastructure.",
  },
  {
    img: null,
    title: "Security & DevOps",
    description: "Protect your assets and ensure reliable delivery with modern security and DevOps practices.",
  },
  {
    img: null,
    title: "UI/UX & Startup Acceleration",
    description: "Craft beautiful interfaces and accelerate your startup with expert design and MVP development.",
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
          color: isRed ? '#ff0708' : '#ff070810',
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
      transition={{ duration: 0.5 }}
    >
      {animatedWords}
    </motion.p>
  );
}

export default function Services() {
  return (
    <section className="py-20 px-4 bg-slate-50 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-start mb-10"
        >
          <p className="text-xs md:text-[18px] font-tektur font-medium mb-6 text-clip bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
            What We Do for Your Business
            <span className="h-[3px] w-[9px] bg-red-500 inline-block ml-1" ></span>
          </p>
          <AnimatedText
            text="We design and build reliable websites, apps, automations, and custom solutions to save you time and boost results."
            className="text-2xl md:text-4xl text-slate-100 max-w-5xl leading-[1.2] md:leading-[1.2] font-semibold"
          />
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-white rounded-[12px] p-1.5 ">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="shadow-none"
            >
              <Card className="h-full border-none shadow-none group gap-2 bg-slate-50 rounded-[12px] p-1 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="w-full aspect-2/1 bg-slate-100/50 rounded-[6px]">
                    {service.img && <Image src={service.img} alt={service.title} width={1000} height={1000} className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex flex-col gap-2 p-2">
                  <CardTitle className="text-xl font-semibold px-2">{service.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed px-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
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
