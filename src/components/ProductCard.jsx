import React, { useMemo } from "react";
import { AiFillStar } from "react-icons/ai";

export default function ProductCard({ product }) {
  const { rating, reviews, discount } = useMemo(() => {
    const r = +(Math.random() * (5 - 2.5) + 2.5).toFixed(1);
    const rev = Math.floor(Math.random() * 800) + 100;
    const d = Math.floor(Math.random() * 11) + 10;
    return { rating: r, reviews: rev, discount: d };
  }, [product.id]);

  const originalPrice = Number(product.price);
  const discountedPrice = +(originalPrice * (1 - discount / 100)).toFixed(2);

  const shortDesc =
    product.description.split(" ").slice(0, 3).join(" ") + "...";

  const ratingBadgeClass =
    rating >= 4 ? "bg-green-700 text-white" : "bg-green-400 text-white";

  return (
    <article className="relative bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition duration-200 flex flex-col">
      <div className="absolute top-3 right-3">
        <div className="inline-flex items-center bg-red-50 text-red-600 text-xs font-semibold px-2 py-1 rounded">
          <span className="mr-1 line-through text-xs text-red-500">
            ${originalPrice}
          </span>
          <span>{discount}% OFF</span>
        </div>
      </div>

      <div className="h-44 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <h3
        className="text-base font-semibold text-gray-800 line-clamp-1"
        title={product.title}
      >
        {product.title}
      </h3>

      <p className="text-sm text-gray-500 mt-1">{shortDesc}</p>

      <div className="flex items-center gap-3 mt-3">
        <span
          className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${ratingBadgeClass}`}
        >
          <AiFillStar size={14} color="white" />
          {rating}
        </span>

        <span className="text-xs text-gray-500">{reviews} Reviews</span>
      </div>

      <div className="mt-auto pt-4 flex items-baseline gap-2">
        <span className="text-lg font-bold text-gray-900">
          ${discountedPrice}
        </span>
        <span className="text-xs text-green-600 font-medium">
          {discount}% OFF
        </span>
        <span className="text-sm text-gray-500 line-through">
          ${originalPrice}
        </span>
      </div>
    </article>
  );
}
