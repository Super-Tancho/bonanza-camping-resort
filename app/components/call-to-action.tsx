
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_0674.png"
          alt="Beautiful Bonanza Camping Resort scenery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-green/80"></div>
      </div>

      <div className="relative z-10 container-max text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready for Your Wisconsin Dells <span className="text-golden-yellow">Adventure?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't wait - the perfect Wisconsin Dells camping experience is just a reservation away. 
            Book your stay at Bonanza Camping Resort and create memories that will last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/contact"
              className="btn-primary flex items-center space-x-2 text-lg px-8 py-4 bg-golden-yellow hover:bg-golden-yellow/90 text-forest-green"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Stay</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+16082542267"
              className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-forest-green"
            >
              <Phone className="w-5 h-5" />
              <span>Call (608) 254-CAMP</span>
            </a>
          </div>

          {/* Special Offers */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Check-in Time',
                description: '3:00 PM daily - Welcome to your adventure!',
                icon: '🏕️'
              },
              {
                title: 'Check-out Time',
                description: '11:00 AM - Thank you for staying with us!',
                icon: '👋'
              },
              {
                title: 'Wisconsin Dells',
                description: 'Prime location for all area attractions',
                icon: '📍'
              }
            ].map((offer, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl mb-3">{offer.icon}</div>
                <h3 className="text-lg font-semibold text-golden-yellow mb-2">{offer.title}</h3>
                <p className="text-cream text-sm">{offer.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Location Message */}
          <motion.div
            className="mt-12 p-4 bg-golden-yellow/20 rounded-lg border border-golden-yellow/30 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-golden-yellow font-semibold">
              🌲 Located at 1770 Wisconsin Dells Pkwy - Your gateway to Wisconsin Dells adventures!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
