import React from "react"
import { MyCard, CardContent, CardHeader, CardTitle } from "./MyCard"
import { CheckCircle, Users, Globe, Sparkles } from "lucide-react"

const About = () => {
  return (
    <div className="px-4 md:px-10 py-10 space-y-16">

      {/* Hero / Intro */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          About TrendMart
        </h1>
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-blue-600">TrendMart</span>, 
          your go-to destination for fashion, lifestyle, and trends. 
          We bring high-quality products with a seamless shopping experience.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MyCard className="shadow-md">
          <CardHeader>
            <CardTitle className="text-blue-600 text-lg md:text-xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 text-sm md:text-base">
              To make fashion accessible for everyone by offering the latest 
              trends at affordable prices with a focus on customer satisfaction.
            </p>
          </CardContent>
        </MyCard>

        <MyCard className="shadow-md">
          <CardHeader>
            <CardTitle className="text-blue-600 text-lg md:text-xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 text-sm md:text-base">
              To be a global fashion hub where innovation meets style, 
              empowering customers to express themselves freely.
            </p>
          </CardContent>
        </MyCard>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <MyCard className="text-center shadow-md">
            <CardHeader>
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Ali Khan"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto"
              />
              <CardTitle className="mt-4 text-lg md:text-xl">Ali Khan</CardTitle>
              <p className="text-xs md:text-sm text-slate-500">Founder & CEO</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm md:text-base">
                Visionary leader passionate about making TrendMart a household name.
              </p>
            </CardContent>
          </MyCard>

          <MyCard className="text-center shadow-md">
            <CardHeader>
              <img
                src="https://i.pravatar.cc/150?img=48"
                alt="Sara Ahmed"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto"
              />
              <CardTitle className="mt-4 text-lg md:text-xl">Sara Ahmed</CardTitle>
              <p className="text-xs md:text-sm text-slate-500">Creative Director</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm md:text-base">
                Brings unique design ideas and fashion inspiration to life.
              </p>
            </CardContent>
          </MyCard>

          <MyCard className="text-center shadow-md">
            <CardHeader>
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Omar Siddiqui"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto"
              />
              <CardTitle className="mt-4 text-lg md:text-xl">Omar Siddiqui</CardTitle>
              <p className="text-xs md:text-sm text-slate-500">Head of Marketing</p>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm md:text-base">
                Focused on building customer trust and global brand awareness.
              </p>
            </CardContent>
          </MyCard>
        </div>
      </section>

      {/* Timeline Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">
          Our Journey
        </h2>
        <div className="relative border-l-4 border-blue-500 ml-6 space-y-8">
          <div className="ml-6">
            <h3 className="text-lg md:text-xl font-semibold text-slate-700">2020</h3>
            <p className="text-slate-600 text-sm md:text-base">
              TrendMart was founded with a small team and big dreams.
            </p>
          </div>
          <div className="ml-6">
            <h3 className="text-lg md:text-xl font-semibold text-slate-700">2022</h3>
            <p className="text-slate-600 text-sm md:text-base">
              Expanded to nationwide delivery and thousands of customers.
            </p>
          </div>
          <div className="ml-6">
            <h3 className="text-lg md:text-xl font-semibold text-slate-700">2025</h3>
            <p className="text-slate-600 text-sm md:text-base">
              Now serving globally with trusted fashion products.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-800 mb-10">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 shadow-md rounded-xl space-y-3">
            <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto" />
            <h3 className="font-semibold text-base md:text-lg">Quality</h3>
            <p className="text-slate-600 text-sm md:text-base">
              We never compromise on product quality.
            </p>
          </div>
          <div className="p-6 shadow-md rounded-xl space-y-3">
            <Users className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto" />
            <h3 className="font-semibold text-base md:text-lg">Community</h3>
            <p className="text-slate-600 text-sm md:text-base">
              Our customers are the heart of everything we do.
            </p>
          </div>
          <div className="p-6 shadow-md rounded-xl space-y-3">
            <Globe className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto" />
            <h3 className="font-semibold text-base md:text-lg">Global Reach</h3>
            <p className="text-slate-600 text-sm md:text-base">
              Connecting trends and cultures worldwide.
            </p>
          </div>
          <div className="p-6 shadow-md rounded-xl space-y-3">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-blue-600 mx-auto" />
            <h3 className="font-semibold text-base md:text-lg">Innovation</h3>
            <p className="text-slate-600 text-sm md:text-base">
              Always evolving to deliver the best experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
