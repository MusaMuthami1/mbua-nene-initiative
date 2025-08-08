import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Users, Heart, Globe, Award, Calendar } from 'lucide-react';
import { organizationInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us - Our Mission and Impact',
  description: 'Learn about Mbua Nene Initiative\'s mission to create sustainable positive change in East African communities through education, healthcare, environmental stewardship, and economic empowerment.',
  keywords: ['about mbua nene', 'mission', 'values', 'East Africa', 'community development', 'nonprofit history'],
  openGraph: {
    title: 'About Mbua Nene Initiative - Our Mission and Impact',
    description: 'Discover how we\'re creating sustainable positive change in East African communities through community-centered development programs.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              About {organizationInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Creating sustainable positive change in East African communities through 
              partnership, innovation, and unwavering commitment to human dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {organizationInfo.mission}
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-6">
                <Globe className="w-8 h-8 text-secondary-600" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {organizationInfo.vision}
              </p>
            </div>

            {/* Values Preview */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-accent-600" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-800 mb-4">
                Our Values
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Everything we do is guided by our core principles of community partnership, 
                transparency, and sustainable development.
              </p>
              <Link href="#values" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in {organizationInfo.registration.year}, Mbua Nene Initiative emerged from a simple yet powerful belief: 
                  that sustainable change happens when communities are empowered to lead their own development.
                </p>
                <p>
                  What started as a small group of passionate individuals working in rural Kenya has grown into 
                  a dynamic organization serving communities across East Africa. Our name, "Mbua Nene," reflects 
                  our commitment to genuine partnership—working alongside communities rather than imposing solutions from outside.
                </p>
                <p>
                  Today, we operate across Kenya, Uganda, and Tanzania, but our approach remains the same: 
                  listen first, build trust, and support communities in achieving their own vision for the future.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about/our-story.jpg"
                  alt="Early days of Mbua Nene Initiative showing founders meeting with community leaders in a rural village setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with communities, 
              partners, and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organizationInfo.values.map((value, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                  <Award className="w-6 h-6 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                  {value}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {getValueDescription(value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse group of professionals, community leaders, and volunteers united by 
              our shared commitment to positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Core Staff
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Full-time professionals dedicated to program management, community engagement, 
                and organizational development.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-6">
                <Heart className="w-8 h-8 text-secondary-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Volunteers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Passionate individuals who contribute their skills, time, and energy to support 
                our mission in their spare time.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-6">
                <Globe className="w-8 h-8 text-accent-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-800 mb-3">
                Community Partners
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Local leaders and organizations who are the heart of our work, guiding us 
                and implementing programs in their communities.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/volunteer" className="btn-primary">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Registration & Transparency */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
                Transparency & Accountability
              </h2>
              <p className="text-lg text-gray-600">
                We believe in complete transparency in our operations and impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full">
                      <Award className="w-6 h-6 text-primary-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-primary-800 mb-2">
                      Official Registration
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Registered NGO: {organizationInfo.registration.number}
                    </p>
                    <p className="text-gray-600">
                      Established: {organizationInfo.registration.year} in {organizationInfo.registration.country}
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary-100 rounded-full">
                      <Calendar className="w-6 h-6 text-secondary-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-primary-800 mb-2">
                      Annual Reports
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We publish detailed annual impact reports and financial statements.
                    </p>
                    <Link href="/impact/reports" className="text-primary-600 hover:text-primary-700 font-medium">
                      View Reports →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join us in creating sustainable positive change. Whether through volunteering, 
            donating, or partnering with us, you can help transform lives across East Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="btn-secondary">
              Become a Volunteer
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function getValueDescription(value: string): string {
  const descriptions: Record<string, string> = {
    'Community-Centered Approach': 'We believe communities are the experts on their own needs. We listen first, build trust, and support locally-led solutions.',
    'Transparency and Accountability': 'We maintain open communication about our work, finances, and impact. Every donor and community deserves to know how resources are used.',
    'Sustainable Development': 'We focus on long-term solutions that communities can maintain independently, building local capacity rather than creating dependency.',
    'Cultural Respect and Inclusion': 'We honor the rich traditions and knowledge of the communities we serve, ensuring our work respects and strengthens local culture.',
    'Innovation and Adaptation': 'We embrace new ideas and approaches, constantly learning and adapting our methods to better serve community needs.',
  };
  
  return descriptions[value] || 'A core principle that guides our work and relationships.';
}