import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Smart Tech. Sharp Results.
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Headline / Hero Section
          </p>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            We build tools and apps that help your business grow. Whether you're starting from scratch or looking to scale, we turn your ideas into working products that deliver value.
          </p>
        </div>

        <div className="mb-8">
          <p className="text-sm md:text-base text-muted-foreground font-medium">
            Now accepting projects for Oct–Dec 2025.
          </p>
        </div>

        <Button size="lg" className="text-lg px-8 py-4">
          Start Your Project
        </Button>
      </div>
    </section>
  );
}
