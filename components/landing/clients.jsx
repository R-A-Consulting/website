"use client"

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import famFresh from "@/assets/clients/fam-fresh.png";
import leadClub from "@/assets/clients/lead-club.png";
import lubdub from "@/assets/clients/lubdub.png";
import taashpatti from "@/assets/clients/taashpatti.png";
import tracerAi from "@/assets/clients/tracer-ai.png";

const startupHighlights = [
  "MVP in 4–6 weeks with weekly demos",
  "Clear pricing; fit for startup budgets",
  "Built to scale from day one (secure + reliable)",
  "Metrics-driven: faster ops, lower costs, better CX",
  "Post-launch support and handover included"
];

const growthHighlights = [
  "Automate daily workflows; reduce manual effort",
  "Integrate tools and data into one reliable system",
  "Improve performance and security; cloud-ready setup",
  "Deployment pipelines + documentation your team can own",
  "Ongoing support, monitoring, and training"
];

const clientLogos = [
  { name: "Fam Fresh", src: famFresh },
  { name: "Lead Club", src: leadClub },
  { name: "Lubdub", src: lubdub },
  { name: "Taashpatti", src: taashpatti },
  { name: "Tracer AI", src: tracerAi }
];

export default function Clients() {
  return (
    <section className="relative overflow-hidden bg-slate-50/10 py-20 px-4">
      {/* <div className="absolute inset-x-0 top-16 mx-auto h-72 max-w-5xl rounded-full bg-[#ff070810] blur-3xl" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 mx-auto h-64 max-w-4xl rounded-full bg-white blur-3xl" aria-hidden="true" /> */}

      <div className="relative mx-auto max-w-6xl">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-xs md:text-[18px] font-tektur font-medium mb-6 text-clip bg-gradient-to-r from-[#ff0708] to-[#ff0708]/80 bg-clip-text text-transparent w-max mx-auto">
            tailored programs
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
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
          className="grid gap-4 rounded-[20px] bg-white p-3 shadow-none backdrop-blur-2xl md:grid-cols-2"
        >
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-slate-50 p-10"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#ff070810] blur-3xl" />
              <div className="absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-white blur-3xl" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#ff0708]">
                Startups
              </span>
              <h3 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                Launch Fast. Scale Smart.
              </h3>
              <p className="mt-4 text-sm md:text-base text-slate-600">
                Move from concept to a scalable, investor-ready MVP in weeks with a product team tuned for speed, clarity, and measurable results.
              </p>

              <ul className="mt-8 space-y-3">
                {startupHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-slate-700 md:text-base">
                    <span className="mt-[6px] inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#ff0708]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://calendly.com//30-min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff0708] px-5 py-3 text-sm font-semibold text-slate-50 transition-transform duration-300 hover:-translate-y-1"
                >
                  Start Your MVP
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[20px] border border-white bg-[#ff0708ee] p-10"
          >
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-[#ffffff]/30 blur-3xl" />
              <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full bg-[#ffffff]/20 blur-3xl" />
            </div>
            <div className="relative text-slate-50">
              <span className="inline-flex items-center gap-2 rounded-full py-1 text-xs font-semibold uppercase tracking-[0.1em]">
                Growing Businesses
              </span>
              <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                Digitize. Automate. Scale.
              </h3>
              <p className="mt-3 text-sm md:text-base text-slate-200">
                Replace manual workflows with integrated, secure platforms engineered for performance, compliance, and visibility across your organization.
              </p>

              <ul className="mt-8 space-y-3">
                {growthHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-white md:text-base">
                    <span className="mt-[6px] inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-white" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="https://calendly.com//30-min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#ff0708] transition-transform duration-300 hover:-translate-y-1 hover:bg-white/95"
                >
                  Explore Automation
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* our clients - logos */}
        <div className="mt-12 space-y-6 rounded-xl border border-slate-200/60 bg-white/90 py-6">
          <h3 className="text-base font-medium text-slate-900 font-tektur mx-auto w-max tracking-[0.1em]">
            already worked for
          </h3>
          <Marquee
            gradient={false}
            speed={32}
            pauseOnHover
            className="flex items-center gap-10"
          >
            {clientLogos.concat(clientLogos).map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mx-10 flex h-14 items-center justify-center opacity-80 transition-opacity hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-auto object-contain filter grayscale transition-all duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[1px] max-w-4xl"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,7,8,0.4) 50%, transparent 100%)"
        }}
      />
    </section>
  );
}
