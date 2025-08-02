import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent/50 backdrop-blur-md border-t border-border/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">FB</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FastBite
              </span>
            </div>
            <p className="text-foreground/70">
              Serving delicious fast food with a commitment to quality and speed. 
              Your satisfaction is our priority.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-foreground/70 hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/menu" className="block text-foreground/70 hover:text-primary transition-smooth">
                Menu
              </Link>
              <Link to="/contact" className="block text-foreground/70 hover:text-primary transition-smooth">
                Contact
              </Link>
              <Link to="/cart" className="block text-foreground/70 hover:text-primary transition-smooth">
                Cart
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground/70">123 Fast Food St, City, State 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground/70">info@fastbite.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-foreground/70">Mon - Thu</span>
                <span className="text-foreground">10:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Fri - Sat</span>
                <span className="text-foreground">10:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/70">Sunday</span>
                <span className="text-foreground">11:00 AM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center">
          <p className="text-foreground/70">
            © 2024 FastBite. All rights reserved. Built with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;