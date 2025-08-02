import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Truck, Clock } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const [orderData, setOrderData] = useState({
    // Customer Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Delivery Information
    address: "",
    city: "",
    state: "",
    zipCode: "",
    // Payment
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Order placed successfully!",
      description: "Your delicious food will be delivered in 15-30 minutes.",
    });

    clearCart();
    navigate("/");
    setIsProcessing(false);
  };

  const deliveryFee = 2.99;
  const tax = getTotalPrice() * 0.08;
  const total = getTotalPrice() + deliveryFee + tax;

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Checkout</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Customer Information */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Customer Information</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={orderData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={orderData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={orderData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={orderData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Delivery Information */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Delivery Address
                    </h2>
                    <div className="grid gap-4">
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={orderData.address}
                          onChange={handleInputChange}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            name="city"
                            value={orderData.city}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            name="state"
                            value={orderData.state}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={orderData.zipCode}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Method
                    </h2>
                    
                    <RadioGroup
                      value={orderData.paymentMethod}
                      onValueChange={(value) => setOrderData({ ...orderData, paymentMethod: value })}
                      className="mb-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash">Cash on Delivery</Label>
                      </div>
                    </RadioGroup>

                    {orderData.paymentMethod === "card" && (
                      <div className="grid gap-4">
                        <div>
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input
                            id="cardName"
                            name="cardName"
                            value={orderData.cardName}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={orderData.cardNumber}
                            onChange={handleInputChange}
                            required
                            className="mt-2"
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              name="expiryDate"
                              placeholder="MM/YY"
                              value={orderData.expiryDate}
                              onChange={handleInputChange}
                              required
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              name="cvv"
                              placeholder="123"
                              value={orderData.cvv}
                              onChange={handleInputChange}
                              required
                              className="mt-2"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="glass-card sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                    
                    <div className="space-y-3 mb-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span className="text-sm">
                            {item.name} x {item.quantity}
                          </span>
                          <span className="text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${getTotalPrice().toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Delivery Fee</span>
                        <span>${deliveryFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>

                    <div className="mt-6 p-4 glass rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Clock className="w-4 h-4" />
                        Estimated delivery: 15-30 minutes
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      disabled={isProcessing}
                      className="w-full mt-6"
                    >
                      {isProcessing ? "Processing..." : `Place Order - $${total.toFixed(2)}`}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;