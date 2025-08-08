'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { organizationInfo } from '@/lib/data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-800 text-white" role="contentinfo">
      <div className="container">
        {/* Main Footer Content */}
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Organization Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
                  <Heart className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-heading font-bold text-lg">
                    {organizationInfo.name}
                  </div>
                  <div className="text-sm text-gray-300">
                    {organizationInfo.tagline}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {organizationInfo.mission}
              </p>
              
              <div className="flex space-x-4">
                <a
                  href={organizationInfo.contact.socialMedia.facebook}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href={organizationInfo.contact.socialMedia.twitter}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label="Follow us on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href={organizationInfo.contact.socialMedia.instagram}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href={organizationInfo.contact.socialMedia.linkedin}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                  aria-label="Connect with us on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-lg">Quick Links</h3>
              <nav className="space-y-3" aria-label="Footer navigation">
                <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
                <Link href="/impact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Our Impact
                </Link>
                <Link href="/volunteer" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Get Involved
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Programs */}
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-lg">Our Programs</h3>
              <nav className="space-y-3" aria-label="Programs navigation">
                <Link href="/impact/education" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Education
                </Link>
                <Link href="/impact/healthcare" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Healthcare
                </Link>
                <Link href="/impact/environment" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Environment
                </Link>
                <Link href="/impact/community" className="block text-gray-300 hover:text-white transition-colors duration-200">
                  Community Development
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-heading font-semibold text-lg">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-sm text-gray-300">Address</div>
                    <div className="text-white">{organizationInfo.contact.address}</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-sm text-gray-300">Phone</div>
                    <a 
                      href={`tel:${organizationInfo.contact.phone}`}
                      className="text-white hover:text-accent-400 transition-colors duration-200"
                    >
                      {organizationInfo.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-300 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-sm text-gray-300">Email</div>
                    <a 
                      href={`mailto:${organizationInfo.contact.email}`}
                      className="text-white hover:text-accent-400 transition-colors duration-200"
                    >
                      {organizationInfo.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="pt-4 border-t border-white/10">
                <h4 className="font-semibold text-white mb-3">Stay Updated</h4>
                <Link 
                  href="/newsletter" 
                  className="inline-flex items-center px-4 py-2 bg-accent-500 text-primary-800 rounded-lg hover:bg-accent-400 transition-colors duration-200 font-medium"
                >
                  Subscribe to Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} {organizationInfo.name}. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Registered NGO: {organizationInfo.registration.number} | Est. {organizationInfo.registration.year}
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}