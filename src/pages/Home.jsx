import { Button } from "../pages/MyButton";
import { MyCard, CardHeader, CardTitle, CardContent, CardFooter } from "../pages/MyCard";
import Products from "../Components/Products";
import Testimonials from "../Components/Testimonal";
import DiscountBanner from "../Components/Discountbanner";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 md:py-20 px-4 md:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Welcome to TrendMart
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          Your one-stop shop for the latest fashion & lifestyle products.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Button className="px-6 py-3 text-base font-semibold bg-gray-100 text-black rounded-lg shadow-md hover:bg-gray-200 transition">
            Shop Now
          </Button>
          <Button className="px-6 py-3 text-base font-semibold bg-gray-100 text-black rounded-lg shadow-md hover:bg-gray-200 transition">
            Explore
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <Products />

      {/* Shop by Categories */}
     
       
 
      <section className="py-12 px-4 sm:px-6 md:px-8 text-center">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6">
    🛍️ Shop by Categories
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      {
        name: "Men",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQissJ01smro8sD5zh-NJSRYYQUe-vyL1simA&s",
      },
      {
        name: "Women",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9g3Bxc2B9gSoEJGAzpI0JxYATdRojPswiQ&s",
      },
      {
        name: "Kids",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgv5NKLyOP-HZ1-veAotBdUBRWr71gvQDblg&s",
      },
      {
        name: "Accessories",
        img: "https://www.arzaan.pk/cdn/shop/products/re2_1024x1024.jpg?v=1684931902",
      },
    ].map((cat) => (
      <div
        key={cat.name}
        className="bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer transition p-4 flex flex-col items-center"
      >
        <p className="text-base sm:text-lg font-medium mb-2">{cat.name}</p>
        <div className="w-full aspect-w-1 aspect-h-1 overflow-hidden rounded-md">
          <img
            src={cat.img}
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
    ))}
  </div>
</section>

  

      {/* Featured Products */}
     <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-10">
      🌟 Featured Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
      {[
        {
          id: 1,
          name: "⌚ Timeless Watches",
          price: "Rs 1,200",
          img: "https://www.mega.pk/images/bg-bt-watches.webp",
        },
        {
          id: 2,
          name: "🎒 Trendy Bags",
          price: "Rs 3,800",
          img: "https://i.pinimg.com/736x/db/0c/a8/db0ca86ea75abdc74d1a95cf04d1ec45.jpg",
        },
        {
          id: 3,
          name: "🌸 Luxury Perfumes",
          price: "Rs 4,500",
          img: "https://www.bellavitaluxe.com/cdn/shop/files/Banner_1.webp?v=1742285362&width=1500",
        },
        {
          id: 4,
          name: "🤵 Formal Wear",
          price: "Rs 6,200",
          img: "https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?s=612x612&w=0&k=20&c=RR19yJjRuR-CBWj9u1sQkFgtdYJ07KEkM678R0mtuZY=",
        },
      ].map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition flex flex-col items-center p-4 h-full"
        >
          {/* Image Wrapper - Uniform height */}
          <div className="w-full h-60 sm:h-64 md:h-72 lg:h-80 overflow-hidden rounded-lg">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 w-full mt-3 sm:mt-4 justify-between text-center">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">Top Pick</p>
            <p className="mt-2 font-bold text-blue-600">{product.price}</p>
          </div>

          {/* Button */}
          <button className="mt-3 px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            🛒 Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

            
      {/* Discount Section */}
      <DiscountBanner />

      {/* Latest Trends */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-10">
          ⭐ Latest Trends
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 h-full">
          {[
            {
              id: 1,
              name: "Hair Care Essential",
              price: "Rs 4,500",
              img: "https://herbalist.pk/cdn/shop/files/Capture_4d6e8fb3-8505-4ee9-82ac-19f456682e7d.jpg?v=1725784601s",
            },
            {
              id: 2,
              name: "Trendy Jackets",
              price: "Rs 6,800",
              img: "https://s.alicdn.com/@sc04/kf/H67b2a126e0534646850db19f21f07e6aL.jpg",
            },
            {
              id: 3,
              name: "Glam Heels",
              price: "Rs 3,200",
              img: "https://adoro.com.pk/cdn/shop/files/SilkGlamKnotPump-Silver-1.jpg?v=1753446339&width=1946",
            },
            {
              id: 4,
              name: "Luxury Watches",
              price: "Rs 5,900",
              img: "https://7star.pk/wp-content/uploads/2023/12/maxresdefault.jpg",
            },
            {
              id: 5,
              name: "Home Comforts",
              price: "Rs 8,500",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsoSdcVrQG9nUXGjjLAxa6WXyD_E0jHIXVyQ&s",
            },
            {
              id: 6,
              name: "Phone Accessories",
              price: "Rs 2,800",
              img: "https://s.alicdn.com/@sc04/kf/H537ae98d00074d628cc18b22e4c9bc5aG.jpg",
            },
            {
              id: 7,
              name: "Pro Headphones",
              price: "Rs 12,000",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGW-QJhVRFmwl4BUuDzSV1QFnjVrK4QVsxSBTduqaADmWIwDXuuvBHFAmhos_xdfccBnI&usqp=CAU",
            },
            {
              id: 8,
              name: "Smart Water Bottles",
              price: "Rs 1,500",
              img: "https://5.imimg.com/data5/ANDROID/Default/2025/7/525121483/UE/WO/FG/247019750/product-jpeg-500x500.jpg",
            },
          ].map((trend) => (
            <div
              key={trend.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={trend.img}
                alt={trend.name}
                className="h-48 sm:h-52 md:h-56 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {trend.name}
                </h3>
                <p className="text-pink-600 font-bold mt-1">{trend.price}</p>
                <button className="mt-3 px-4 py-2 text-sm md:text-base bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
