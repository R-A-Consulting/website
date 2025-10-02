import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/landing/hero";
import Services from "@/components/landing/services";
import About from "@/components/landing/about";
import Clients from "@/components/landing/clients";
import Process from "@/components/landing/process";
import Footer from "@/components/footer";

export default function Home() {
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
