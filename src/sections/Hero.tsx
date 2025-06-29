'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterFormSchema, NewsletterFormData } from '@/lib/validations';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterFormSchema)
  });

  const onSubmit = (data: NewsletterFormData) => {
    console.log('Newsletter subscription:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ background: 'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)' }}
        animate={{ background: [
          'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)',
          'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',
          'linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)'
        ] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Lorem ipsum dolor{' '}
              <span className="text-primary">sit amet</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
            </motion.p>

            {/* Newsletter Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <Button type="submit" variant="primary" size="lg">
                    Submit →
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-green-500">✓</span>
                  <span>No credit card required!</span>
                </div>
              </form>

              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4"
                  >
                    <p className="text-green-800 text-sm">
                      Thank you for subscribing! We'll keep you updated.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Smooth Scroll CTA */}
            <div>
              <a href="#info-section" className="inline-block mt-4">
                <Button variant="primary" size="lg">
                  Learn More ↓
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Hero Image with Diagonal Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-motorcycle.jpg"
                alt="Motorcyclists riding on street"
                fill
                className="object-cover rounded-xl"
                priority
              />
              {/* Diagonal Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, 25% 0, 0 100%)',
                  background: 'rgba(0,0,0,0.95)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 