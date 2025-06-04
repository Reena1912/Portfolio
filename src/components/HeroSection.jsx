import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 bg-background"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 z-10">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
  src="/public/fotu.jpg"
  alt="K Reena"
  className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg object-cover object-top opacity-0 animate-fade-in"
/>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}K Reena
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            Driven by curiosity and a love for technology, I continuously seek opportunities to learn, collaborate, and create digital solutions that make a difference.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
