
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Tent, Fish, Mountain, Flame, TreePine, Camera } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function ServicesOverview() {
  const services = [
    {
      iconName: 'tent',
      title: 'Premium Campsites',
      description: 'Spacious sites with modern amenities and stunning natural views.',
      image: 'https://i.pinimg.com/originals/18/92/71/189271a94101eaf42ec0d29216e588b8.png'
    },
    {
      iconName: 'fish',
      title: 'Fishing Adventures',
      description: 'Cast your line in pristine lakes and streams teeming with fish.',
      image: 'https://i.pinimg.com/originals/71/84/4c/71844c40d79367d4e81500b1bfb8cf27.jpg'
    },
    {
      iconName: 'mountain',
      title: 'Hiking Trails',
      description: 'Explore scenic trails for all skill levels through breathtaking landscapes.',
      image: 'https://i.pinimg.com/originals/df/e0/97/dfe097852b04c64b2c11beebfd786c0b.png'
    },
    {
      iconName: 'campfire',
      title: 'Campfire Programs',
      description: 'Evening entertainment with stories, songs, and s\'mores under the stars.',
      image: 'https://i.ytimg.com/vi/9nBFKH3qhGE/maxresdefault.jpg'
    },
    {
      iconName: 'tree',
      title: 'Nature Workshops',
      description: 'Learn about local wildlife and wilderness survival from expert guides.',
      image: 'https://i.ytimg.com/vi/DfHm2GfUAHI/hqdefault.jpg'
    },
    {
      iconName: 'camera',
      title: 'Photography Tours',
      description: 'Capture stunning landscapes with guided photography expeditions.',
      image: 'https://img.freepik.com/premium-photo/photographers-capture-stunning-landscapes-picturesque-countryside-during-golden-hour_1176614-5731.jpg'
    }
  ]

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'tent':
        return <Tent className="w-6 h-6 text-forest-green" />
      case 'fish':
        return <Fish className="w-6 h-6 text-forest-green" />
      case 'mountain':
        return <Mountain className="w-6 h-6 text-forest-green" />
      case 'campfire':
        return <Flame className="w-6 h-6 text-forest-green" />
      case 'tree':
        return <TreePine className="w-6 h-6 text-forest-green" />
      case 'camera':
        return <Camera className="w-6 h-6 text-forest-green" />
      default:
        return <Tent className="w-6 h-6 text-forest-green" />
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            Unforgettable <span className="text-golden-yellow">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From peaceful mornings by the lake to adventurous hikes through pristine wilderness, 
            we offer everything you need for the perfect outdoor getaway.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-golden-yellow rounded-full">
                    {renderIcon(service.iconName)}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-forest-green mb-3 group-hover:text-golden-yellow transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-sage-green font-medium group-hover:text-golden-yellow transition-colors">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link href="/services" className="btn-primary text-lg px-8 py-4">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
