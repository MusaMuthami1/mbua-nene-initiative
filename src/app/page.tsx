import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Heart, Target, Globe, Calendar, User, BookOpen } from 'lucide-react';
import { impactStats, impactStories, volunteerProfiles, organizationInfo } from '@/lib/data';
import { formatNumber, formatCurrency } from '@/lib/utils';
import NewsletterSection from '@/components/sections/NewsletterSection';
import FAQSection from '@/components/sections/FAQSection';
import { faqItems } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-balance">
                Empowering Communities,{' '}
                <span className="text-accent-400">Transforming Lives</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                {organizationInfo.mission}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/volunteer" className="btn-secondary text-lg px-8 py-4">
                  Get Involved Today
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Link>
                <Link href="/impact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-800">
                  See Our Impact
                </Link>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/community-celebration.jpg"
                  alt="Community members celebrating the completion of a clean water project, with children and adults gathered around a new well"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl text-primary-800">
                <div className="text-2xl font-bold">{formatNumber(impactStats.livesImpacted)}+</div>
                <div className="text-sm text-gray-600">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-gray-50 section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every number represents a life changed, a community strengthened, and hope restored.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                <Users className="w-8 h-8 text-primary-600" aria-hidden="true" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">
                {formatNumber(impactStats.livesImpacted)}+
              </div>
              <div className="text-gray-600 font-medium">Lives Impacted</div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-4 group-hover:bg-secondary-200 transition-colors duration-200">
                <Heart className="w-8 h-8 text-secondary-600" aria-hidden="true" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">
                {formatNumber(impactStats.volunteersActive)}+
              </div>
              <div className="text-gray-600 font-medium">Active Volunteers</div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-4 group-hover:bg-accent-200 transition-colors duration-200">
                <Target className="w-8 h-8 text-accent-600" aria-hidden="true" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">
                {formatNumber(impactStats.projectsCompleted)}+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-200">
                <Globe className="w-8 h-8 text-green-600" aria-hidden="true" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">
                {formatCurrency(impactStats.fundsRaised)}
              </div>
              <div className="text-gray-600 font-medium">Funds Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-8">
              Our Mission
            </h2>
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-8">
              "{organizationInfo.mission}"
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {organizationInfo.values.slice(0, 3).map((value, index) => (
                <div key={index} className="p-6 bg-primary-50 rounded-xl">
                  <h3 className="font-heading font-semibold text-primary-800 mb-2">
                    {value}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="bg-gray-50 section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Stories of Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from the communities we serve, showcasing the transformative power of collective action.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {impactStories.slice(0, 3).map((story) => (
              <article key={story.id} className="card group hover:scale-105 transition-transform duration-200">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary-800 capitalize">
                      {story.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-heading font-semibold text-primary-800 group-hover:text-primary-600 transition-colors duration-200">
                    <Link href={`/impact/stories/${story.id}`}>
                      {story.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                        {new Date(story.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" aria-hidden="true" />
                        {story.readTime} min read
                      </span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/impact/stories/${story.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/impact" className="btn-primary">
              View All Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Volunteer Profiles */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-800 mb-4">
              Meet Our Heroes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated volunteers who are making a real difference in their communities every day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {volunteerProfiles.slice(0, 3).map((volunteer) => (
              <div key={volunteer.id} className="card text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={volunteer.image}
                    alt={volunteer.imageAlt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-primary-800 mb-1">
                  {volunteer.name}
                </h3>
                
                <p className="text-secondary-600 font-medium mb-3">
                  {volunteer.role}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {volunteer.bio}
                </p>
                
                <blockquote className="text-sm text-gray-700 italic mb-4 border-l-4 border-primary-200 pl-4">
                  "{volunteer.testimonial}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <User className="w-4 h-4 mr-1" aria-hidden="true" />
                    {formatNumber(volunteer.hoursVolunteered)} hours
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/volunteer" className="btn-primary">
              Join Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* FAQ Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container">
          <FAQSection faqs={faqItems.slice(0, 6)} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join thousands of volunteers and supporters who are creating positive change across East Africa. Your contribution, no matter how small, can transform lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer" className="btn-secondary text-lg px-8 py-4">
              Become a Volunteer
            </Link>
            <Link href="/donate" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800 text-lg px-8 py-4">
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}