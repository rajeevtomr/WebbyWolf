'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Zap, Shield, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
      category: 'Motorcycle rider'
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.',
      image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop&crop=center',
      category: 'Motorcycle'
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.',
      image: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=400&h=300&fit=crop&crop=center',
      category: 'Motorcycle shop'
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet consectetur.',
      description: 'Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
      category: 'Motorcycles display'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sodales facilisis donec dui. Mi porttitor ut aliquam mattis nascetur eget integer in nam. Nam nisl iaculis ac felis aliquet. Hendrerit tellus a purus lectus.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-custom hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-primary/20">
                {/* Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 relative overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.category}
                    width={400}
                    height={300}
                    className="rounded-xl object-cover w-full h-full"
                  />
                  {/* Fallback overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🏍️</span>
                      </div>
                      <h4 className="text-sm font-semibold text-gray-800">{feature.category}</h4>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {feature.description}
                </p>
                
                <button className="text-primary font-semibold hover:text-primary-dark transition-colors duration-300 flex items-center group text-sm">
                  Lorem ipsum→
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <Phone className="w-5 h-5" />
            <span>123456789</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mt-4">Lorem ipsum dolor sit amet</h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 