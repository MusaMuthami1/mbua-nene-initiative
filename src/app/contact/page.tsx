import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react';
import { organizationInfo } from '@/lib/data';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Get in touch with Mbua Nene Initiative. Contact us for partnerships, volunteer opportunities, or to learn more about our community development work in East Africa.',
  keywords: ['contact', 'get in touch', 'partnerships', 'volunteer', 'East Africa', 'community development'],
  openGraph: {
    title: 'Contact Mbua Nene Initiative - Get in Touch',
    description: 'Reach out to us for partnerships, volunteer opportunities, or to learn more about our work in East African communities.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              We'd love to hear from you. Whether you're interested in volunteering, 
              partnerships, or just want to learn more about our work, get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
                      <MapPin className="w-6 h-6 text-primary-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                      Our Address
                    </h3>
                    <p className="text-gray-600">
                      {organizationInfo.contact.address}
                    </p>
                    <p className="text-gray-600">
                      {organizationInfo.registration.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary-100 rounded-full">
                      <Phone className="w-6 h-6 text-secondary-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                      Phone
                    </h3>
                    <a 
                      href={`tel:${organizationInfo.contact.phone}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {organizationInfo.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-100 rounded-full">
                      <Mail className="w-6 h-6 text-accent-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                      Email
                    </h3>
                    <a 
                      href={`mailto:${organizationInfo.contact.email}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {organizationInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                      <Clock className="w-6 h-6 text-green-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                      Office Hours
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 5:00 PM EAT</p>
                      <p>Saturday: 9:00 AM - 1:00 PM EAT</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                      <Globe className="w-6 h-6 text-purple-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary-800 mb-2">
                      Follow Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href={organizationInfo.contact.socialMedia.facebook}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        Facebook
                      </a>
                      <a
                        href={organizationInfo.contact.socialMedia.twitter}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                      >
                        Twitter
                      </a>
                      <a
                        href={organizationInfo.contact.socialMedia.instagram}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        Instagram
                      </a>
                      <a
                        href={organizationInfo.contact.socialMedia.linkedin}
                        className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Quick Answers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Looking for specific information? These common topics might help you find what you need faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Volunteer Opportunities
              </h3>
              <p className="text-gray-600 mb-4">
                Learn about volunteering, application process, and current opportunities.
              </p>
              <Link href="/volunteer" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Partnerships
              </h3>
              <p className="text-gray-600 mb-4">
                Explore partnership opportunities with corporations and organizations.
              </p>
              <Link href="/partnerships" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Donations & Impact
              </h3>
              <p className="text-gray-600 mb-4">
                Find out how donations are used and track your impact.
              </p>
              <Link href="/donate" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Our Programs
              </h3>
              <p className="text-gray-600 mb-4">
                Discover our education, healthcare, and community development programs.
              </p>
              <Link href="/impact" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Media & Press
              </h3>
              <p className="text-gray-600 mb-4">
                Access press releases, media kits, and interview requests.
              </p>
              <Link href="/media" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>

            <div className="card text-center hover:scale-105 transition-transform duration-200">
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                FAQ
              </h3>
              <p className="text-gray-600 mb-4">
                Browse frequently asked questions about our work and operations.
              </p>
              <Link href="/#faq" className="text-primary-600 hover:text-primary-700 font-medium">
                View FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We operate across East Africa, with our main office in Nairobi and project sites 
              throughout Kenya, Uganda, and Tanzania.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Kenya (Headquarters)
              </h3>
              <p className="text-gray-600 mb-2">Nairobi - Main Office</p>
              <p className="text-gray-600 mb-2">Kisumu - Western Regional Office</p>
              <p className="text-gray-600">Mombasa - Coastal Regional Office</p>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Uganda
              </h3>
              <p className="text-gray-600 mb-2">Kampala - Country Office</p>
              <p className="text-gray-600 mb-2">Gulu - Northern Programs</p>
              <p className="text-gray-600">Jinja - Eastern Programs</p>
            </div>

            <div className="card text-center">
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Tanzania
              </h3>
              <p className="text-gray-600 mb-2">Dar es Salaam - Country Office</p>
              <p className="text-gray-600 mb-2">Arusha - Northern Programs</p>
              <p className="text-gray-600">Mwanza - Lake Region Programs</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}