
'use client'

import { motion } from 'framer-motion'
import { Shield, Wifi, Car, Utensils, Bath, MapPin } from 'lucide-react'
import Image from 'next/image'

export function FeaturesSection() {
  const features = [
    {
      iconName: 'shield',
      title: '24/7 Security',
      description: 'Safe and secure camping with round-the-clock security patrol.'
    },
    {
      iconName: 'wifi',
      title: 'WiFi Available',
      description: 'Stay connected with complimentary WiFi at the main lodge.'
    },
    {
      iconName: 'car',
      title: 'Free Parking',
      description: 'Ample parking space for all vehicles including RVs.'
    },
    {
      iconName: 'utensils',
      title: 'Camp Store',
      description: 'On-site store with camping supplies and local provisions.'
    },
    {
      iconName: 'shower',
      title: 'Clean Facilities',
      description: 'Modern restrooms and shower facilities maintained daily.'
    },
    {
      iconName: 'mappin',
      title: 'Prime Location',
      description: 'Easy access to hiking trails and natural attractions.'
    }
  ]

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-6 h-6 text-forest-green" />
      case 'wifi':
        return <Wifi className="w-6 h-6 text-forest-green" />
      case 'car':
        return <Car className="w-6 h-6 text-forest-green" />
      case 'utensils':
        return <Utensils className="w-6 h-6 text-forest-green" />
      case 'shower':
        return <Bath className="w-6 h-6 text-forest-green" />
      case 'mappin':
        return <MapPin className="w-6 h-6 text-forest-green" />
      default:
        return <Shield className="w-6 h-6 text-forest-green" />
    }
  }

  return (
    <section className="section-padding bg-cream">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-forest-green mb-6">
              Why Choose <span className="text-golden-yellow">Bonanza Camping?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              We've thoughtfully designed every aspect of your camping experience to ensure 
              comfort, safety, and unforgettable memories in the great outdoors.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-golden-yellow rounded-full flex-shrink-0">
                    {renderIcon(feature.iconName)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-green mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://i.pinimg.com/736x/3e/59/16/3e59163c1411395f1da3f6670eedb623--lake-tahoe-ca-fallen.jpg"
                alt="Modern camping facilities"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-yellow mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
