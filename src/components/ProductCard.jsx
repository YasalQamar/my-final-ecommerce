function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300">
      {product.badge && (
        <div className="absolute bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded m-2 hover:scale-110 transition-transform">
          {product.badge}
        </div>
      )}
      <div className="h-48 overflow-hidden">
        <img src={product.image} alt={product.alt} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-blue-900">{product.title}</h2>
        <div className="flex items-center my-2">
          {'★'.repeat(Math.round(product.rating))}
          <span className="text-gray-600 text-sm ml-1">({product.reviews} reviews)</span>
        </div>
        <p className="font-bold">
          {product.price} {product.originalPrice && <span className="line-through text-gray-500 ml-2">{product.originalPrice}</span>}
        </p>
        <p className="text-gray-600 text-sm my-2">{product.description}</p>
        <button
          onClick={() => onAddToCart(product.title)}
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition-colors"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;