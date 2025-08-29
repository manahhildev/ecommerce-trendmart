// Products.js
import React from "react";

const products = [
  {
    id: 1,
    name: "A beautiful Makeup Accessories",
    price: "Rs 2,499",
    image: "https://tartecosmetics.com/cdn/shop/files/tarte-cosmetics.png?v=1747244468"
  },
  {
    id: 2,
    name: "Elegant Print Summer Collection",
    price: "Rs 3,199",
    image: "https://thumbs.dreamstime.com/b/clothes-hang-clothing-rack-female-pastel-colors-90991891.jpg"
  },
  {
    id: 3,
    name: "Chef’s Choice Spoons Set",
    price: "Rs 4,500",
    image: "https://flyingcart.pk/cdn/shop/files/Grey_4.jpg?v=1715948664&width=1946"
  },
  {
    id: 4,
    name: "Casual Winter Collection",
    price: 2100,
    image: "https://as2.ftcdn.net/jpg/03/26/74/07/1000_F_326740780_44qkZrFf7z5ylIrVmV4raOMIv3MwOsnJ.jpg",
  },
  {
    id: 3,
    name: "BassPro Earbuds",
    price: "Rs 5,300",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqS-AAF25ndJhEejNegBkGle-lKi-QnqiknQ&s"
  },
  {
    id: 3,
    name: "Glow Night Lamp",
    price: "Rs 7,800",
    image: "https://gift4u.pk/wp-content/uploads/2024/08/LED-Oval-Shaped-Crystal-Decorative-Light-Lamp-1.webp"
  },
  {
    id: 3,
    name: "Velvet Bliss Cushion",
    price: "Rs 9,500",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0_4wJaa0ix7cDHTWN1vlcryfPWwa59XyhQ&s"
  },
  {
    id: 3,
    name: "Charmé Luxe",
    price: "Rs 4,900",
    // image :"https://image.preview.ph/preview/resize/image/200/10/19/mens-fragrance-for-women-nmwebp".
    image: "https://arfragrances.pk/cdn/shop/articles/Fragrance_Best_Perfume_520x500_59b7ffad-7432-4edc-b2bb-5524bd0c6b3b.webp?v="
  }
];

const Products = () => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl md:text-5xl font-bold mt-5">
        Our Products ✨
      </h2>
      <section className="py-12 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product,Index) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
          >
            {/* Fixed size image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-[250px] h-[300px] object-cover rounded-md hover:scale-105 transition"
            />
            <h3 className="mt-2 font-semibold text-slate-900 text-center">
              {product.name}
            </h3>
            <p className="mt-1 font-bold text-slate-900">{product.price}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
