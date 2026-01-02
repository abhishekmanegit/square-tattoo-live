import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const categories = ["All", "Realism", "Geometric", "Floral", "Traditional", "Minimalist"];

const portfolioItems = [
  { img: portfolio1, title: "Majestic Lion", category: "Realism", description: "Black and grey realistic lion portrait" },
  { img: portfolio2, title: "Sacred Mandala", category: "Geometric", description: "Intricate geometric mandala design" },
  { img: portfolio3, title: "Rose Elegance", category: "Floral", description: "Delicate rose sleeve artwork" },
  { img: portfolio4, title: "Koi Spirit", category: "Traditional", description: "Japanese style koi fish" },
  { img: portfolio5, title: "Script Art", category: "Minimalist", description: "Fine line script lettering" },
  { img: portfolio6, title: "Wolf Gaze", category: "Realism", description: "Photorealistic wolf portrait" },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Our Work</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Tattoo <span className="text-gradient-gold">Portfolio</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse through our collection of custom tattoo designs. Each piece represents 
              a unique story, crafted with precision and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer animate-scale-in"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-primary text-sm uppercase tracking-wider mb-1">{item.category}</p>
                  <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={filteredItems[selectedImage].img}
            alt={filteredItems[selectedImage].title}
            className="max-h-[80vh] max-w-full object-contain rounded-lg"
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-xl font-heading font-semibold">
              {filteredItems[selectedImage].title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {filteredItems[selectedImage].description}
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Love What You <span className="text-gradient-gold">See</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Every tattoo is custom-designed for you. Let's discuss your ideas and create 
            something amazing together.
          </p>
          <Button asChild size="lg" className="glow-gold">
            <Link to="/contact">Book Your Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
