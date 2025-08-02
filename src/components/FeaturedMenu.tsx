import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Star, ArrowRight } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

// Import food images
import burgerImg from "@/assets/burger.jpg";
import friesImg from "@/assets/fries.jpg";
import chickenImg from "@/assets/chicken.jpg";
import pizzaImg from "@/assets/pizza.jpg";

const featuredItems = [
  {
    id: "1",
    name: "Classic Burger",
    description: "Juicy beef patty with cheese, lettuce, tomato, and our special sauce",
    price: 12.99,
    image: burgerImg,
    category: "Burgers",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Fried Chicken",
    description: "Crispy fried chicken pieces marinated in herbs and spices",
    price: 15.99,
    image: chickenImg,
    category: "Chicken",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Pepperoni Pizza",
    description: "Fresh dough topped with pepperoni and melted mozzarella cheese",
    price: 18.99,
    image: pizzaImg,
    category: "Pizza",
    rating: 4.7,
  },
  {
    id: "7",
    name: "BBQ Burger",
    description: "Smoky BBQ burger with bacon, onion rings, and BBQ sauce",
    price: 16.99,
    image: burgerImg,
    category: "Burgers",
    rating: 4.9,
  },
];

const FeaturedMenu = () => {
  const { addItem } = useCart();

  const handleAddToCart = (item: typeof featuredItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Popular</span> Items
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
            Try our customer favorites and most loved dishes that keep people coming back for more.
          </p>
          <Link to="/menu">
            <Button variant="cta" size="lg" className="group">
              View Full Menu
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <Card
              key={item.id}
              className="glass-card group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <span className="text-xs font-bold text-primary-foreground">POPULAR</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-foreground/70 mb-4 text-sm">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${item.price}
                  </span>
                  <Button
                    variant="cta"
                    size="sm"
                    onClick={() => handleAddToCart(item)}
                    className="group"
                  >
                    <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;