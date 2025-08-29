import Slider from "react-slick";

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
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 px-6 rounded-xl mx-6 my-12 text-center">
      <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
        Big Sale - Up to 50% Off!
      </h2>
      <p className="mt-4 text-lg md:text-xl drop-shadow-md">
        Hurry up! Limited time offer on top fashion brands
      </p>

      {/* Image Slider */}
      <div className="mt-8">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i} className="flex justify-center">
              <img
                src={img}
                alt="sale item"
                className="rounded-md w-60 h-60 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </Slider>
      </div>

      <button className="mt-6 px-8 py-3 text-lg font-semibold bg-white text-pink-600 rounded-lg shadow-lg hover:bg-gray-100 transition">
        Shop Deals
      </button>
    </section>
  );
}
