import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/landing/hero";
import WhatWeDo from "@/components/landing/what-we-do";
import WhyChooseUs from "@/components/landing/why-choose-us";
import WhoWeWorkWith from "@/components/landing/who-we-work-with";
import HowWeWork from "@/components/landing/how-we-work";
import CallToAction from "@/components/landing/call-to-action";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WhatWeDo />
        <WhyChooseUs />
        <WhoWeWorkWith />
        <HowWeWork />
        <CallToAction />
      </main>
    </div>
  );
}
