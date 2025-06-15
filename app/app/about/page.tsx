
'use client'

import { motion } from 'framer-motion'
import { MapPin, Users, Award, Heart } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Happy Campers', value: '5,000+' },
    { icon: Award, label: 'Years of Service', value: '15+' },
    { icon: MapPin, label: 'Wisconsin Dells', value: 'Prime Location' },
    { icon: Heart, label: 'Guest Satisfaction', value: '98%' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-forest-green to-sage-green flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Bonanza Camping Resort
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your gateway to Wisconsin Dells outdoor adventures
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-forest-green mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Located at 1770 Wisconsin Dells Pkwy in the heart of Wisconsin Dells, Bonanza Camping Resort 
                has been providing exceptional outdoor experiences for families and adventure seekers for over 
                a decade. Our prime location offers easy access to all the attractions Wisconsin Dells has to offer.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What sets us apart is our commitment to combining the natural beauty of Wisconsin's landscape 
                with modern amenities and recreational facilities. From our scenic river access to our 
                well-maintained camping grounds, every detail is designed to enhance your outdoor experience.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're seeking a peaceful retreat in nature or an action-packed family vacation, 
                Bonanza Camping Resort provides the perfect base for your Wisconsin Dells adventure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/IMG_0674.png"
                alt="Bonanza Camping Resort scenic grounds and facilities"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-forest-green">
        <div className="container-max">
          <motion.h2 
            className="text-4xl font-bold text-center text-cream mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Bonanza Camping Resort
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-golden-yellow rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-forest-green" />
                </div>
                <div className="text-3xl font-bold text-golden-yellow mb-2">{stat.value}</div>
                <div className="text-cream">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Amenities */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-forest-green mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Prime Wisconsin Dells Location
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Perfectly positioned for exploring Wisconsin Dells attractions while enjoying 
              the tranquility of nature.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'River Access',
                description: 'Direct access to pristine river waters for fishing, kayaking, and water activities.',
                icon: '🏞️'
              },
              {
                title: 'Natural Beauty',
                description: 'Surrounded by Wisconsin\'s stunning natural landscapes and scenic views.',
                icon: '🌲'
              },
              {
                title: 'Modern Facilities',
                description: 'Well-maintained grounds with clean facilities and recreational amenities.',
                icon: '🏕️'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center p-8 bg-sage-green/10 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-forest-green mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-forest-green mb-6">Experience Our Resort</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a glimpse at the natural beauty and amenities that await you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/IMG_0669.png', alt: 'Scenic river views at Bonanza Camping Resort' },
              { src: '/images/IMG_0670.png', alt: 'Natural landscapes and camping grounds' },
              { src: '/images/IMG_0671.png', alt: 'Recreational facilities and amenities' },
              { src: '/images/IMG_0672.png', alt: 'Beautiful Wisconsin Dells scenery' },
              { src: '/images/IMG_0673.png', alt: 'Resort grounds and natural surroundings' },
              { src: '/images/IMG_0675.png', alt: 'Outdoor activities and recreation areas' },
            ].map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
