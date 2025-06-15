
import Link from 'next/link'
import { TreePine, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-forest-green text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-golden-yellow rounded-full">
                <TreePine className="w-6 h-6 text-forest-green" />
              </div>
              <span className="text-xl font-bold">Bonanza Camping Resort</span>
            </div>
            <p className="text-cream mb-6 max-w-md">
              Experience the ultimate camping adventure in Wisconsin Dells. 
              Your gateway to natural beauty and outdoor recreation.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-golden-yellow" />
                <span className="text-sm text-cream">1770 Wisconsin Dells Pkwy, Wisconsin Dells, WI 53965</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-golden-yellow" />
                <span className="text-sm text-cream">(608) 254-CAMP</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-golden-yellow" />
                <span className="text-sm text-cream">info@bonanzacamping.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-golden-yellow">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-cream hover:text-golden-yellow transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-golden-yellow">Services</h3>
            <ul className="space-y-2">
              {[
                'Premium Camping Sites',
                'River Access',
                'Natural Trails',
                'Recreational Facilities',
              ].map((service) => (
                <li key={service}>
                  <span className="text-cream text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-sage-green/30 mt-12 pt-8 text-center">
          <p className="text-cream text-sm">
            © 2025 Bonanza Camping Resort. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
