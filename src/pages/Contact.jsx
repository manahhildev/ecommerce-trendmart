import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Contact <span className="text-blue-600">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-slate-700">Get in Touch</h3>
            <p className="text-slate-600">
              We'd love to hear from you! Whether you have a question about products,
              pricing, or anything else — our team is ready to answer.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-blue-600 text-2xl">📍</span>
                <p className="text-slate-700">123 Trend Mart Plaza, Karachi, Pakistan</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-600 text-2xl">📞</span>
                <p className="text-slate-700">+92 300 1234567</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-blue-600 text-2xl">✉️</span>
                <p className="text-slate-700">support@trendmart.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-5">
              <div>
                <label className="block text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
