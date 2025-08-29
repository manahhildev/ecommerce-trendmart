// src/components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Ayesha Khan",
    feedback: "TrendMart has amazing quality! Loved the fast delivery and packaging.",
    role: "Fashion Blogger",
  },
  {
    name: "Ali Raza",
    feedback: "The prices are so affordable and the variety is unmatched.",
    role: "Customer",
  },
  {
    name: "Sara Ahmed",
    feedback: "I always find the latest fashion trends here. Highly recommended!",
    role: "Influencer",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 rounded-2xl shadow-sm">
      <h2 className="text-3xl font-bold text-center mb-10">💬 What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <p className="text-gray-700 italic mb-4">“{t.feedback}”</p>
            <h3 className="font-semibold text-lg">{t.name}</h3>
            <span className="text-sm text-gray-500">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
