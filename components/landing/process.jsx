"use client"
import { motion } from "framer-motion";
import {
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import businessIcon from "@/assets/faq/business.png";
import fastIcon from "@/assets/faq/fast.png";
import resultsIcon from "@/assets/faq/results.png";
import moneyIcon from "@/assets/faq/money.png";
import ownerIcon from "@/assets/faq/owner.png";
import legacyIcon from "@/assets/faq/legacy.png";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "We help startups and growing businesses in India and abroad launch, scale, and modernize successfully.",
    icon: businessIcon
  },
  {
    question: "How fast can you build?",
    answer:
      "We deliver a working prototype in 4–6 weeks, with weekly updates and rapid feedback cycles.",
    icon: fastIcon
  },
  {
    question: "What results can we expect?",
    answer:
      "Expect increased sales, reduced costs, and smoother operations through automation and digital transformation.",
    icon: resultsIcon
  },
  {
    question: "How do you charge?",
    answer:
      "We offer clear, fixed pricing for MVPs and transparent, detailed estimates for custom projects.",
    icon: moneyIcon
  },
  {
    question: "Who owns the work?",
    answer:
      "You own all code, documentation, and deliverables from day one, with complete handover provided.",
    icon: ownerIcon
  },
  {
    question: "Can you work with our existing systems?",
    answer:
      "Yes, we integrate new solutions with your current tools, ensuring seamless connectivity and minimal disruption.",
    icon: legacyIcon
  },
];

export default function Process() {
  const headingWords = ["Need", "Some", "Clarity", "?"];

  return (
    <section className="pt-10 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          viewport={{ once: true }}
          className="text-start md:text-center space-y-6 pb-10"
        >
          <p className="text-xs md:text-[18px] font-tektur font-medium mb-6 text-clip bg-gradient-to-r from-[#ff0708] to-[#ff0708]/80 bg-clip-text text-transparent w-max mx-auto">
            Frequently Asked Questions
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

        {/* FAQ items */}
        <div className="space-y-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 md:gap-y-20 ">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="space-y-3 flex items-start gap-3"
              >
                {/* Icon Row */}
                <div className="flex">
                  <Image
                    src={faq.icon}
                    alt={faq.question}
                    width={80}
                    height={80}
                    className="flex-shrink-0 object-contain"
                  />
                </div>

                {/* Question and Answer Column */}
                <div className="flex flex-col gap-0 mt-0">
                  <h3 className="text-md md:text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-lg">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="grid gap-4 rounded-[20px] bg-slate-50 p-2 shadow-none mt-15 md:mt-20 border border-slate-200 border-dashed"
        >
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[16px] border border-slate-200 bg-white p-10"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#ff070810] blur-3xl" />
              <div className="absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-white blur-3xl" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#ff0708]">
                Scrolled So Far, Still Confused - Let's Talk
              </span>
              <h3 className="mt-3 text-2xl md:text-4xl font-semibold text-slate-900">
                Get a FREE 30 minute consultation call
              </h3>
              <ul className="mt-4 text-sm md:text-base text-slate-600 list-disc list-inside space-y-2">
                <li>Discuss your business goals and challenges</li>
                <li>Get expert advice on tech, automation, and digital strategy</li>
                <li>See examples of similar projects and results</li>
                <li>Receive a clear roadmap and next steps</li>
                <li>No obligation, no sales pitch—just honest guidance</li>
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://calendly.com/rishabh-steeplogic/steeplogic-30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blink-hover inline-flex items-center gap-2 rounded-full bg-[#ff0708] px-5 py-3 text-sm font-semibold text-slate-50 transition-all duration-300"
                >
                  Schedule Call
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
      <style jsx>{`
        .blink-hover {
          position: relative;
          overflow: hidden;
        }

        .blink-hover::before,
        .blink-hover::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 2px solid currentColor;
          opacity: 0;
          transform: scale(0.75);
          will-change: transform, opacity;
          pointer-events: none;
        }

        .blink-hover:hover::after {
          animation: radar-pulse 0.9s ease-out infinite;
        }

        .blink-hover:hover::before {
          animation: radar-pulse 0.9s ease-out infinite;
          animation-delay: 0.35s;
        }

        @keyframes radar-pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          55% {
            transform: scale(1.25);
            opacity: 0.2;
          }
          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .blink-hover:hover::after {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
