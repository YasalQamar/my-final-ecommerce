import React, { useState } from "react";
import productsData from "../data/productsData";

function ProductGrid({ search, filterCategory }) {
  const [cartCount, setCartCount] = useState(0);

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = filterCategory === "all" || product.category === filterCategory;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow hover:scale-105 transition overflow-hidden"
          >
            {product.badge && (
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                {product.badge}
              </div>
            )}
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <div className="text-yellow-500 mt-1">{"★".repeat(Math.round(product.rating))}</div>
              <p className="text-green-600 font-bold mt-2">
                Rs.{product.price}{" "}
                {product.originalPrice && (
                  <span className="line-through text-gray-400 ml-2">Rs.{product.originalPrice}</span>
                )}
              </p>
              <p className="text-sm mt-1">{product.description}</p>
              <button
                onClick={() => setCartCount(cartCount + 1)}
                className="mt-2 w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded"
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
