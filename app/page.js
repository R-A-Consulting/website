import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import About from "@/components/landing/about";
import Clients from "@/components/landing/clients";
import Process from "@/components/landing/process";
import Footer from "@/components/footer";
import StructuredData from "@/components/seo/structured-data";

export default function Home() {
  const internalLinks = [
    {
      href: "#services",
      title: "Our Services",
      description: "Explore our comprehensive software development services including AI, web development, and cloud solutions."
    },
    {
      href: "#about",
      title: "About Steep Logic",
      description: "Learn about our 10+ years of experience and our commitment to delivering exceptional results."
    },
    {
      href: "#process",
      title: "Our Process",
      description: "Discover how we work with clients to deliver successful software projects."
    },
    {
      href: "#clients",
      title: "Our Clients",
      description: "See the companies we've helped grow with our technology solutions."
    }
  ];

  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Clients />
        <Process />
        <Footer />
      </main>
    </div>
  );
}
