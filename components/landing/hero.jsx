"use client"
import { motion } from "framer-motion";
import { Video, Brain, Code, Smartphone, Cloud } from "lucide-react";
import Image from "next/image";
import HeroBackground from "@/components/ui/hero-background";
import hero from "@/assets/hero.png";

export default function Hero() {
  return (
    <section className="relative py-20 border-b border-red-200">
      <HeroBackground />
      <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-15 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-left order-2 lg:order-1 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-start items-center gap-2"
            >
              {[{'icon': <Brain className="w-3 h-3" />, 'title': 'Gen AI'}, {'icon': <Code className="w-3 h-3" />, 'title': 'Web'}, {'icon': <Smartphone className="w-3 h-3" />, 'title': 'Android / iOS'}, {'icon': <Cloud className="w-3 h-3" />, 'title': 'Cloud'}].map((tech, index) => (
                <span
                  key={tech.title}
                  className="px-2 py-1 text-red-600 text-xs bg-white font-medium rounded-full border border-red-200 hover:bg-red-200 transition-colors duration-200 flex items-center gap-2"
                >
                  {tech.icon}
                  {tech.title}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-semibold text-gray-900 leading-tight"
            >
              Integrate AI across workflows to streamline operations and scale revenue.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-md md:text-lg text-gray-600 max-w-2xl leading-[1.2] md:leading-[1.5]"
            >
              From AI automation and analytics to robust & modern web, mobile, and cloud platforms, we design and ship the tools that streamline operations, accelerate growth, and help your business win.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-start items-start mt-4 lg:mt-8"
            >
              <a
                href="https://calendly.com//30-min"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 px-3 bg-[#ff0708] text-white text-sm rounded-full font-medium transition-all flex items-center gap-2"
              >
                {/* Google meet logo */}
                <Video className="w-4 h-4" />
                Schedule Call
              </a>
            </motion.div>
          </div>

          {/* Graphics Section */}
          <Image
            src={hero}
            width={600}
            height={500}
            alt="Steep Logic Hero Graphic"
            className="relative order-2 lg:order-2 h-60 lg:h-120 bg-none overflow-visible flex items-center justify-center w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
