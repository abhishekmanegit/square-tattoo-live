import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="animate-fade-up text-primary uppercase tracking-[0.3em] text-sm md:text-base mb-6">
            Premium Tattoo Artistry
          </p>
          <h1 className="animate-fade-up animation-delay-100 text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6">
            Creating Skin That{" "}
            <span className="text-gradient-gold">Holds Stories</span>
          </h1>
          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Welcome to Square Tattoo – where art meets skin. Experience the craft of 
            Vishal Awale, turning your vision into timeless body art.
          </p>
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-gold">
              <Link to="/portfolio">
                View Portfolio <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Our Work</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Featured <span className="text-gradient-gold">Creations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: portfolio1, title: "Realistic Lion", category: "Black & Grey" },
              { img: portfolio2, title: "Mandala Design", category: "Geometric" },
              { img: portfolio3, title: "Rose Sleeve", category: "Floral" },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-lg animate-fade-up animation-delay-${(index + 1) * 100}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary text-sm uppercase tracking-wider">{item.category}</p>
                  <h3 className="text-xl font-heading font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Why Square Tattoo</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Where Art Meets <span className="text-gradient-gold">Precision</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Square Tattoo, we believe every tattoo tells a story. Our studio combines 
                artistic excellence with the highest hygiene standards, ensuring your experience 
                is as memorable as the art we create.
              </p>
              <ul className="space-y-4">
                {[
                  "Sterile equipment and premium inks",
                  "Custom designs tailored to you",
                  "Comfortable, private studio environment",
                  "Aftercare guidance and support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link to="/about">Meet the Artist</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-secondary rounded-lg p-6 hover-lift">
                  <h3 className="text-4xl font-heading font-bold text-primary mb-2">500+</h3>
                  <p className="text-muted-foreground text-sm">Happy Clients</p>
                </div>
                <div className="bg-secondary rounded-lg p-6 hover-lift">
                  <h3 className="text-4xl font-heading font-bold text-primary mb-2">8+</h3>
                  <p className="text-muted-foreground text-sm">Years Experience</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-secondary rounded-lg p-6 hover-lift">
                  <h3 className="text-4xl font-heading font-bold text-primary mb-2">100%</h3>
                  <p className="text-muted-foreground text-sm">Hygiene Standards</p>
                </div>
                <div className="bg-secondary rounded-lg p-6 hover-lift">
                  <h3 className="text-4xl font-heading font-bold text-primary mb-2">5★</h3>
                  <p className="text-muted-foreground text-sm">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Ready to Get <span className="text-gradient-gold">Inked</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Book your consultation today and let's bring your vision to life. 
            Walk-ins welcome, appointments preferred.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glow-gold">
              <a href="https://wa.me/917020217350" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+917020217350">
                Call +91 7020217350
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
