export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white">TrendMart</h2>
          <p className="mt-2 text-slate-400">Your go-to store for fashion & lifestyle.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-slate-400 mb-3">Get updates & offers directly in your inbox.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 w-full rounded-l-md text-slate-900" 
            />
            <button className="bg-indigo-600 px-4 py-2 rounded-r-md text-white hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 text-slate-500 text-sm">
        © {new Date().getFullYear()} TrendMart. All Rights Reserved.
      </p>
    </footer>
  )
}
