import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Have an idea or project in mind?
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Let's make it real.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-4 bg-background text-foreground hover:bg-background/90"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
}
