import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Instagram, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to get inked? Have questions? We'd love to hear from you. 
              Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-secondary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tattoo Inquiry / Booking / Other"
                    className="bg-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your tattoo idea, preferred size, placement, etc."
                    rows={5}
                    className="bg-secondary"
                  />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full glow-gold">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Quick Contact</h2>
              <div className="space-y-6">
                <a
                  href="tel:+917020217350"
                  className="flex items-center gap-4 bg-secondary rounded-lg p-5 hover-lift group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Call Us</p>
                    <p className="font-semibold">+91 7020217350</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/917020217350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-secondary rounded-lg p-5 hover-lift group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <MessageCircle className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">WhatsApp</p>
                    <p className="font-semibold">Chat with us</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/squaretattooindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-secondary rounded-lg p-5 hover-lift group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Instagram className="text-primary group-hover:text-primary-foreground transition-colors" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Instagram</p>
                    <p className="font-semibold">@squaretattooindia</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 bg-secondary rounded-lg p-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Studio Hours</p>
                    <p className="font-semibold">Mon-Sat: 10AM - 8PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h3 className="text-xl font-heading font-bold mb-4">Common Questions</h3>
                <div className="space-y-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Do I need an appointment?</h4>
                    <p className="text-muted-foreground text-sm">
                      Walk-ins are welcome, but appointments are preferred to ensure availability.
                    </p>
                  </div>
                  <div className="bg-secondary rounded-lg p-4">
                    <h4 className="font-semibold mb-2">What's the deposit policy?</h4>
                    <p className="text-muted-foreground text-sm">
                      A deposit is required to book your session, which is adjusted in the final price.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
