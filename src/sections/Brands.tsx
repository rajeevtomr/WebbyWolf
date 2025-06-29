import React from 'react';

const brands = [
  { name: 'Hero', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/hero.3ddbe982.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'Honda', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/honda.a53134fc.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'Bajaj', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/bajaj.e4ab9137.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'TVS', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/tvs.64b496de.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'Royal Enfield', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/royal.bc25be60.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'Yamaha', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/yamah.31b67549.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'KTM', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/ktm.8f2b15dd.svg" width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'Ather', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/ather.bd1024d2.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'Ola Electric', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/ola.b8f6100d.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'Revolt', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/revolt.24b9fa7a.svg" width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'Ultraviolette', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/ultra.8937ece8.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
  { name: 'Tork Motors', svg: (
    <img src="https://web-by-wolf-ufa6.vercel.app/_next/static/media/torq.d61fc6f1.svg"  width={48} height={48} style={{display:'block',margin:'0 auto'}} />
  ) },
];

const Brands = () => (
  <section className="section-padding bg-white">
    <div className="container-custom">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-8 items-center justify-center">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center min-w-[90px]">
            <div className="mb-2">{brand.svg}</div>
            <span className="text-xs md:text-sm font-semibold text-gray-700 text-center whitespace-nowrap">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Brands; 