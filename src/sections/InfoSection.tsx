import React from 'react';
import Image from 'next/image';

const features = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=80&h=80&fit=crop&crop=center',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    desc: 'Vestibulum ornare fermentum feugiat.'
  },
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=center',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    desc: 'Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.'
  },
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=80&h=80&fit=crop&crop=center',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    desc: 'Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.'
  }
];

const InfoSection = () => (
  <section className="section-padding bg-white">
    <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text and Features */}
      <div>
        <h2 className="text-primary text-lg font-semibold mb-2">Lorem ipsum dolor sit</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">LOREM IPSUM DOLOR SIT AMET</h3>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.</p>
        <div className="space-y-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4">
              <Image src={f.image} alt={f.title} width={64} height={64} className="rounded-lg object-cover" />
              <div>
                <h4 className="font-semibold text-gray-900 text-base mb-1">{f.title}</h4>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-8">
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">Lorem Ipsum</button>
          <span className="text-primary font-semibold flex items-center gap-1">📞 123456789</span>
        </div>
      </div>
      {/* Right: Large Image */}
      <div className="flex justify-center">
        <Image src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=500&fit=crop&crop=center" alt="Motorcycles" width={500} height={400} className="rounded-xl object-cover" />
      </div>
    </div>
  </section>
);

export default InfoSection; 