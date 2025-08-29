import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
      {/* Big 404 */}
      <h1 className="text-6xl font-extrabold text-pink-500">404</h1>
      
      {/* Shopping vibe message */}
      <p className="text-lg mt-2 text-gray-700">
        😢 Oops! The product you’re looking for rolled off the cart.
      </p>

      {/* Small fun line */}
      <p className="text-sm text-gray-500 mt-1">
        But don’t worry, amazing deals are waiting for you back home 🛒
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full shadow hover:bg-pink-600 transition"
      >
        🏠 Back to Shopping
      </Link>
    </div>
  );
}
