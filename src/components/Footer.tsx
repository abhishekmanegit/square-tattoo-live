import { Link } from "react-router-dom";
import { Instagram, Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 border-2 border-primary flex items-center justify-center">
                <span className="text-primary font-heading text-xl font-bold">S</span>
              </div>
              <span className="text-xl font-heading font-semibold tracking-wider">
                SQUARE <span className="text-primary">TATTOO</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating skin that holds stories. Premium tattoo artistry by Vishal Awale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Portfolio", "Services", "Contact", "Location"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary" />
                <a href="tel:+917020217350" className="hover:text-primary transition-colors">
                  +91 7020217350
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <MessageCircle size={16} className="text-primary" />
                <a
                  href="https://wa.me/917020217350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Instagram size={16} className="text-primary" />
                <a
                  href="https://instagram.com/squaretattooindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @squaretattooindia
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>
                  Deccan Road, Tiranga Colony,<br />
                  Kabnur, Ichalkaranji,<br />
                  Maharashtra, India
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Studio Hours</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>By Appointment</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              * Walk-ins welcome, appointments preferred
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Square Tattoo. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Developed by <span className="text-primary font-medium">Abhishek Mane</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
