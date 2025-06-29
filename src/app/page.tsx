'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import Contact from '@/sections/Contact';
import LoadingScreen from '@/components/ui/LoadingScreen';
import InfoSection from '@/sections/InfoSection';
import TeamSection from '@/sections/TeamSection';
import Banner from '@/sections/Banner';
import Brands from '@/sections/Brands';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <div className={`${isLoading ? 'hidden' : 'block'}`}>
        <Hero />
        <InfoSection />
        <TeamSection />
        <Banner />
        <Brands />
        <Features />
        
        {/* Additional Sections */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                LOREM IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
              </p>
            </div>
            
            {/* Brand Logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
              {['Hero', 'Honda', 'Bajaj', 'TVS', 'Royal Enfield', 'Yamaha', 'KTM', 'Ather', 'Ola Electric', 'Revolt', 'Ultraviolette', 'Tork Motors'].map((brand, index) => (
                <div key={brand} className="text-center">
                  <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">{brand}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                LOREM IPSUM DOLOR SIT
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Lorem ipsum dolor sit amet consectetur.', image: '🏙️', desc: 'City buildings with sunset' },
                { title: 'Lorem ipsum dolor sit amet consectetur.', image: '🗿', desc: 'White statue' },
                { title: 'Lorem ipsum dolor sit amet consectetur.', image: '👘', desc: 'Person in colorful clothing' },
                { title: 'Lorem ipsum dolor sit amet consectetur.', image: '🍊', desc: 'Oranges with leaves' }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-custom">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl">{item.image}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-gray-800">{item.desc}</h4>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.
                  </p>
                  <button className="text-primary font-semibold hover:text-primary-dark transition-colors duration-300 flex items-center group text-sm">
                    Learn More
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
}
