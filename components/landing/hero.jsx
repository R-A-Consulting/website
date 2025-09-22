"use client"
import { motion } from "framer-motion";
import { Video, Brain, Code, Smartphone, Cloud } from "lucide-react";
import HeroBackground from "@/components/ui/hero-background";

export default function Hero() {
  return (
    <section className="relative py-20 border-b border-red-200">
      <HeroBackground />
      <div className="max-w-7xl mx-auto px-4 pt-8 md:pt-15 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-2"
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
              className="text-4xl md:text-3xl font-semibold text-gray-900 leading-tight"
            >
              We help you turn your ideas into real solutions so your business can grow.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-lg text-gray-600 max-w-2xl"
            >
              We work with you to turn your ideas into innovative digital products. Using the latest in AI, web, mobile, and cloud technology, we solve tough challenges and help your business grow in a fast-changing world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start lg:items-start mt-4"
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
          <div className="order-1 lg:order-2 h-64 lg:h-96 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-base lg:text-lg">Steep Logic</span>
          </div>
        </div>
      </div>
    </section>
  );
}
