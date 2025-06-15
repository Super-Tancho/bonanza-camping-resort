
'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['1770 Wisconsin Dells Pkwy', 'Wisconsin Dells, WI 53965'],
      link: 'https://maps.google.com/maps?q=1770+Wisconsin+Dells+Pkwy,+Wisconsin+Dells,+WI+53965'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(608) 254-CAMP', '(608) 254-2267'],
      link: 'tel:+16082542267'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@bonanzacamping.com', 'reservations@bonanzacamping.com'],
      link: 'mailto:info@bonanzacamping.com'
    },
    {
      icon: Clock,
      title: 'Check-in/Check-out',
      details: ['Check-in: 3:00 PM', 'Check-out: 11:00 AM'],
      link: null
    }
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch to plan your perfect camping adventure
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="text-center p-6 bg-cream rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-golden-yellow rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-forest-green" />
                </div>
                <h3 className="text-xl font-bold text-forest-green mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">
                      {info.link && detailIndex === 0 ? (
                        <a href={info.link} className="hover:text-forest-green transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-forest-green mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="activities">Activities Information</option>
                      <option value="group">Group Booking</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-green focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your camping plans or ask any questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-forest-green mb-6">Find Us</h2>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-sage-green/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-forest-green mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-forest-green mb-2">Bonanza Camping Resort</h3>
                    <p className="text-gray-600 mb-4">1770 Wisconsin Dells Pkwy<br />Wisconsin Dells, WI 53965</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="mt-8 p-6 bg-cream rounded-lg">
                <h3 className="text-xl font-bold text-forest-green mb-4">Getting Here</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Located in the heart of Wisconsin Dells</li>
                  <li>• Easy access to all Wisconsin Dells attractions</li>
                  <li>• 1770 Wisconsin Dells Pkwy, Wisconsin Dells, WI 53965</li>
                  <li>• Free parking available on-site</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-cream">
        <div className="container-max">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-forest-green mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about camping with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'What should I bring for camping?',
                answer: 'We provide fire rings, picnic tables, and restroom facilities. You\'ll need to bring your tent, sleeping gear, food, and personal items. Check our packing checklist on our website!'
              },
              {
                question: 'Are pets allowed?',
                answer: 'Yes! Well-behaved pets are welcome. They must be kept on leash and owners are responsible for cleanup. Pet fee is $10 per night.'
              },
              {
                question: 'Can I cancel my reservation?',
                answer: 'Cancellations made 48 hours before arrival receive full refund. Cancellations within 48 hours are subject to one night\'s fee.'
              },
              {
                question: 'Is there cell phone service?',
                answer: 'Cell service is limited in some areas of the campground. We have WiFi available at the main lodge for emergencies and check-in.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-forest-green mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
