import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const services = [
  {
    title: "Custom Tattoos",
    description: "Unique designs created specifically for you based on your ideas and vision.",
    features: [
      "Personal consultation",
      "Custom artwork design",
      "Unlimited revisions",
      "Premium ink quality",
    ],
    popular: true,
  },
  {
    title: "Cover-Up Tattoos",
    description: "Transform old or unwanted tattoos into stunning new artwork.",
    features: [
      "Assessment consultation",
      "Creative redesign",
      "Seamless coverage",
      "Before & after planning",
    ],
    popular: false,
  },
  {
    title: "Portrait Tattoos",
    description: "Photorealistic portraits that capture the essence of loved ones.",
    features: [
      "High detail realism",
      "Reference photo analysis",
      "Multiple sessions available",
      "Lifelike results",
    ],
    popular: false,
  },
  {
    title: "Geometric & Mandala",
    description: "Intricate patterns and sacred geometry designs with precision.",
    features: [
      "Mathematical precision",
      "Spiritual symbolism",
      "Customized patterns",
      "Perfect symmetry",
    ],
    popular: false,
  },
  {
    title: "Traditional & Neo-Traditional",
    description: "Bold lines and vibrant colors in classic and modern styles.",
    features: [
      "Bold outlines",
      "Vibrant color palettes",
      "Timeless designs",
      "Cultural authenticity",
    ],
    popular: false,
  },
  {
    title: "Minimalist & Fine Line",
    description: "Delicate, subtle designs with clean lines and elegant simplicity.",
    features: [
      "Ultra-fine needles",
      "Subtle elegance",
      "Quick sessions",
      "Sophisticated results",
    ],
    popular: false,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">What We Offer</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From custom designs to cover-ups, we offer a wide range of tattoo services 
              to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative bg-secondary rounded-lg p-8 hover-lift ${
                  service.popular ? "border-2 border-primary" : "border border-border"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-heading font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <Check size={16} className="text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild variant={service.popular ? "default" : "outline"} className="w-full">
                  <Link to="/contact">Book Now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              The Tattoo <span className="text-gradient-gold">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Share your ideas and vision with us" },
              { step: "02", title: "Design", desc: "We create a custom design for approval" },
              { step: "03", title: "Session", desc: "Your tattoo is created with precision" },
              { step: "04", title: "Aftercare", desc: "We guide you through healing process" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-heading font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute w-full h-0.5 bg-border top-8 left-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-secondary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-heading font-bold mb-4">Pricing</h3>
            <p className="text-muted-foreground mb-6">
              Tattoo pricing varies based on size, complexity, and placement. We provide 
              detailed quotes during consultation. A deposit is required to book your session.
            </p>
            <Button asChild size="lg" className="glow-gold">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
