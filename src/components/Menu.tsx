import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Star } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

// Import food images
import burgerImg from "@/assets/burger.jpg";
import friesImg from "@/assets/fries.jpg";
import chickenImg from "@/assets/chicken.jpg";
import pizzaImg from "@/assets/pizza.jpg";

const menuItems = [
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
    id: "2",
    name: "Crispy Fries",
    description: "Golden crispy fries seasoned with our signature spice blend",
    price: 5.99,
    image: friesImg,
    category: "Sides",
    rating: 4.6,
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
    id: "5",
    name: "Cheese Burger",
    description: "Double cheese burger with caramelized onions and pickles",
    price: 14.99,
    image: burgerImg,
    category: "Burgers",
    rating: 4.8,
  },
  {
    id: "6",
    name: "Chicken Wings",
    description: "Spicy buffalo wings served with ranch dipping sauce",
    price: 13.99,
    image: chickenImg,
    category: "Chicken",
    rating: 4.5,
  },
];

const categories = ["All", "Burgers", "Chicken", "Pizza", "Sides"];

const Menu = () => {
  const { addItem } = useCart();

  const handleAddToCart = (item: typeof menuItems[0]) => {
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
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Delicious</span> Menu
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our mouth-watering selection of fast food favorites, crafted with the finest ingredients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="glass"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
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

export default Menu;