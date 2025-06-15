
'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Los Angeles, CA',
      rating: 5,
      text: 'Absolutely incredible experience! The campsites are pristine, the staff is friendly, and the activities kept our whole family entertained. We\'ll definitely be back!',
      image: 'https://img.freepik.com/premium-photo/portrait-beautiful-happy-woman-smiling-outdoor-ai-generated_672509-2829.jpg'
    },
    {
      name: 'Mike Chen',
      location: 'San Diego, CA',
      rating: 5,
      text: 'Best camping trip ever! The fishing was amazing, and the hiking trails offered breathtaking views. Bonanza Camping exceeded all our expectations.',
      image: 'https://img.freepik.com/premium-photo/man-fishing-lake-with-smile-natural-setting_118124-375237.jpg'
    },
    {
      name: 'Emily Rodriguez',
      location: 'Phoenix, AZ',
      rating: 5,
      text: 'Perfect getaway from city life. The campfire programs were magical, and our kids loved the nature workshops. A truly unforgettable experience!',
      image: 'https://img.freepik.com/premium-photo/family-parents-children-tent-portrait-bonding-with-storytelling-woods-love-adventure-nature-dad-mom-with-smile-campsite-fun-camping-woman-laughing-with-kids_590464-459010.jpg'
    }
  ]

  return (
    <section className="section-padding bg-forest-green">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-golden-yellow">Campers Say</span>
          </h2>
          <p className="text-xl text-cream max-w-3xl mx-auto">
            Don't just take our word for it - hear from the families and adventurers 
            who've made unforgettable memories at Bonanza Camping.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-lg p-8 shadow-xl relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-golden-yellow rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-forest-green" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-golden-yellow text-golden-yellow" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-forest-green">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: '4.9/5', label: 'Average Rating' },
              { number: '2,500+', label: 'Reviews' },
              { number: '95%', label: 'Return Rate' },
              { number: '25+', label: 'Years Trusted' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-golden-yellow mb-1">{stat.number}</div>
                <div className="text-sm text-cream">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
