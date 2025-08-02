import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroFood})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-secondary fill-current" />
            <span className="text-sm font-medium">Rated #1 Fast Food</span>
            <Star className="w-4 h-4 text-secondary fill-current" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Delicious
            </span>{" "}
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Fast Food
            </span>
            <br />
            <span className="text-foreground">Delivered Fresh</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-in-right">
            Experience the perfect blend of taste and speed. Our handcrafted burgers, 
            crispy fries, and delicious meals are just a click away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in">
            <Link to="/menu">
              <Button variant="hero" size="xl" className="group">
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/menu">
              <Button variant="glass" size="xl">
                View Menu
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="glass-card">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-foreground/70">Happy Customers</div>
            </div>
            <div className="glass-card">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">15min</div>
              <div className="text-foreground/70">Average Delivery</div>
            </div>
            <div className="glass-card">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-foreground/70">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-glow"></div>
    </section>
  );
};

export default Hero;