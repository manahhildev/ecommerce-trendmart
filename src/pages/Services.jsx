import { Code, Cloud, Settings, ShoppingCart, ShieldCheck, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-blue-600" />,
      title: "Web Development",
      desc: "Custom, fast, and responsive websites built with modern technologies to boost your online presence.",
    },
    {
      icon: <Cloud className="w-10 h-10 text-purple-600" />,
      title: "Cloud Solutions",
      desc: "Deploy and scale your business securely with cloud migration, hosting, and DevOps automation.",
    },
    {
      icon: <Settings className="w-10 h-10 text-green-600" />,
      title: "E-Commerce Development",
      desc: "Feature-rich online stores with payment integration and seamless user experiences.",
    },
    {
      icon: <ShoppingCart className="w-10 h-10 text-orange-600" />,
      title: "Digital Marketing",
      desc: "Grow your business with SEO, social media, and performance marketing campaigns.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
      title: "Cybersecurity",
      desc: "Protect your business from digital threats with advanced monitoring and secure architecture.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-pink-600" />,
      title: "Mobile App Development",
      desc: "iOS & Android apps with sleek design and powerful features to engage your customers on the go.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Our Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            At <span className="font-semibold text-blue-600">TrendMart</span>, we provide end-to-end IT solutions 
            to help businesses scale globally. Explore what we can do for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
