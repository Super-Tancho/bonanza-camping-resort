
'use client'

import { motion } from 'framer-motion'
import { Tent, Fish, TreePine, Waves, Camera, Users } from 'lucide-react'
import Image from 'next/image'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_0677.png"
            alt="Bonanza Camping Resort amenities and facilities"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Resort Amenities & Activities
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need for the perfect Wisconsin Dells getaway
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-forest-green mb-6">Resort Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover all the amenities and activities that make Bonanza Camping Resort special
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Tent,
                title: 'Premium Camping Sites',
                description: 'Well-maintained camping sites with modern amenities and beautiful natural surroundings.',
                features: ['Spacious sites', 'Clean facilities', 'Picnic tables', 'Fire rings'],
                image: '/images/IMG_0673.png'
              },
              {
                icon: Waves,
                title: 'River Access',
                description: 'Direct access to pristine river waters perfect for fishing, kayaking, and water activities.',
                features: ['Fishing spots', 'Water activities', 'Scenic views', 'River access'],
                image: '/images/IMG_0669.png'
              },
              {
                icon: TreePine,
                title: 'Natural Trails',
                description: 'Explore the beautiful Wisconsin landscape on our scenic walking and hiking trails.',
                features: ['Nature walks', 'Wildlife viewing', 'Scenic routes', 'Family-friendly'],
                image: '/images/IMG_0671.png'
              },
              {
                icon: Users,
                title: 'Recreational Facilities',
                description: 'Modern recreational facilities for family fun and group activities.',
                features: ['Group activities', 'Family entertainment', 'Recreation areas', 'Event spaces'],
                image: '/images/IMG_0672.png'
              },
              {
                icon: Camera,
                title: 'Scenic Photography',
                description: 'Capture stunning photos of Wisconsin Dells natural beauty throughout the resort.',
                features: ['Photo opportunities', 'Scenic viewpoints', 'Natural backdrops', 'Sunrise/sunset spots'],
                image: '/images/IMG_0675.png'
              },
              {
                icon: Fish,
                title: 'Fishing & Water Sports',
                description: 'Enjoy excellent fishing opportunities and various water activities on our river access.',
                features: ['Prime fishing spots', 'Water recreation', 'Equipment friendly', 'Peaceful waters'],
                image: '/images/IMG_0670.png'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-golden-yellow rounded-full mr-4">
                      <service.icon className="w-6 h-6 text-forest-green" />
                    </div>
                    <h3 className="text-xl font-bold text-forest-green">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <div className="w-2 h-2 bg-sage-green rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Information Section */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-forest-green mb-6">Plan Your Stay</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know for your Wisconsin Dells camping adventure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Check-in Information',
                details: ['Check-in: 3:00 PM', 'Check-out: 11:00 AM', 'Front desk assistance', 'Welcome orientation'],
                icon: '🏕️'
              },
              {
                title: 'Location Benefits',
                details: ['Heart of Wisconsin Dells', 'Easy attraction access', 'Scenic natural setting', 'Family-friendly area'],
                icon: '📍'
              },
              {
                title: 'Resort Features',
                details: ['River access', 'Modern facilities', 'Recreational areas', 'Natural trails'],
                icon: '🌲'
              }
            ].map((info, index) => (
              <motion.div
                key={info.title}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-2xl font-bold text-forest-green mb-6">{info.title}</h3>
                <ul className="space-y-3">
                  {info.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center text-gray-600">
                      <div className="w-2 h-2 bg-golden-yellow rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-forest-green">
        <div className="container-max">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-cream mb-6">Ready for Your Wisconsin Dells Adventure?</h2>
            <p className="text-xl text-cream/90 max-w-3xl mx-auto mb-8">
              Contact us today to plan your perfect camping getaway at Bonanza Camping Resort. 
              We're here to help make your Wisconsin Dells experience unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Contact Us Today
              </a>
              <a
                href="tel:+16082542267"
                className="btn-secondary text-lg px-8 py-4 inline-block"
              >
                Call (608) 254-CAMP
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
