import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function DiscountBanner() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6JoCx_cbOJu5oxjMEdlogNaRBIueCEYgUOg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDbW6BDoY-LuJn4-viNpRFqHZEBODqN01bBw&s", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCCbDM7b-pRwnPmFzHyrA6P3ZUbW2N4ognw&s", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT448zmw6vofg7_VFWVXY_E1Et_9JQIcbvCog&s", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFz02o4plVOIbkYQl2ynmrcFmwh3AQjEaNXA&s", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbG2Cr4egZmwTQ6PSvVR-7m78zEJOvyukKRA&s", 
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/laptop-sales-flyers-design-template-5cc4ac48342aa616fe240adddd9a0cbe_screen.jpg?ts=1707825738", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6gmIIH_ROAHWbpSeC2oDRsmZPB0wmR5S-Q&s"

  ]

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 px-6 rounded-xl mx-6 my-12 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-center drop-shadow-lg mb-6">
        🛍️ Big Sale – Up to 50% Off!
      </h2>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Sale ${index}`}
              className="rounded-xl w-full h-80 object-cover shadow-md hover:scale-105 transition"
            />
          </div>
        ))}
      </Slider>

      <div className="text-center mt-8">
        <button className="px-8 py-3 text-lg font-semibold bg-white text-pink-600 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
}
