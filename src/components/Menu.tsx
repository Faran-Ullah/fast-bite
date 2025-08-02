import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Star, Search } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { useState, useMemo } from "react";

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
  {
    id: "7",
    name: "BBQ Burger",
    description: "Smoky BBQ burger with bacon, onion rings, and BBQ sauce",
    price: 16.99,
    image: burgerImg,
    category: "Burgers",
    rating: 4.9,
  },
  {
    id: "8",
    name: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil",
    price: 16.99,
    image: pizzaImg,
    category: "Pizza",
    rating: 4.6,
  },
  {
    id: "9",
    name: "Chicken Tenders",
    description: "Hand-breaded chicken tenders with honey mustard sauce",
    price: 11.99,
    image: chickenImg,
    category: "Chicken",
    rating: 4.7,
  },
  {
    id: "10",
    name: "Onion Rings",
    description: "Crispy beer-battered onion rings with tangy dipping sauce",
    price: 6.99,
    image: friesImg,
    category: "Sides",
    rating: 4.4,
  },
  {
    id: "11",
    name: "Veggie Burger",
    description: "Plant-based patty with avocado, sprouts, and special vegan sauce",
    price: 13.99,
    image: burgerImg,
    category: "Burgers",
    rating: 4.3,
  },
  {
    id: "12",
    name: "Hawaiian Pizza",
    description: "Sweet and savory pizza with ham, pineapple, and cheese",
    price: 19.99,
    image: pizzaImg,
    category: "Pizza",
    rating: 4.2,
  },
  {
    id: "13",
    name: "Grilled Chicken",
    description: "Perfectly seasoned grilled chicken breast with herbs",
    price: 14.99,
    image: chickenImg,
    category: "Chicken",
    rating: 4.8,
  },
  {
    id: "14",
    name: "Loaded Fries",
    description: "Crispy fries topped with cheese, bacon, and green onions",
    price: 8.99,
    image: friesImg,
    category: "Sides",
    rating: 4.7,
  },
  {
    id: "15",
    name: "Fish Burger",
    description: "Crispy fish fillet with lettuce, tomato, and tartar sauce",
    price: 13.99,
    image: burgerImg,
    category: "Burgers",
    rating: 4.5,
  },
  {
    id: "16",
    name: "Supreme Pizza",
    description: "Loaded pizza with pepperoni, sausage, peppers, and olives",
    price: 22.99,
    image: pizzaImg,
    category: "Pizza",
    rating: 4.8,
  },
];

const categories = ["All", "Burgers", "Chicken", "Pizza", "Sides"];

const Menu = () => {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    let filtered = menuItems;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

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

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
            <Input
              placeholder="Search for food items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 glass"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "cta" : "glass"}
              className="hover:bg-primary hover:text-primary-foreground"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-foreground/70">No items found matching your search.</p>
            </div>
          ) : (
            filteredItems.map((item, index) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;