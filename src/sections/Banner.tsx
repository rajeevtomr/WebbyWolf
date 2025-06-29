import React from 'react';

const Banner = () => (
  <section className="relative w-full h-[400px] flex items-center justify-center">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&h=400&fit=crop&crop=center"
        alt="Motorcycle night"
        className="w-full h-full object-cover object-center rounded-none"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>
    <div className="relative z-10 text-center text-white px-4">
      <div className="mb-4">
        <span className="bg-white text-gray-900 px-4 py-1 rounded font-bold text-lg">LOGO</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.</h2>
      <p className="mb-6 max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed.</p>
      <button className="bg-white text-primary font-semibold px-6 py-2 rounded-lg">Loerum Ipsum →</button>
    </div>
  </section>
);

export default Banner; 