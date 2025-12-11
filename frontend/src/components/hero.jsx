import React from 'react';
import homepageBannerVideo from '../assets/homepage_banner.mp4';
import logoAnimation from '../assets/logo_animation.mp4';

const HeroSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* === ROW: Left Content + Right Video === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-8">

            {/* Left Video (One-time animation) */}
            <div className="relative aspect-video bg-gray-100 rounded-xl shadow-2xl overflow-hidden border-4 border-da-primary/50">
              <video
                src={logoAnimation}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Headline + Description + CTA */}
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold text-da-primary leading-tight">
                Automate Your Future. <span className="text-da-accent">Today.</span>
              </h1>

              <p className="mt-4 text-lg text-gray-600 max-w-xl">
                Leveraging cutting-edge technology to simplify complex processes and drive
                sustainable growth for your business.
              </p>

              <a
                href="#get-started"
                className="inline-flex items-center justify-center px-8 py-3 mt-6 
                           text-white bg-[#004080] hover:bg-green-700 
                           rounded-full text-base md:text-lg font-medium
                           shadow-lg transform hover:scale-105 transition duration-300"
              >
                Get Started Now
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative aspect-video md:aspect-[16/20] rounded-xl overflow-hidden border-4 border-transparent hover:border-da-accent transition duration-500 shadow-xl">
            <video
              src={homepageBannerVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
