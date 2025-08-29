import { Button } from "../pages/MyButton";
import { MyCard, CardHeader, CardTitle, CardContent, CardFooter } from "../pages/MyCard";
import Products from "../Components/Products";
import Testimonials from "../Components/Testimonal";
import DiscountBanner from "../Components/Discountbanner";
export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">

      {/* Hero Section - First */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to TrendMart</h1>
        <p className="mt-4 text-lg md:text-xl">Your one-stop shop for the latest fashion & lifestyle products.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button className="px-6 py-3 text-base font-semibold bg-gray-100 text-black rounded-lg shadow-md hover:bg-gray-200 transition">
            Shop Now
          </Button>
          <Button className="px-6 py-3 text-base font-semibold bg-gray-100 text-black rounded-lg shadow-md hover:bg-gray-200 transition">
            Explore
          </Button>
        </div>
      </section>
      {/* Products Section - After Hero */}
      <Products />
      {/* Shop by Categories */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">🛍️ Shop by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Men", img: "data:image/jpeg;base64,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" },
            { name: "Women", img: "https://cache.net-a-porter.com/content/images/story-head-content-24thOctober2022-1666086890596.jpeg/w1900_q65.jpeg" },
            { name: "Kids", img: "https://img.drz.lazcdn.com/static/pk/p/ef43bfd25591e2fc241bb054747fe78a.jpg_720x720q80.jpg" },
            { name: "Accessories", img: "https://www.arzaan.pk/cdn/shop/products/re2_1024x1024.jpg?v=1684931902" },
          ].map((cat) => (
            <div
              key={cat.name}
              className="bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer transition p-4 flex flex-col items-center"
            >
              {/* Text upar */}
              <p className="text-lg font-medium mb-2">{cat.name}</p>
              {/* Image neeche */}
              <img
                src={cat.img}
                alt={cat.name}
                className="rounded-md w-full object-cover h-60"
              />
            </div>
          ))}
        </div>
      </section>
      {/* Featured Products Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
            🌟 Featured Products
          </h2>
          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                name: "⌚ Timeless Watches",
               price: "Rs 1,200",
                img: "https://login.com.pk/cdn/shop/files/L-110_enigma_new_webp_4.webp?v=1750095517&width=533"
              },
              {
                id: 2,
                name: "🎒 Trendy Bags",
                price: "Rs 3,800",
                img: "https://img.drz.lazcdn.com/static/pk/p/75541f65e992ffa4f45e351fb8a9cacb.jpg_720x720q80.jpg_.webp"
              },
              {
                id: 3,
                name: "🌸 Luxury Perfumes ",
                price: "Rs 4,500",
                img: "https://media.istockphoto.com/id/1493179332/photo/beautiful-bottle-of-womens-perfume-or-eau-de-parfum-against-a-background-of-a-pink-chiffon.jpg?s=612x612&w=0&k=20&c=p3M8yOiOaL9DjTxCvwekmumJlVG2G4cZvz-fR8XHoWw="
              },
              {
                id: 4,
                name: "🤵 Formal Wear ",
                price: "Rs 6,200",
                img: "https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?s=612x612&w=0&k=20&c=RR19yJjRuR-CBWj9u1sQkFgtdYJ07KEkM678R0mtuZY="
              },
            ].map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-4 flex flex-col items-center"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="rounded-lg w-full h-48 object-cover"
                />
                <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                  {product.name}
                </h3>
                <p className="text-gray-600">Top Pick</p>
                <p className="mt-2 font-bold text-blue-600">{product.price}</p>
                <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
   {/* Discount Section  */}
   <DiscountBanner />
      {/* 🌟 Latest Trends Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          ⭐ Latest Trends
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              name: "Hair Care Essential",
              price: "Rs 4,500",
              img: "https://www.byrdie.com/thmb/KUMs21Junq7plj9rBiAwQLASVmY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-haircare-brands-6714aaf8e42f42568745de559596c3c3.jpg",
            },
            {
              id: 2,
              name: "Trendy Jackets",     
               price: "Rs 6,800",
              img: "https://thumbs.dreamstime.com/b/hanger-stand-warm-jackets-winter-fur-collar-hang-white-wooden-hangers-collection-shop-season-fashion-background-136085871.jpg",
            },
            {
              id: 3,
              name: "Glam Heels",
              price: "Rs 3,200",
              img: "https://s42173.pcdn.co/wp-content/uploads/2024/01/BA2D0A5C-467F-4A0B-BBF2-833B28570731-e1704297365925.webp",
            },
            {
              id: 4,
              name: "Luxury Watches",
              price: "Rs 5,900",
              img: "https://theglossarymagazine.com/wp-content/uploads/Bulgari-2024_Bulgari-Bulgari_103897-103967_Crea_03.webp",
            },
            {
              id: 5,
              name: "Home Comforts",
              price: "Rs 8,500",
              img: "https://www.marketresearchintellect.com/images/blogs/pillow-talk-trends-shaping-the-decorative-pillow-market.webp",
            },
            {
              id: 6,
              name: "Phone Accessories",
              price: "Rs 2,800",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IuQk-bH7UYLM0hpHz_hKwQRJrR-WTLU3Rw&s",
            },
            {
              id: 7,
              name: "Pro Headphones",
              price: "Rs 12,000",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsHps3a2TG6AQbbJUTX7WNP5_VNG1JK1SYDg&s",
            },
            {
              id: 8,
              name: "Smart Water Bottles",
              price: "Rs 1,500",
              img: "https://nestasia.in/cdn/shop/files/waterbottle_2_0dee5d6a-2c11-431e-9ffb-382fd25a8a8b.jpg?v=1726490117&width=600s",
            },
          ].map((trend) => (
            <div
              key={trend.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={trend.img}
                alt={trend.name}
                className="h-56 w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{trend.name}</h3>
                <p className="text-pink-600 font-bold mt-1">{trend.price}</p>
                <button className="mt-3 px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
