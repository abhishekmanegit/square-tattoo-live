import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import artistImage from "@/assets/artist-vishal.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">About Us</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">
              The Artist Behind <span className="text-gradient-gold">Square Tattoo</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Artist Profile */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={artistImage}
                alt="Vishal Awale - Tattoo Artist"
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
            </div>

            <div>
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Meet the Artist</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Vishal Awale
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 8 years of experience in the tattoo industry, Vishal Awale has 
                  established himself as one of the most sought-after tattoo artists in 
                  Maharashtra. His journey began with a passion for art and a desire to 
                  create permanent expressions of personal stories on skin.
                </p>
                <p>
                  Specializing in a wide range of styles – from intricate geometric patterns 
                  and traditional Indian motifs to photorealistic portraits and contemporary 
                  minimalist designs – Vishal's versatility sets him apart in the industry.
                </p>
                <p>
                  At Square Tattoo, every piece is approached as a collaboration. Vishal 
                  takes the time to understand your vision, story, and expectations before 
                  crafting a design that's uniquely yours. His commitment to hygiene, 
                  precision, and client comfort ensures a premium tattoo experience.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/portfolio">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Every Tattoo Tells a <span className="text-gradient-gold">Story</span>
            </h2>
            <blockquote className="text-xl md:text-2xl font-heading italic text-muted-foreground mb-8">
              "A tattoo is not just ink on skin – it's a piece of your soul made visible. 
              My job is to honor that story with every line I draw."
            </blockquote>
            <p className="text-muted-foreground">— Vishal Awale</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              What We <span className="text-gradient-gold">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Artistry",
                description:
                  "Every tattoo is a masterpiece. We approach each design with creativity, attention to detail, and a commitment to excellence.",
              },
              {
                title: "Hygiene",
                description:
                  "Your safety is paramount. We maintain the highest standards of cleanliness with sterile equipment and premium inks.",
              },
              {
                title: "Connection",
                description:
                  "We build relationships with our clients. Your story matters to us, and we're honored to be part of it.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg p-8 hover-lift text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-heading font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
