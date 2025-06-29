import React from 'react';
import Image from 'next/image';

const items = [
  {
    icon: '🚩',
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
    desc: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.'
  },
  {
    icon: '🚩',
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
    desc: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.'
  },
  {
    icon: '🚩',
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
    desc: 'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.'
  }
];

const TeamSection = () => (
  <section className="section-padding bg-white">
    <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
      {/* Left: Text and Items */}
      <div>
        <h2 className="text-primary text-lg font-semibold mb-2">Lorem ipsum dolor sit amet</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.</h3>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.</p>
        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-2xl mt-1">{item.icon}</span>
              <div>
                <h4 className="font-semibold text-gray-900 text-base mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Large Image */}
      <div className="flex justify-center">
        <Image src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=400&fit=crop&crop=center" alt="Two people talking" width={500} height={400} className="rounded-xl object-cover" />
      </div>
    </div>
  </section>
);

export default TeamSection; 