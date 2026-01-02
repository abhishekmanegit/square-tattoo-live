import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Phone, MessageCircle } from "lucide-react";

const LocationPage = () => {
  const address = "Deccan Road, Tiranga Colony, Kabnur, Ichalkaranji, Maharashtra, India";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Find Us</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Studio <span className="text-gradient-gold">Location</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our studio in Ichalkaranji, Maharashtra. We're conveniently located 
              and ready to welcome you.
            </p>
          </div>
        </div>
      </section>

      {/* Location Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Map */}
            <div className="order-2 lg:order-1">
              <div className="bg-secondary rounded-lg overflow-hidden h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.123456789!2d74.45!3d16.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzAwLjAiTiA3NMKwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Square Tattoo Location"
                />
              </div>
            </div>

            {/* Address Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-heading font-bold mb-6">Our Studio</h2>
              
              <div className="bg-secondary rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Deccan Road, Tiranga Colony<br />
                      Kabnur, Ichalkaranji<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-secondary rounded-lg p-4 hover-lift group"
                >
                  <Navigation className="text-primary" size={20} />
                  <span className="font-medium">Get Directions</span>
                </a>
                <a
                  href="tel:+917020217350"
                  className="flex items-center gap-3 bg-secondary rounded-lg p-4 hover-lift group"
                >
                  <Phone className="text-primary" size={20} />
                  <span className="font-medium">Call Studio</span>
                </a>
              </div>

              <div className="bg-secondary rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">Studio Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="font-medium">10:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">By Appointment Only</span>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-semibold mb-4">Getting Here</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Located on Deccan Road, easily accessible from main city center
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Parking available nearby
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    Look for the Square Tattoo signage
                  </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="glow-gold flex-1">
                  <a href="https://wa.me/917020217350" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={18} />
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            We Can't Wait to <span className="text-gradient-gold">Meet You</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Drop by for a consultation or to discuss your next tattoo. 
            Walk-ins welcome, but booking ahead ensures we're ready for you!
          </p>
          <Button asChild size="lg">
            <Link to="/services">Explore Our Services</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
