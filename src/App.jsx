import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';

const products = [
  {
    id: 1,
    category: "main",
    badge: "Bestseller",
    image: "https://plus.unsplash.com/premium_photo-1677353838163-f8a966efa975?w=600",
    alt: "Modern Main Entrance Door",
    title: "Waterproof Door",
    rating: 4.9,
    reviews: 86,
    price: "Rs.45,000",
    originalPrice: "Rs.52,000",
    description: "Solid teak wood with anti-burglar fittings. Size: 42\"x84\""
  },
  {
    id: 2,
    category: "bedroom",
    badge: "Eco-Friendly",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
    alt: "Bedroom Door",
    title: "Classic Bedroom Door",
    rating: 4.7,
    reviews: 64,
    price: "Rs.28,500",
    description: "Engineered wood with sound insulation. Size: 36\"x80\""
  },
  {
    id: 3,
    category: "main",
    image: "https://plus.unsplash.com/premium_photo-1676321046448-e491b205c21c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9vcnxlbnwwfHwwfHx8MA%3D%3D",
    alt: "French Doors",
    title: "Montpellier French Doors",
    rating: 4.8,
    reviews: 72,
    price: "Rs.67,000",
    originalPrice: "Rs.75,000",
    description: "Double doors with tempered glass panels. Size: 60\"x84\""
  },
  {
    id: 4,
    category: "bathroom",
    badge: "Waterproof",
    image: "https://images.unsplash.com/photo-1520033906782-1684d0e7498e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvb3J8ZW58MHx8MHx8fDA%3D",
    alt: "Bathroom Door",
    title: "AquaGuard Bathroom Door",
    rating: 4.6,
    reviews: 58,
    price: "Rs.22,000",
    description: "PVC core with moisture-resistant coating. Size: 30\"x78\""
  },
  {
    id: 5,
    category: "sliding",
    badge: "Modern",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab",
    alt: "Sliding Door",
    title: "SpaceSave Sliding Door",
    rating: 4.9,
    reviews: 91,
    price: "Rs.38,500",
    description: "Aluminum frame with frosted glass. Size: 48\"x84\""
  },
  {
    id: 6,
    category: "main",
    badge: "Safety",
    image: "https://tse3.mm.bing.net/th/id/OIP.Cf3IKNUxaplSjBTD9ckX3AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    alt: "Fire-Rated Door",
    title: "FireShield 90-Min Door",
    rating: 4.8,
    reviews: 45,
    price: "Rs.52,000",
    description: "Certified 90-minute fire rating. Size: 36\"x80\""
  },
  {
    id: 7,
    category: "garage",
    badge: "Automatic",
    image: "https://th.bing.com/th/id/R.9f699d8daa7bbdc26cc607d617ce0ec2?rik=h6hc4IqehR5%2b5Q&pid=ImgRaw&r=0",
    alt: "Garage Door",
    title: "AutoMaster Garage Door",
    rating: 4.7,
    reviews: 68,
    price: "Rs.89,000",
    description: "Steel sectional door with motor kit. Size: 16'x7'"
  },
  {
    id: 8,
    category: "wardrobe",
    image: "https://bostonwardrobes.co.nz/wp-content/uploads/2023/08/Shelly-beach-rd-Flex-and-Aristo-18.jpg",
    alt: "Wardrobe Door",
    title: "MirrorGlide Wardrobe",
    rating: 4.6,
    reviews: 47,
    price: "Rs.31,000",
    description: "Full-length mirror sliding doors. Size: Custom"
  }
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (productTitle) => {
    setCartCount(prev => prev + 1);
    alert(`Product "${productTitle}" added to enquiry list!`);
  };

  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/home" element={<Home products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;