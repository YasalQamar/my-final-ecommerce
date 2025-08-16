import ProductCard from '../components/ProductCard';

function Home({ products, onAddToCart }) {
  return (
    <div>
      <header className="text-center p-8 bg-blue-100">
        <h2 className="text-3xl font-bold text-blue-900">Welcome to Talha Wood Doors & Hardware</h2>
        <p className="text-gray-600 mt-2">Premium doors for your home and office. Quality craftsmanship with modern designs.</p>
      </header>
      <main className="container mx-auto p-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home;