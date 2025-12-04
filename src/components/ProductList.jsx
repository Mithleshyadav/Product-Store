import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  if (!products || products.length === 0)
    return (
      <div className="text-center text-gray-500 py-8">No products found.</div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
