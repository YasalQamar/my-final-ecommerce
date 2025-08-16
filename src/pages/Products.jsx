import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';

function Products({ products, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <header className="text-center p-8 bg-blue-100">
        <h2 className="text-3xl font-bold text-blue-900">Explore Our Products</h2>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search for a door..."
            className="p-2 border border-gray-300 rounded-l-md outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && setSearchQuery(e.target.value)}
          />
          <button
            className="bg-blue-900 text-white px-4 py-2 rounded-r-md hover:bg-blue-800"
            onClick={() => setSearchQuery(searchQuery)}
          >
            Search
          </button>
        </div>
      </header>
      <div className="container mx-auto flex gap-8 p-4 max-lg:flex-col">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <main className="flex-1">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </section>
        </main>
        <aside className="w-1/4 max-lg:w-full bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p><strong>Phone:</strong> 0312-xxxxxxx</p>
          <p><strong>Email:</strong> info@talhadoors.com</p>
          <h2 className="text-xl font-bold text-blue-900 mt-4 mb-2">Offers</h2>
          <ul>
            <li>Free delivery over Rs.50k</li>
            <li>20% off on sliding doors</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Products;